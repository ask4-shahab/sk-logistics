/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Steps } from "@/components/sections";
import { PageHero, QuoteLink } from "@/components/ui";

export const metadata: Metadata = { title: "Process" };

export default function Process() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Our working process"
        lead="Efficient, Tailored, and Reliable: Navigating Our Comprehensive Work Process with Ease"
      />
      <section className="process" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <Steps full />
        </div>
      </section>
      <section className="readyrow">
        <div className="wrap">
          <div className="pic">
            <img src="/img/ninja-picker.jpg" alt="Picker in a dark store aisle" />
          </div>
          <div className="tx">
            <div className="h">Ready to start with a quotation?</div>
            <div className="p">Submit a request by phone or email. We reply with a detailed quotation covering labor type, duration and specialized skills.</div>
            <QuoteLink />
          </div>
        </div>
      </section>
    </>
  );
}
