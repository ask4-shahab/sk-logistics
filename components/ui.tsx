import Link from "next/link";
import { ICONS, type IconName } from "@/lib/data";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const bg = variant === "dark" ? "#303030" : "#edbb24";
  const fg = variant === "dark" ? "#edbb24" : "#303030";
  return (
    <svg width="46" height="46" viewBox="0 0 120 120" aria-hidden="true">
      <rect width="120" height="120" fill={bg} />
      <polygon points="52,100 52,64 98,32 98,68" fill={fg} />
      <polygon points="22,92 22,56 52,36 52,72" fill={fg} />
      <polygon points="68,100 98,80 98,100" fill="#24c3cf" />
    </svg>
  );
}

export function Brand({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <>
      <Logo variant={variant} />
      <div style={{ lineHeight: 1 }}>
        <div className="cond" style={{ fontWeight: 700, fontSize: 25 }}>SK</div>
        <div style={{ fontWeight: 600, fontSize: 11, letterSpacing: ".3em", marginTop: 3 }}>LOGISTIC</div>
      </div>
    </>
  );
}

export function Icon({
  name,
  size = 32,
  color = "#24c3cf",
  stroke = 1.5,
}: {
  name: IconName;
  size?: number;
  color?: string;
  stroke?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

export function SectionTitle({
  children,
  color = "#24c3cf",
  as: Tag = "h2",
  className,
}: {
  children: React.ReactNode;
  color?: string;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={`stitle ${className ?? ""}`}>
      <svg width="18" height="52" viewBox="0 0 14 48" aria-hidden="true" style={{ flex: "none" }}>
        <polygon points="4,0 14,0 10,48 0,48" fill={color} />
      </svg>
      <Tag>{children}</Tag>
    </div>
  );
}

export function QuoteLink({ className = "btn btn-yellow", children = "Request a quotation" }: { className?: string; children?: React.ReactNode }) {
  return (
    <Link href="/contact" className={className}>
      {children} <span>→</span>
    </Link>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="phero">
      <svg viewBox="0 0 640 300" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="skh" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#f1c01f" />
            <stop offset=".6" stopColor="#b8951f" />
            <stop offset="1" stopColor="#3d3a22" />
          </linearGradient>
        </defs>
        <polygon points="260,300 640,0 640,110 400,300" fill="url(#skh)" />
        <polygon points="120,300 640,-110 640,0 260,300" fill="url(#skh)" opacity=".85" />
      </svg>
      <div className="wrap">
        <div className="crumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; <span>{eyebrow}</span>
        </div>
        <div className="ttl">
          <svg width="22" height="84" viewBox="0 0 14 48" aria-hidden="true" style={{ flex: "none" }}>
            <polygon points="4,0 14,0 10,48 0,48" fill="#24c3cf" />
          </svg>
          <h1 className="cond">{title}</h1>
        </div>
        <p>{lead}</p>
      </div>
    </section>
  );
}
