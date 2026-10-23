/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DIVISIONS, type Division } from "@/lib/data";
import { Icon, PageHero, QuoteLink, SectionTitle } from "./ui";

export default function DivisionDetail({ cur }: { cur: Division }) {
  return (
    <>
      <PageHero
        eyebrow="Divisions"
        title="What we deliver"
        lead="Specialized manpower divisions designed to serve diverse industries, with precision deployment, regulatory compliance and operational continuity."
      />

      <section className="tabs">
        <div className="wrap">
          {DIVISIONS.map((d) => (
            <Link key={d.key} href={`/services/${d.key}`} className={d.key === cur.key ? "on" : ""}>
              {d.name.replace(" Division", "")}
            </Link>
          ))}
        </div>
      </section>

      <section className="detail">
        <div className="wrap">
          <div className="txt">
            <SectionTitle>{cur.name}</SectionTitle>
            <div className="tag">{cur.tag}</div>
            <p>{cur.d1}</p>
            <p className="last">{cur.d2}</p>
            <div className="roles-lbl">Roles supplied</div>
            <div className="roles">
              {cur.roles.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
            <QuoteLink />
          </div>
          <div className="art">
            <div className="bg" />
            <img src={cur.img} alt={cur.name} style={{ objectPosition: cur.pos }} />
            <div className="tri" />
          </div>
        </div>
      </section>

      <section className="alldiv">
        <div className="wrap">
          <h2>All six divisions</h2>
          <div className="grid">
            {DIVISIONS.map((d) => (
              <Link key={d.key} href={`/services/${d.key}`}>
                <span className="ico"><Icon name={d.icon} size={30} /></span>
                <span>
                  <span className="nm" style={{ display: "block" }}>{d.name}</span>
                  <span className="sh" style={{ display: "block" }}>{d.short}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
