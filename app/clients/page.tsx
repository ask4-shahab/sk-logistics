/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CASES, LOGOS } from "@/lib/data";
import { PageHero, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Clients" };

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Clients and projects"
        lead="Long-term partnerships with government entities, Tier-1 contractors, industrial groups and private sector operators."
      />
      <section className="projects">
        <img src="/img/div-logistics.jpg" alt="" />
        <div className="wrap-narrow inner">
          <div className="tab cond"><span>/</span> Projects</div>
          <div className="box">
            {LOGOS.map((l) => (
              <div key={l}><img src={l} alt="Client logo" /></div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 0" }}>
        <div className="wrap">
          <SectionTitle>Achievements that define us</SectionTitle>
          <div className="cases">
            {CASES.map((c) => (
              <div className="case" key={c.name}>
                <div className="lg"><img src={c.logo} alt={c.name} /></div>
                <div className="tx">
                  <div className="nm">{c.name}</div>
                  <div className="p">{c.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
