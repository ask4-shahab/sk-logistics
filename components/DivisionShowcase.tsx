"use client";

import Link from "next/link";
import { useState } from "react";
import { DIVISIONS } from "@/lib/data";
import { Icon } from "./ui";

export default function DivisionShowcase() {
  const [active, setActive] = useState(DIVISIONS[0].key);
  const cur = DIVISIONS.find((d) => d.key === active) ?? DIVISIONS[0];

  return (
    <div className="showcase">
      <div className="list">
        {DIVISIONS.map((d) => (
          <button
            key={d.key}
            type="button"
            className={`divrow ${d.key === active ? "on" : ""}`}
            onMouseEnter={() => setActive(d.key)}
            onFocus={() => setActive(d.key)}
            onClick={() => setActive(d.key)}
          >
            <span className="ico">
              <Icon name={d.icon} />
            </span>
            <span style={{ flex: 1 }}>
              <span className="nm" style={{ display: "block" }}>{d.name}</span>
              <span className="sh" style={{ display: "block" }}>{d.short}</span>
            </span>
            <span className="arr" aria-hidden="true">→</span>
          </button>
        ))}
      </div>
      <div className="pic">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cur.img} alt={cur.name} style={{ objectPosition: cur.pos }} />
        <div className="cap">
          <div>
            <div className="t">{cur.name}</div>
            <div className="g">{cur.tag}</div>
          </div>
          <Link href={`/services/${cur.key}`}>Explore →</Link>
        </div>
      </div>
    </div>
  );
}
