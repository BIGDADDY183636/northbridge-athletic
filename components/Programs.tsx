const programs = [
  {
    name: "FOUNDATIONS",
    meta: "8 weeks · All levels",
    desc: "The complete introduction to strength training. Learn the lifts, build the base, understand the programming. Required for all new athletes.",
    price: "$400",
    note: "flat rate, everything included",
  },
  {
    name: "PERFORMANCE",
    meta: "Ongoing · Intermediate+",
    desc: "Monthly programming with weekly coach check-ins. Show up, follow the plan, do the work. No hand-holding required.",
    price: "$200/mo",
    note: "cancel anytime",
  },
  {
    name: "1-ON-1 COACHING",
    meta: "By appointment · All levels",
    desc: "Individual programming and technique work. One coach, one athlete, full attention for the full session.",
    price: "$90",
    note: "per session",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-ink border-t border-chalk/[0.08] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-body text-lime text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            Programs
          </p>
          <h2
            className="font-display text-chalk"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            WHERE YOU START.
          </h2>
        </div>

        <div className="divide-y divide-chalk/[0.08]">
          {programs.map((p) => (
            <div
              key={p.name}
              className="py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <h3
                    className="font-display text-chalk"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", letterSpacing: "-0.01em" }}
                  >
                    {p.name}
                  </h3>
                  <span className="font-body text-chalk/30 text-xs tracking-[0.2em] uppercase">
                    {p.meta}
                  </span>
                </div>
                <p className="font-body text-chalk/50 text-[0.88rem] leading-relaxed max-w-md">
                  {p.desc}
                </p>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <div
                  className="font-display text-lime leading-none"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", letterSpacing: "-0.02em" }}
                >
                  {p.price}
                </div>
                <p className="font-body text-chalk/25 text-[0.62rem] tracking-[0.15em] uppercase mt-1">
                  {p.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <a
            href="#visit"
            className="font-body font-semibold text-[0.72rem] tracking-[0.12em] uppercase bg-lime text-ink px-8 py-4 hover:bg-lime-dark transition-colors duration-200"
          >
            BOOK A FREE TRIAL →
          </a>
        </div>
      </div>
    </section>
  );
}
