const hours = [
  { day: "Mon – Fri", time: "5:00 am – 9:00 pm" },
  { day: "Saturday", time: "7:00 am – 2:00 pm" },
  { day: "Sunday", time: "Closed" },
];

function DarkMap() {
  return (
    <div className="w-full h-full min-h-[300px] rounded-sm overflow-hidden border border-chalk/[0.1]">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        aria-label="Northbridge Athletic at 4218 N Western Ave, Chicago"
      >
        {/* Dark base */}
        <rect width="400" height="300" fill="#080806" />

        {/* City blocks — slightly lighter */}
        {/* Left of Western Ave */}
        <rect x="0"   y="0"   width="85"  height="70" fill="#131310" />
        <rect x="0"   y="80"  width="85"  height="65" fill="#131310" />
        <rect x="0"   y="155" width="85"  height="65" fill="#131310" />
        <rect x="0"   y="230" width="85"  height="70" fill="#131310" />
        <rect x="95"  y="0"   width="85"  height="70" fill="#131310" />
        <rect x="95"  y="80"  width="85"  height="65" fill="#131310" />
        <rect x="95"  y="155" width="85"  height="65" fill="#131310" />
        <rect x="95"  y="230" width="85"  height="70" fill="#131310" />

        {/* Western Ave — vertical N-S road, slightly lighter strip */}
        <rect x="185" y="0" width="16" height="300" fill="#0f0f0c" />

        {/* Right of Western Ave */}
        <rect x="208" y="0"   width="85"  height="70" fill="#131310" />
        <rect x="208" y="80"  width="85"  height="65" fill="#131310" />
        <rect x="208" y="155" width="85"  height="65" fill="#131310" />
        <rect x="208" y="230" width="85"  height="70" fill="#131310" />
        <rect x="303" y="0"   width="97"  height="70" fill="#131310" />
        <rect x="303" y="80"  width="97"  height="65" fill="#131310" />
        <rect x="303" y="155" width="97"  height="65" fill="#131310" />
        <rect x="303" y="230" width="97"  height="70" fill="#131310" />

        {/* E-W street labels */}
        <text x="4" y="78"  fontSize="5" fill="#3a3a30" fontFamily="system-ui" letterSpacing="0.06em">SUNNYSIDE AVE</text>
        <text x="4" y="153" fontSize="5" fill="#3a3a30" fontFamily="system-ui" letterSpacing="0.06em">PENSACOLA AVE</text>
        <text x="4" y="228" fontSize="5" fill="#3a3a30" fontFamily="system-ui" letterSpacing="0.06em">EASTWOOD AVE</text>
        <text x="189" y="295" fontSize="5" fill="#3a3a30" fontFamily="system-ui" letterSpacing="0.06em" transform="rotate(-90, 189, 295)">WESTERN AVE</text>

        {/* Lime pin — at Western Ave / Pensacola (~4218 N) */}
        <circle cx="193" cy="153" r="6" fill="#c5ff00" opacity="0.3" className="pulse-ring" />
        <circle cx="193" cy="153" r="4" fill="#c5ff00" />

        {/* Address callout */}
        <rect x="203" y="142" width="96" height="17" rx="2" fill="#0a0a08" opacity="0.9" />
        <text x="251" y="153.5" fontSize="5.8" fill="#c5ff00" fontFamily="system-ui" textAnchor="middle" letterSpacing="0.03em">
          4218 N Western Ave
        </text>
      </svg>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="bg-ink border-t border-chalk/[0.08] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="font-body text-lime text-[0.6rem] tracking-[0.3em] uppercase mb-4">
            Find Us
          </p>
          <h2
            className="font-display text-chalk"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}
          >
            COME IN.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Left: info */}
          <div>
            <div className="mb-10">
              <p className="font-body text-lime text-[0.6rem] tracking-[0.25em] uppercase mb-4">
                Hours
              </p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-baseline border-b border-chalk/[0.07] pb-3">
                    <span className="font-body text-chalk/80 text-[0.9rem]">{h.day}</span>
                    <span className="font-body font-medium text-chalk/50 text-[0.85rem]">{h.time}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-body text-chalk/25 text-[0.72rem] italic">
                First session is always free. No sign-up required.
              </p>
            </div>

            <div>
              <p className="font-body text-lime text-[0.6rem] tracking-[0.25em] uppercase mb-3">
                Address
              </p>
              <p className="font-body text-chalk/80 text-[0.95rem] leading-relaxed">
                4218 N Western Ave<br />
                Chicago, IL 60625
              </p>
              <p className="font-body text-chalk/30 text-[0.72rem] mt-1 tracking-wide">
                North Side · Near Ravenswood
              </p>
            </div>
          </div>

          {/* Right: dark map */}
          <div className="h-80 md:h-auto md:min-h-[320px]">
            <DarkMap />
          </div>
        </div>
      </div>
    </section>
  );
}
