import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { ICONS, SITE, type IconName } from "@/lib/data";
import { PageHero, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const items: [IconName, string][] = [
    ["phone", SITE.phone],
    ["mail", SITE.email],
    ["pin", "An Nahda, Riyadh- 13222 KSA"],
    ["globe", SITE.web],
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Connect with us" lead="Reach out to our team for all your requirements." />
      <section className="contact">
        <div className="wrap">
          <div className="cbox">
            <div className="h1">Corporate Profile</div>
            <div className="bar" />
            <div className="h2">Connect With Us</div>
            <div className="sub">Reach out to our team for all your requirements.</div>
            <div className="items">
              {items.map(([icon, text]) => (
                <div className="it" key={icon}>
                  <div className="dot">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={ICONS[icon]} />
                    </svg>
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="cform">
            <SectionTitle>Request a quotation</SectionTitle>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
