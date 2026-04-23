"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { staffMembers, services, type BookableService } from "@/content/booking";
import {
  addMonths,
  buildMonthGrid,
  formatDateShort,
  formatLongDate,
  formatMonthYear,
  sameDay,
  parseDateShort,
} from "@/lib/dates";

type Step = "select" | "details" | "success";

type BookingDraft = {
  staffId: string;
  serviceId: BookableService["id"];
  date: Date;
  time: string; // "1:00 pm"
  client: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    region: string;
    zip: string;
    message: string;
  };
};

const DEFAULT_TZ = "Central Daylight Time (CDT)";
const TIMES = [
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
  "4:30 pm",
  "5:00 pm",
];

function nextOrderNumber() {
  const key = "geekservice_booking_order_v1";
  const n = Number(window.localStorage.getItem(key) ?? "10119");
  const next = Number.isFinite(n) ? n + 1 : 10120;
  window.localStorage.setItem(key, String(next));
  return next;
}

export function BookingWidget() {
  const router = useRouter();
  const sp = useSearchParams();

  const initialServiceId = (sp.get("serviceType") ??
    sp.get("service") ??
    "computer") as BookableService["id"];

  const initialDate = useMemo(() => {
    const d = sp.get("date");
    if (d) {
      const parsed = parseDateShort(d);
      if (parsed) return parsed;
    }
    return new Date();
  }, [sp]);

  const [step, setStep] = useState<Step>("select");
  const [staffId, setStaffId] = useState<string>("any");
  const [serviceId, setServiceId] =
    useState<BookableService["id"]>(initialServiceId);
  const [month, setMonth] = useState<Date>(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  );
  const [date, setDate] = useState<Date>(initialDate);
  const [time, setTime] = useState<string>(TIMES[1]);

  const svc = useMemo(
    () => services.find((s) => s.id === serviceId) ?? services[0],
    [serviceId],
  );

  const [client, setClient] = useState<BookingDraft["client"]>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "India",
    address: "",
    city: "",
    region: "",
    zip: "",
    message: "",
  });

  // keep URL params in sync for shareable state
  useEffect(() => {
    const params = new URLSearchParams(sp.toString());
    params.set("serviceType", serviceId);
    params.set("date", formatDateShort(date));
    router.replace(`/book?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId, date]);

  const monthCells = useMemo(() => buildMonthGrid(month), [month]);

  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  if (step === "success" && orderNumber) {
    return (
      <div className="space-y-6">
        <p className="text-sm text-[#222]">
          Thank you, <span className="font-semibold">{client.firstName}</span>
        </p>
        <p className="text-sm text-[#222]/70">
          You&apos;ll receive a confirmation email soon.
        </p>
        <p className="text-sm">
          <span className="text-[#222]/70">Order number:</span>{" "}
          <span className="font-semibold">{orderNumber}</span>
        </p>

        <div className="border border-black/10 bg-white p-5">
          <p className="text-sm font-semibold text-[#222]">{svc.title}</p>
          <p className="mt-1 text-xs text-[#222]/60">{svc.kind}</p>
          <div className="mt-4 space-y-1 text-sm text-[#222]/80">
            <p>
              {date.toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" })}{" "}
              at {time.toUpperCase()}
            </p>
            <p>
              {Math.round(svc.durationMinutes / 60)} hr
              {svc.durationMinutes % 60 ? ` ${svc.durationMinutes % 60} min` : ""}
            </p>
            <p>
              {staffMembers.find((s) => s.id === staffId)?.name ?? "Any staff member"}
            </p>
            <p className="text-xs text-[#222]/60">
              {client.address}, {client.city}, {client.region}, {client.zip},{" "}
              {client.country}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            className="rounded-none bg-black text-white hover:bg-black/90"
            onClick={() => {
              setStep("select");
              setOrderNumber(null);
            }}
          >
            Book another
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="rounded-none"
            onClick={() => router.push("/")}
          >
            Back to home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
      {/* left: calendar + times */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-[#222]">Schedule your service</h1>
          <p className="mt-2 text-sm text-[#222]/70">
            Check out our availability and book the date and time that works for you
          </p>
        </div>

        <div className="border border-black/10 bg-white p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#222]">Filter by:</p>
              <label className="text-sm">
                <span className="text-xs text-[#222]/70">Staff Member</span>
                <select
                  className="mt-2 h-10 w-full rounded border border-black/15 bg-white px-3 text-sm text-[#222] sm:w-[260px]"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                >
                  {staffMembers.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="text-sm">
              <p className="text-xs text-[#222]/70">Time zone:</p>
              <p className="font-medium text-[#222]">{DEFAULT_TZ}</p>
            </div>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[320px_1fr]">
            <div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="h-9 w-9 border border-black/15 bg-white text-sm"
                  onClick={() => setMonth(addMonths(month, -1))}
                  aria-label="Previous month"
                >
                  ‹
                </button>
                <p className="text-sm font-semibold text-[#222]">{formatMonthYear(month)}</p>
                <button
                  type="button"
                  className="h-9 w-9 border border-black/15 bg-white text-sm"
                  onClick={() => setMonth(addMonths(month, 1))}
                  aria-label="Next month"
                >
                  ›
                </button>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs text-[#222]/60">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="py-1">
                    {d}
                  </div>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-7 gap-1">
                {monthCells.map((c, idx) => {
                  const isSelected = sameDay(c.date, date);
                  return (
                    <button
                      key={`${c.date.toISOString()}-${idx}`}
                      type="button"
                      className={cn(
                        "h-9 border border-black/10 bg-white text-sm",
                        !c.inMonth ? "text-[#222]/30" : "text-[#222]",
                        isSelected ? "border-blue-700 bg-blue-50 font-semibold" : "hover:bg-[#f6f6f6]",
                      )}
                      onClick={() => setDate(c.date)}
                    >
                      {c.date.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#222]">
                Availability for {formatLongDate(date)}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={cn(
                      "h-10 border border-black/15 bg-white text-sm",
                      t === time ? "border-blue-700 bg-blue-50 font-semibold" : "hover:bg-[#f6f6f6]",
                    )}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[#222]">Preferences</p>
              <label className="block text-sm">
                <span className="text-xs text-[#222]/70">Staff Member *</span>
                <select
                  className="mt-2 h-10 w-full rounded border border-black/15 bg-white px-3 text-sm text-[#222] sm:w-[260px]"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                >
                  {staffMembers.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="text-sm">
                <p className="text-xs text-[#222]/70">Service Details</p>
                <select
                  className="mt-2 h-10 w-full rounded border border-black/15 bg-white px-3 text-sm text-[#222] sm:w-[260px]"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value as BookableService["id"])}
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              type="button"
              className="h-11 rounded-none bg-black px-8 text-white hover:bg-black/90"
              onClick={() => setStep("details")}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* right: booking form */}
      <div className="border border-black/10 bg-white p-5">
        <p className="text-sm font-semibold text-[#222]">Booking Form</p>

        <div className="mt-4 border-t border-black/10 pt-4">
          <p className="text-sm font-semibold text-[#222]">Client Details</p>
          <p className="mt-2 text-xs text-[#222]/70">
            Have an account? <span className="underline">Log in</span>
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">First name*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="Enter first name"
                value={client.firstName}
                onChange={(e) => setClient({ ...client, firstName: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">Last name*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="Enter last name"
                value={client.lastName}
                onChange={(e) => setClient({ ...client, lastName: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Email*</span>
              <input
                type="email"
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="email@example.com"
                value={client.email}
                onChange={(e) => setClient({ ...client, email: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Phone*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="Enter phone number"
                value={client.phone}
                onChange={(e) => setClient({ ...client, phone: e.target.value })}
              />
            </label>

            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Multi-line address</span>
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Country/Region*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="Country"
                value={client.country}
                onChange={(e) => setClient({ ...client, country: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Address*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="Street address"
                value={client.address}
                onChange={(e) => setClient({ ...client, address: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">City*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="City"
                value={client.city}
                onChange={(e) => setClient({ ...client, city: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">Region*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="State / Region"
                value={client.region}
                onChange={(e) => setClient({ ...client, region: e.target.value })}
              />
            </label>
            <label className="text-sm">
              <span className="text-xs text-[#222]/70">Zip / Postal code*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="Zip / Postal code"
                value={client.zip}
                onChange={(e) => setClient({ ...client, zip: e.target.value })}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Date picker*</span>
              <input
                className="mt-2 h-10 w-full border border-black/15 bg-white px-3 text-sm"
                placeholder="MM/DD/YYYY"
                value={formatDateShort(date)}
                onChange={(e) => {
                  const parsed = parseDateShort(e.target.value);
                  if (parsed) setDate(parsed);
                }}
              />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="text-xs text-[#222]/70">Add your message*</span>
              <textarea
                rows={4}
                className="mt-2 w-full resize-none border border-black/15 bg-white px-3 py-2 text-sm"
                placeholder="Tell us what you need help with"
                value={client.message}
                onChange={(e) => setClient({ ...client, message: e.target.value })}
              />
            </label>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="secondary"
              className="rounded-none"
              onClick={() => setStep("select")}
            >
              Back
            </Button>
            <Button
              type="button"
              className="rounded-none bg-black text-white hover:bg-black/90"
              onClick={() => {
                const required = [
                  client.firstName,
                  client.lastName,
                  client.email,
                  client.phone,
                  client.country,
                  client.address,
                  client.city,
                  client.region,
                  client.zip,
                  client.message,
                ];
                if (required.some((v) => !v.trim())) return;
                const order = nextOrderNumber();
                setOrderNumber(order);
                setStep("success");
              }}
            >
              Confirm booking
            </Button>
          </div>

          {step === "details" ? null : (
            <p className="mt-3 text-xs text-[#222]/60">
              Fill details and click <span className="font-semibold">Confirm booking</span>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

