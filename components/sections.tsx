import { MISSION, STEPS } from "@/lib/data";

export function MissionGrid() {
  return (
    <div className="mission">
      {MISSION.map((t, i) => (
        <div className="m" key={i}>
          <div className="n cond">{String(i + 1).padStart(2, "0")}</div>
          <div className="tx">{t}</div>
        </div>
      ))}
    </div>
  );
}

export function Steps({ full = false }: { full?: boolean }) {
  return (
    <div className={`steps ${full ? "full" : ""}`}>
      {STEPS.map((s) => (
        <div className="step" key={s.n}>
          <div className="hd">
            <b className="cond">{s.n}</b>
            <b>{s.t}</b>
          </div>
          <div className="bd">
            {full ? (
              <>
                <p>{s.a}</p>
                <p>{s.b}</p>
              </>
            ) : (
              s.a
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
