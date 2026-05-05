export default function Hero() {
  return (
    <section className="min-h-screen bg-ink flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-24 pb-16 w-full">
        {/* Label */}
        <p className="font-body text-lime text-[0.62rem] tracking-[0.32em] uppercase mb-8">
          Northbridge Athletic&ensp;—&ensp;North Side, Chicago
        </p>

        {/* Stacked headline — each line sized to push toward viewport width */}
        <div className="leading-none space-y-1">
          <div
            className="font-display text-chalk block"
            style={{
              fontSize: "clamp(3.2rem, 9.5vw, 13rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}
          >
            STRENGTH TRAINING
          </div>
          <div
            className="font-display text-lime block"
            style={{
              fontSize: "clamp(4rem, 15.5vw, 21rem)",
              letterSpacing: "-0.025em",
              lineHeight: 0.88,
            }}
          >
            NO MIRRORS
          </div>
          <div
            className="font-display text-chalk block"
            style={{
              fontSize: "clamp(3.5rem, 13vw, 17.5rem)",
              letterSpacing: "-0.025em",
              lineHeight: 0.88,
            }}
          >
            NO NONSENSE.
          </div>
        </div>

        {/* Subhead + CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-2xl">
          <p className="font-body text-chalk/45 text-[0.95rem] leading-relaxed">
            Independent strength training on the North Side.
            By coaches, for athletes.
          </p>
          <a
            href="#programs"
            className="flex-shrink-0 font-body font-semibold text-[0.72rem] tracking-[0.12em] uppercase bg-lime text-ink px-8 py-4 hover:bg-lime-dark transition-colors duration-200"
          >
            BOOK A FREE TRIAL →
          </a>
        </div>
      </div>
    </section>
  );
}
