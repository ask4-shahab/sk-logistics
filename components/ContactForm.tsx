"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/data";

const OPTIONS = ["Logistics", "Industrial", "Construction", "Retail", "Hospitality", "Corporate"];

export default function ContactForm() {
  const sp = useSearchParams();
  const defaults = {
    division: sp.get("division") ?? undefined,
    workers: sp.get("workers") ?? undefined,
    duration: sp.get("duration") ?? undefined,
  };
  const [sent, setSent] = useState(false);

  const initialNeed = [
    defaults.workers ? `Workers needed: ${defaults.workers}` : "",
    defaults.duration ? `Duration: ${defaults.duration}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Company: ${f.get("company") || "-"}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone") || "-"}`,
      `Division: ${f.get("division")}`,
      "",
      `${f.get("need") || ""}`,
    ].join("\n");
    const subject = `Quotation request: ${f.get("division")}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="sent">
        <div className="h">Almost done</div>
        <div className="p">
          Your email app should have opened with the request filled in. Press send there to reach our team, or call {SITE.phone}.
        </div>
        <button className="btn btn-dark" style={{ marginTop: 20 }} onClick={() => setSent(false)}>
          Back to the form <span>→</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <label>
        Full name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Company
        <input name="company" autoComplete="organization" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className="full">
        Division
        <select name="division" defaultValue={OPTIONS.includes(defaults.division ?? "") ? defaults.division : OPTIONS[0]}>
          {OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className="full">
        Workforce needed (roles, numbers, duration)
        <textarea name="need" rows={5} defaultValue={initialNeed} />
      </label>
      <button type="submit" className="btn btn-yellow send">
        Send request <span>→</span>
      </button>
    </form>
  );
}
