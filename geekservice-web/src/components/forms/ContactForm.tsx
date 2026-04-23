"use client";

import { useActionState, useEffect, useMemo, useRef } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const initialState: ContactState = { ok: false, message: "" };

function TextField({
  label,
  name,
  required,
  type = "text",
  placeholder,
  defaultValue,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={cn(
          "mt-2 h-10 w-full border border-border bg-white px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:border-foreground/70",
          error ? "border-red-500" : "border-border",
        )}
      />
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
    </label>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  const defaultServiceType = useMemo(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("serviceType") ?? "";
  }, []);

  useEffect(() => {
    if (state.ok) {
      const el = document.getElementById("contact-form");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [state.ok]);

  const errs = state.fieldErrors;

  return (
    <form
      ref={formRef}
      id="contact-form"
      action={action}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="First Name"
          name="firstName"
          required
          placeholder="Enter your first name"
          autoComplete="given-name"
          error={errs?.firstName?.[0]}
        />
        <TextField
          label="Last Name"
          name="lastName"
          required
          placeholder="Enter your last name"
          autoComplete="family-name"
          error={errs?.lastName?.[0]}
        />
      </div>

      <TextField
        label="Email Address"
        name="email"
        required
        type="email"
        placeholder="email@example.com"
        autoComplete="email"
        error={errs?.email?.[0]}
      />

      <TextField
        label="Phone"
        name="phone"
        required
        placeholder="Enter your phone number"
        autoComplete="tel"
        error={errs?.phone?.[0]}
      />

      <fieldset className="space-y-3">
        <legend className="text-xs font-medium text-muted-foreground">
          Service Type <span className="text-red-600">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Computer",
            "Appliance",
            "Printer",
            "Maintenance",
          ].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="serviceType"
                value={opt.toLowerCase()}
                defaultChecked={defaultServiceType === opt.toLowerCase()}
                className="h-4 w-4 accent-foreground"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
        {errs?.serviceType?.[0] ? (
          <p className="text-xs text-red-600">{errs.serviceType[0]}</p>
        ) : null}
      </fieldset>

      <label className="block">
        <span className="text-xs font-medium text-muted-foreground">
          Details <span className="text-red-600">*</span>
        </span>
        <textarea
          name="details"
          rows={5}
          placeholder="Please describe the issue with your device"
          className={cn(
            "mt-2 w-full resize-none border border-border bg-white px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus-visible:border-foreground/70",
            errs?.details?.[0] ? "border-red-500" : "",
          )}
        />
        {errs?.details?.[0] ? (
          <p className="mt-2 text-xs text-red-600">{errs.details[0]}</p>
        ) : null}
      </label>

      <input
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        name="website"
      />

      <div className="space-y-3">
        <p
          className={cn(
            "text-xs",
            state.ok ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {state.message || "We typically respond within 1 business day."}
        </p>
        <Button
          type="submit"
          disabled={pending}
          className="h-11 w-full rounded-none bg-black text-white hover:bg-black/90"
        >
          {pending ? "Submitting…" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

