/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { MissionGrid } from "@/components/sections";
import { PageHero, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About SK Logistic"
        lead="A strategic workforce partner to government entities, giga-projects, Tier-1 contractors and industrial groups across the Kingdom."
      />

      <section className="about1">
        <div className="shape" />
        <div className="wrap inner">
          <SectionTitle color="#edbb24">How we formed</SectionTitle>
          <div className="cols">
            <div className="c">
              <p>We operate as a strategic workforce partner to government entities, giga-projects, Tier-1 contractors, industrial groups, and facility management operators. Our role extends beyond manpower supply — we design, mobilize, and manage workforce ecosystems that sustain project execution at scale.</p>
              <p>Our expertise spans construction, industrial operations, infrastructure, logistics, retail, hospitality, and integrated facilities management. Through a centralized workforce database, structured compliance systems, and operational supervision frameworks, we ensure each deployed workforce unit meets performance, safety, and regulatory standards.</p>
            </div>
            <div className="c">
              <p>From manpower planning and recruitment strategy to mobilization, on-site management, and continuous workforce optimization, we deliver end-to-end human capital solutions aligned with Saudi labor regulations and Vision 2030 development objectives.</p>
              <p>SK Logistic stands as a long-term operational partner — enabling productivity, safeguarding compliance, and reinforcing project continuity across the Kingdom&apos;s most demanding environments.</p>
            </div>
          </div>
          <div className="banner">
            <img src="/img/vision-render.jpg" alt="Vision 2030 public realm render" style={{ objectPosition: "50% 30%" }} />
          </div>
        </div>
      </section>

      <section className="inspire">
        <div className="wrap">
          <div className="l">
            <SectionTitle>How we inspire change</SectionTitle>
            <p>Dedicated to delivering structured, high-performance manpower solutions with precision, compliance, and operational efficiency.</p>
            <p>SK Logistic combines deep industry knowledge, disciplined workforce management systems, and forward-thinking manpower strategies to consistently exceed client expectations.</p>
          </div>
          <div className="r">
            <img src="/img/factory-bw.jpg" alt="Technician at a woodworking line" />
          </div>
        </div>
      </section>

      <section className="vm" style={{ padding: "88px 0" }}>
        <div className="shape" style={{ left: "34%", width: "30%" }} />
        <div className="wrap inner">
          <SectionTitle>Vision</SectionTitle>
          <p style={{ marginBottom: 16 }}>To become a leading manpower and workforce operations partner in Saudi Arabia, recognized for delivering reliable, scalable, and compliant workforce solutions that power the Kingdom&apos;s largest infrastructure and industrial projects.</p>
          <p style={{ marginTop: 0, marginBottom: 48 }}>We aim to set new standards in manpower excellence by combining operational efficiency, workforce discipline, and strategic workforce planning to support Saudi Vision 2030 and sustainable national development.</p>
          <SectionTitle>Mission</SectionTitle>
          <MissionGrid />
        </div>
      </section>

      <section className="csr">
        <div className="wrap">
          <div className="row">
            <div>
              <SectionTitle color="#edbb24" as="h2">Corporate Social Responsibility</SectionTitle>
            </div>
            <div>
              <p>We, SK Logistic workforce solutions, take initiative to contribute to the harmonious and sustainable development of society and the earth through all business activities that we carry out in each country and region, based on our Guiding Principles. We comply with local, national, and international laws and regulations as well as the spirit thereof, and conduct our business operations with honesty and integrity.</p>
              <p>We respect our employees and believe that the success of our business is led by each individual&apos;s creativity and solid teamwork. We support personal growth for our employees. We strive to provide fair working conditions and to maintain a safe and healthy working environment for all our employees.</p>
              <p>We constantly pursue safer, cleaner, and improved technologies that satisfy the evolving needs of society for sustainable mobility. We do not tolerate bribery of or by any business partner, government agency, or public authority, and maintain honest and fair relationships with government agencies and public authorities.</p>
            </div>
          </div>
          <div className="strip">
            <img src="/img/handshake.jpg" alt="Handshake" />
          </div>
        </div>
      </section>
    </>
  );
}
