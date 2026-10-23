/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DRIVES, LOGOS, OPS, WHY } from "@/lib/data";
import DivisionShowcase from "@/components/DivisionShowcase";
import QuoteBar from "@/components/QuoteBar";
import { MissionGrid, Steps } from "@/components/sections";
import { Icon, QuoteLink, SectionTitle } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="left">
            <div>
              <svg width="130" height="70" viewBox="0 0 130 70" style={{ display: "block", marginBottom: 28 }} aria-hidden="true">
                <g fill="#fff" opacity=".8">
                  {[4, 30, 56, 82, 108].flatMap((x) => [4, 34, 64].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />))}
                </g>
              </svg>
              <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1.1 }}>
                Towards
                <br />
                <b style={{ fontSize: 46, fontWeight: 700 }}>Vision 2030</b>
              </div>
            </div>
            <div>
              <h1 className="cond">
                Your one stop <span>solution.</span>
              </h1>
              <p>Our core strength lies in delivering reliable, skilled, and compliant workforce solutions across Saudi Arabia.</p>
              <div className="btns">
                <QuoteLink className="btn btn-yellow">Request a quotation</QuoteLink>
                <Link href="/services" className="btn btn-cyan">
                  Our divisions <span>→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="right">
            <svg viewBox="0 0 640 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="skg1" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#f1c01f" />
                  <stop offset=".55" stopColor="#c9a022" />
                  <stop offset="1" stopColor="#4a4220" />
                </linearGradient>
                <linearGradient id="skg2" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#f1c01f" />
                  <stop offset=".7" stopColor="#e0b023" />
                  <stop offset="1" stopColor="#6b5a1e" />
                </linearGradient>
                <clipPath id="skc">
                  <polygon points="0,500 640,52 640,282 0,730" />
                </clipPath>
              </defs>
              <polygon points="0,330 640,-118 640,32 0,480" fill="url(#skg1)" />
              <g clipPath="url(#skc)">
                <image href="/img/div-logistics.jpg" x="0" y="0" width="640" height="760" preserveAspectRatio="xMidYMid slice" style={{ filter: "grayscale(1) contrast(1.05)" }} />
              </g>
              <polygon points="0,500 640,52 640,282 0,730" fill="#24c3cf" opacity=".18" />
              <polygon points="0,750 640,302 640,452 0,900" fill="url(#skg2)" />
            </svg>
          </div>
        </div>
      </section>

      <QuoteBar />

      {/* LOGOS */}
      <section className="trusted">
        <div className="wrap lbl">Trusted by leading names in the Kingdom</div>
        <div className="marquee">
          <div className="track">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <div className="logo" key={i} aria-hidden={i >= LOGOS.length}>
                <img src={l} alt={i < LOGOS.length ? "Client logo" : ""} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT DRIVES US */}
      <section className="drives">
        <img src="/img/factory-bw.jpg" alt="" />
        <div className="wrap inner">
          <SectionTitle>What drives us</SectionTitle>
          <div className="grid" style={{ marginTop: 48 }}>
            {DRIVES.map((d) => (
              <div className="item" key={d.l}>
                <Icon name={d.icon} size={52} stroke={1.4} />
                <div className="big">
                  <b className="cond">{d.v}</b> {d.l}
                </div>
                <div className="txt">{d.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="sec">
        <div className="wrap">
          <SectionTitle>Divisions</SectionTitle>
          <p className="lead">
            Specialized manpower divisions designed to serve diverse industries across the Kingdom, each operating under structured workforce planning and disciplined supervision frameworks.
          </p>
          <DivisionShowcase />
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="sec-soft">
        <div className="wrap">
          <SectionTitle>What drives our manpower operations</SectionTitle>
          <div className="cards" style={{ marginTop: 44 }}>
            {OPS.map((o) => (
              <div className="opcard" key={o.n}>
                <div className="num cond">{o.n}</div>
                <div className="t">{o.t}</div>
                <div className="d">{o.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="vm">
        <div className="shape" />
        <div className="wrap inner">
          <SectionTitle>Vision</SectionTitle>
          <p>
            To become a leading manpower and workforce operations partner in Saudi Arabia, recognized for delivering reliable, scalable, and compliant workforce solutions that power the Kingdom&apos;s largest infrastructure and industrial projects.
          </p>
          <div className="pair">
            <div><img src="/img/site-group.jpg" alt="Site team" /></div>
            <div><img src="/img/forklift.jpg" alt="Forklift operator" style={{ objectPosition: "50% 25%" }} /></div>
          </div>
          <SectionTitle>Mission</SectionTitle>
          <MissionGrid />
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="wrap">
          <SectionTitle className="cond-title">
            <span className="cond" style={{ textTransform: "uppercase" }}>Our working process</span>
          </SectionTitle>
          <p className="sub">Efficient, Tailored, and Reliable: Navigating Our Comprehensive Work Process with Ease</p>
          <Steps />
          <div style={{ marginTop: 40 }}>
            <Link href="/process" className="link-yellow">See the full process →</Link>
          </div>
        </div>
      </section>

      {/* FILM */}
      <section style={{ padding: "96px 0 0" }}>
        <div className="wrap">
          <div className="film">
            <img className="pan" src="/img/crew-helmets.jpg" alt="Crew walking a factory floor" />
            <div className="shade" />
            <div className="slash" />
            <div className="body">
              <div className="play">
                <svg width="38" height="38" viewBox="0 0 24 24" aria-hidden="true"><polygon points="6,3 21,12 6,21" fill="#303030" /></svg>
              </div>
              <div>
                <div className="eyebrow">Company film</div>
                <h3>Workforce and logistics, on site</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="sec">
        <div className="wrap">
          <SectionTitle>Why SK Logistic</SectionTitle>
          <div className="whygrid" style={{ marginTop: 44 }}>
            {WHY.map((w) => (
              <div className="why" key={w.t}>
                <div className="ph"><img src={w.img} alt={w.t} /></div>
                <div className="t">{w.t}</div>
                <div className="d">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="shape" />
        <div className="wrap">
          <h2 className="cond">Your one stop solution.</h2>
          <QuoteLink className="btn btn-dark" />
        </div>
      </section>
    </>
  );
}
