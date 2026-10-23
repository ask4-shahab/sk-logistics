"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const OPTIONS = ["Logistics", "Industrial", "Construction", "Retail", "Hospitality", "Corporate"];

export default function QuoteBar() {
  const router = useRouter();
  const [division, setDivision] = useState(OPTIONS[0]);
  const [workers, setWorkers] = useState("");
  const [duration, setDuration] = useState("");

  function go(e: React.FormEvent) {
    e.preventDefault();
    const q = new URLSearchParams({ division });
    if (workers) q.set("workers", workers);
    if (duration) q.set("duration", duration);
    router.push(`/contact?${q.toString()}`);
  }

  return (
    <section className="qbar-sec">
      <div className="wrap-narrow">
        <form className="qbar" onSubmit={go}>
          <div className="qhead">01 &nbsp; Quotation: tell us what you need</div>
          <label>
            Division
            <select value={division} onChange={(e) => setDivision(e.target.value)}>
              {OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label>
            Workers needed
            <input placeholder="e.g. 120" value={workers} onChange={(e) => setWorkers(e.target.value)} inputMode="numeric" />
          </label>
          <label>
            Duration
            <input placeholder="e.g. 12 months" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </label>
          <button type="submit" className="go" style={{ border: 0, font: "inherit", cursor: "pointer" }}>
            Get my quotation <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
