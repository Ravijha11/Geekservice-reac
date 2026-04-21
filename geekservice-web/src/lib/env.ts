import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  SITE_URL: z.string().url().optional(),

  RESEND_API_KEY: z.string().min(1).optional(),
  CONTACT_TO_EMAIL: z.string().email().optional(),
  CONTACT_FROM_EMAIL: z.string().email().optional(),

  NEXT_PUBLIC_GTM_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_TAWK_TO_PROPERTY_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_TAWK_TO_WIDGET_ID: z.string().min(1).optional(),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL: process.env.SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  NEXT_PUBLIC_TAWK_TO_PROPERTY_ID: process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID,
  NEXT_PUBLIC_TAWK_TO_WIDGET_ID: process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID,
});

