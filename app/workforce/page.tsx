/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { WORKFORCE } from "@/lib/data";
import { PageHero, QuoteLink, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Workforce" };

export default function Workforce() {
  return (
    <>
      <PageHero
        eyebrow="Workforce"
        title="Our workforce"
        lead="A scalable pool of skilled, semi-skilled and general labor across multiple trades and industries."
      />
      <section className="wf">
        <img src="/img/div-retail.jpg" alt="" />
        <div className="wrap inner">
          <SectionTitle>Our supplied workforce</SectionTitle>
          <div className="wfgrid">
            {WORKFORCE.map((g) => (
              <div key={g.name}>
                <div className="hd">{g.name}</div>
                <div className="bd">
                  {g.roles.map((r) => (
                    <div key={r}>{r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-strip">
        <div className="wrap">
          <div className="tx">Need a different trade or a larger team? We plan the workforce around your project.</div>
          <QuoteLink className="btn btn-dark" />
        </div>
      </section>
    </>
  );
}
