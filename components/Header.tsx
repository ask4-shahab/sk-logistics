"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/data";
import { Brand } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isOn = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="SK Logistic home" onClick={() => setOpen(false)}>
          <Brand />
        </Link>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={isOn(n.href) ? "on" : ""} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="quote-btn">
          Get a quote <span>→</span>
        </Link>
        <button className="menu-toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
