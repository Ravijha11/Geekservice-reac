"use client";

import { useEffect } from "react";

type TawkWindow = Window & {
  Tawk_API?: Record<string, unknown>;
  Tawk_LoadStart?: Date;
};

export function ChatWidget() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID;
  const enabled = Boolean(propertyId && widgetId);

  useEffect(() => {
    if (!enabled) return;
    const w = window as TawkWindow;
    if (w.Tawk_API) return;

    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0?.parentNode?.insertBefore(s1, s0);
  }, [enabled, propertyId, widgetId]);

  return null;
}

