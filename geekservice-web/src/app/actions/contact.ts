"use server";

import { z } from "zod";
import { Resend } from "resend";
import { env } from "@/lib/env";

const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name.").max(60),
  lastName: z.string().min(1, "Please enter your last name.").max(60),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .min(7, "Please enter your phone number.")
    .max(40, "Please enter a valid phone number."),
  serviceType: z
    .enum(["computer", "printer", "appliance", "maintenance"] as const)
    .refine((v) => Boolean(v), { message: "Please choose a service type." }),
  details: z.string().min(10, "Please add a bit more detail.").max(4000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export type ContactState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

const rateBucket = new Map<string, { count: number; resetAt: number }>();
function rateLimit(key: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 5;
  const bucket = rateBucket.get(key);

  if (!bucket || bucket.resetAt < now) {
    rateBucket.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }
  if (bucket.count >= max) return { ok: false };
  bucket.count += 1;
  return { ok: true };
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.website) {
    return { ok: true, message: "Thanks! We’ll be in touch shortly." };
  }

  const key = parsed.data.email.toLowerCase();
  const rl = rateLimit(key);
  if (!rl.ok) {
    return {
      ok: false,
      message: "Too many requests. Please try again in a minute.",
    };
  }

  const canSend =
    env.RESEND_API_KEY && env.CONTACT_TO_EMAIL && env.CONTACT_FROM_EMAIL;
  if (!canSend) {
    return {
      ok: true,
      message:
        "Message received (email delivery not configured yet). Add RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL to enable sending.",
    };
  }

  const resend = new Resend(env.RESEND_API_KEY);
  const subject = `New support request: ${parsed.data.firstName} ${parsed.data.lastName}`;
  const lines = [
    `Name: ${parsed.data.firstName} ${parsed.data.lastName}`,
    `Email: ${parsed.data.email}`,
    parsed.data.phone ? `Phone: ${parsed.data.phone}` : undefined,
    parsed.data.serviceType ? `Service type: ${parsed.data.serviceType}` : undefined,
    "",
    parsed.data.details,
  ].filter(Boolean);

  await resend.emails.send({
    from: env.CONTACT_FROM_EMAIL!,
    to: env.CONTACT_TO_EMAIL!,
    replyTo: parsed.data.email,
    subject,
    text: lines.join("\n"),
  });

  return { ok: true, message: "Thanks! We’ll get back to you shortly." };
}

