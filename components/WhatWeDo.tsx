const services = [
  {
    num: "01",
    name: "STRENGTH",
    desc: "Compound lifts, periodized programming, progressive overload. The foundation of everything we do.",
  },
  {
    num: "02",
    name: "CONDITIONING",
    desc: "Metabolic work that doesn't compromise strength gains. We don't run long. We run smart.",
  },
  {
    num: "03",
    name: "OLYMPIC LIFTING",
    desc: "Snatch and clean & jerk, coached properly. Technique before weight — no exceptions.",
  },
  {
    num: "04",
    name: "MOBILITY",
    desc: "Functional range of motion for athletes who want to train hard for decades without breaking down.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-ink border-t border-chalk/[0.08] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="font-body text-lime text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2
            className="font-display text-chalk"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            THE WORK.
          </h2>
        </div>

        {/* 2×2 flip grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.num} className="flip-wrapper h-72 border border-chalk/[0.12]">
              <div className="flip-inner">
                {/* Front — black + chalk */}
                <div className="flip-face bg-ink p-8 flex flex-col">
                  <span className="font-body text-lime text-[0.6rem] tracking-[0.3em] mb-6">
                    {s.num}
                  </span>
                  <h3
                    className="font-display text-chalk mb-3"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.01em" }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-body text-chalk/40 text-sm leading-relaxed mt-auto">
                    {s.desc}
                  </p>
                </div>
                {/* Back — lime + black */}
                <div className="flip-face flip-back bg-lime p-8 flex flex-col">
                  <span className="font-body text-ink/40 text-[0.6rem] tracking-[0.3em] mb-6">
                    {s.num}
                  </span>
                  <h3
                    className="font-display text-ink mb-3"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.01em" }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-body text-ink/65 text-sm leading-relaxed mt-auto">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
