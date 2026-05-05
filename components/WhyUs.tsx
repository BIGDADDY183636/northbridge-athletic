const stats = [
  { number: "1:6", label: "coach-to-athlete ratio" },
  { number: "12+", label: "years of coaching experience" },
  { number: "200+", label: "athletes coached" },
];

export default function WhyUs() {
  return (
    <section className="bg-ink border-t border-chalk/[0.08] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-body text-lime text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            By the numbers
          </p>
          <h2
            className="font-display text-chalk"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            WHY IT WORKS.
          </h2>
        </div>

        {/* Massive stat numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-chalk/[0.08] border border-chalk/[0.08]">
          {stats.map((s) => (
            <div key={s.label} className="py-14 px-10 text-center">
              <div
                className="font-display text-lime leading-none"
                style={{
                  fontSize: "clamp(4rem, 8vw, 9rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {s.number}
              </div>
              <p className="font-body text-chalk/40 text-[0.65rem] tracking-[0.22em] uppercase mt-4">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-body text-chalk/30 text-[0.82rem] max-w-lg leading-relaxed">
          Small groups aren&apos;t a marketing line. They&apos;re how coaching actually works.
          You can&apos;t watch six people lift from across a room and call it coaching.
        </p>
      </div>
    </section>
  );
}
