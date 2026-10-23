import Link from "next/link";
import { DIVISIONS, NAV, SITE } from "@/lib/data";
import { Brand } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="stripe" />
      <div className="wrap cols4">
        <div>
          <div className="brand" style={{ color: "#fff" }}>
            <Brand variant="light" />
          </div>
          <p className="about">Your one stop solution. Workforce and logistics operations across Saudi Arabia.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <div className="lnk">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Divisions</h4>
          <div className="lnk">
            {DIVISIONS.map((d) => (
              <Link key={d.key} href={`/services/${d.key}`}>{d.name}</Link>
            ))}
          </div>
        </div>
        <div className="contactcol">
          <h4>Connect with us</h4>
          {SITE.phone}
          <br />
          {SITE.email}
          <br />
          {SITE.web}
          <br />
          {SITE.address}
        </div>
      </div>
      <div className="wrap bottom">
        <span>© 2026 SK Logistic. All rights reserved.</span>
        <span>Towards Vision 2030</span>
      </div>
    </footer>
  );
}
