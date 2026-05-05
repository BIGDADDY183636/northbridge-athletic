export default function Footer() {
  return (
    <footer className="bg-ink border-t border-chalk/[0.08] pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: wordmark + big CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14 pb-14 border-b border-chalk/[0.08]">
          <div>
            <div
              className="font-display text-lime leading-none select-none"
              style={{ fontSize: "clamp(3rem, 6vw, 7rem)", letterSpacing: "-0.02em" }}
            >
              NBA
            </div>
            <p className="font-body text-chalk/25 text-[0.6rem] tracking-[0.2em] uppercase mt-2">
              Northbridge Athletic · Chicago, IL
            </p>
          </div>
          <a
            href="#programs"
            className="font-body font-semibold text-[0.72rem] tracking-[0.12em] uppercase bg-lime text-ink px-10 py-4 hover:bg-lime-dark transition-colors duration-200"
          >
            BOOK A TRIAL →
          </a>
        </div>

        {/* Bottom: three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-body text-chalk/25 text-[0.58rem] tracking-[0.22em] uppercase mb-3">
              Location
            </p>
            <p className="font-body text-chalk/55 text-[0.85rem] leading-relaxed">
              4218 N Western Ave<br />
              Chicago, IL 60625
            </p>
          </div>
          <div>
            <p className="font-body text-chalk/25 text-[0.58rem] tracking-[0.22em] uppercase mb-3">
              Hours
            </p>
            <p className="font-body text-chalk/55 text-[0.85rem] leading-relaxed">
              Mon–Fri: 5am – 9pm<br />
              Sat: 7am – 2pm<br />
              Sun: Closed
            </p>
          </div>
          <div>
            <p className="font-body text-chalk/25 text-[0.58rem] tracking-[0.22em] uppercase mb-3">
              Contact
            </p>
            <p className="font-body text-chalk/55 text-[0.85rem]">
              hello@northbridgeathletic.com
            </p>
          </div>
        </div>

        <p className="font-body text-chalk/15 text-[0.58rem] tracking-wide uppercase">
          © 2026 Northbridge Athletic
        </p>
      </div>
    </footer>
  );
}
