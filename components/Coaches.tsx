const coaches = [
  {
    initials: "MK",
    name: "Mike Kowalski",
    creds: "CSCS · USAW Level 1 · 12 years coaching",
    philosophy: "Technique first, ego second. Every time, without exception.",
  },
  {
    initials: "DR",
    name: "Dana Reyes",
    creds: "CPT · CrossFit L2 · FMS Specialist · 9 years",
    philosophy: "Every athlete starts from zero. The work — not the gear, not the supplements — builds everything else.",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="bg-ink border-t border-chalk/[0.08] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-body text-lime text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            The Coaches
          </p>
          <h2
            className="font-display text-chalk"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            WHO COACHES YOU.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-chalk/[0.12]">
          {coaches.map((c, i) => (
            <div
              key={c.name}
              className={`p-10 md:p-14 ${i === 0 ? "border-b md:border-b-0 md:border-r border-chalk/[0.12]" : ""}`}
            >
              {/* Giant lime initials — the visual statement */}
              <div
                className="font-display text-lime leading-none mb-8 select-none"
                style={{
                  fontSize: "clamp(5rem, 10vw, 11rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                {c.initials}
              </div>

              <h3
                className="font-display text-chalk mb-2"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
              >
                {c.name.toUpperCase()}
              </h3>
              <p className="font-body text-lime text-[0.62rem] tracking-[0.22em] uppercase mb-5">
                {c.creds}
              </p>
              <p className="font-body text-chalk/50 text-[0.9rem] leading-relaxed">
                &ldquo;{c.philosophy}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Honest statement */}
        <p className="mt-10 font-body text-chalk/30 text-[0.78rem] max-w-lg leading-relaxed">
          We don&apos;t sell memberships, we coach athletes. If you&apos;re looking
          for a fitness club with a smoothie bar and a selfie wall, this isn&apos;t it.
        </p>
      </div>
    </section>
  );
}
