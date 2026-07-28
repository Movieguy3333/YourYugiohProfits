/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "./Button";

/* ------------------------------------------------------------------ */
/* Small presentational building blocks                                */
/* ------------------------------------------------------------------ */

// Ambient blurred glow orbs used to light the dark background
function GlowOrbs() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -top-24 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/20 blur-[100px] animate-pulse-glow" />
      <div
        className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-yellow-500/15 blur-[110px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

// A real Yu-Gi-Oh! card image wrapped in a gold frame with a holo sheen
// and a floating live-price badge.
function HoloCard({ img, name, price, change, className = "", style }) {
  return (
    <div className={`w-44 select-none ${className}`} style={style}>
      <div className="relative rounded-xl bg-gradient-to-br from-amber-200/90 via-amber-500/40 to-yellow-700/80 p-[2px] shadow-2xl shadow-black/60">
        {/* card image + holographic sheen */}
        <div className="animate-holo relative overflow-hidden rounded-[10px]">
          <img
            src={img}
            alt={name}
            className="block w-full"
            draggable="false"
          />
        </div>

        {/* floating live-price badge */}
        <div className="absolute -bottom-3.5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-amber-500/30 bg-gray-950/90 px-3 py-1 shadow-xl backdrop-blur-sm">
          <span className="text-sm font-extrabold text-white">{price}</span>
          <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-400">
            <span className="text-[8px]">▲</span>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
}

// Feature card with a glowing icon and hover lift
function Feature({
  icon,
  title,
  children,
  accent = "from-amber-500 to-yellow-500",
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/15 via-gray-900/50 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:from-amber-500/25 hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-2xl shadow-lg shadow-amber-500/20`}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-amber-300">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{children}</p>
    </div>
  );
}

// Numbered step used in the "how it works" flow
function Step({ number, title, children }) {
  return (
    <div className="relative rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/15 via-gray-900/50 to-gray-900/40 p-6 backdrop-blur-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-lg font-black text-gray-950 shadow-lg shadow-amber-500/30">
        {number}
      </div>
      <h4 className="mb-1.5 font-bold text-amber-100">{title}</h4>
      <p className="text-sm leading-relaxed text-gray-400">{children}</p>
    </div>
  );
}

// A single quote card
function Quote({ children, name, role }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/15 via-gray-900/50 to-gray-900/40 p-6 backdrop-blur-sm">
      <div className="mb-3 text-amber-400" aria-hidden>
        ★★★★★
      </div>
      <blockquote className="flex-1 text-sm leading-relaxed text-gray-300">
        “{children}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 text-xs font-black text-gray-950">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold text-amber-200">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

// Lightweight SVG area chart for the portfolio preview
function AreaChart() {
  const data = [22, 30, 27, 39, 34, 49, 44, 58, 53, 71, 66, 88];
  const w = 340;
  const h = 140;
  const pad = 6;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const stepX = (w - pad * 2) / (data.length - 1);
  const pts = data.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (h - pad * 2) * (1 - (v - min) / (max - min));
    return [x, y];
  });
  const line = pts
    .map(
      (p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`,
    )
    .join(" ");
  const area = `${line} L ${pts[pts.length - 1][0].toFixed(1)} ${h - pad} L ${pts[0][0].toFixed(1)} ${h - pad} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaFill)" />
      <path
        d={line}
        fill="none"
        stroke="url(#lineStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={last[0]}
        cy={last[1]}
        r="4.5"
        fill="#fde047"
        stroke="#111827"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Landing page                                                        */
/* ------------------------------------------------------------------ */

function LandingPage() {
  const navigate = useNavigate();

  const movers = [
    {
      img: "/blue-eyes-white-dragon.jpg",
      name: "Blue-Eyes White Dragon",
      price: "$418",
      change: "+12.4%",
    },
    {
      img: "/dark-magician.jpg",
      name: "Dark Magician",
      price: "$264",
      change: "+7.8%",
    },
    {
      img: "/Exodia.jpg",
      name: "Exodia the Forbidden One",
      price: "$1,290",
      change: "+21.0%",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* global background texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-gold"
        aria-hidden
      />

      {/* ============================= HERO ============================= */}
      <section className="relative">
        <GlowOrbs />
        <div className="relative container mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-24 md:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* left: copy */}
            <div className="animate-fade-up text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live prices • Updated 24/7
              </div>

              <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Turn your{" "}
                <span className="animate-gradient bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-[length:200%_auto] bg-clip-text text-transparent">
                  collection
                </span>{" "}
                into profit
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-300 lg:mx-0">
                The all-in-one Yu‑Gi‑Oh! hub to track your cards, get instant
                valuations, and let smart alerts ping you the moment it&apos;s
                time to buy or sell.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button
                  onClick={() => navigate("/sign-up")}
                  className="text-base px-8 py-3.5"
                >
                  🎯 Get Started Free
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/login")}
                  className="text-base px-8 py-3.5"
                >
                  Log in
                </Button>
              </div>

              {/* trust line */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 lg:justify-start">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">✓</span> No credit card
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">✓</span> Free forever plan
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">✓</span> Setup in 60s
                </span>
              </div>
            </div>

            {/* right: fanned holo-card mockup */}
            <div className="relative hidden h-[440px] items-center justify-center lg:flex">
              {/* fanned cards */}
              <HoloCard
                img="/dark-magician.jpg"
                name="Dark Magician"
                price="$264"
                change="7.8%"
                className="absolute z-0 -translate-x-28 rotate-[-12deg]"
              />
              <HoloCard
                img="/Exodia.jpg"
                name="Exodia the Forbidden One"
                price="$1,290"
                change="21.0%"
                className="absolute z-10 translate-x-28 rotate-[12deg]"
              />
              <HoloCard
                img="/blue-eyes-white-dragon.jpg"
                name="Blue-Eyes White Dragon"
                price="$418"
                change="12.4%"
                className="absolute z-20 scale-110"
              />
            </div>
          </div>
        </div>

        {/* bottom divider glow */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </section>

      {/* ============================ STATS ============================ */}
      <section className="relative border-y border-amber-500/20 bg-gradient-to-b from-amber-500/10 via-gray-950/40 to-gray-950/40">
        <div className="container mx-auto max-w-5xl px-4 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "10k+", label: "Cards tracked" },
              { value: "$1.2M", label: "Value under watch" },
              { value: "24/7", label: "Price monitoring" },
              { value: "60s", label: "Avg. setup time" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="animate-gradient bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-[length:200%_auto] bg-clip-text text-3xl font-black text-transparent md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== FEATURES ========================= */}
      <section className="relative container mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Everything you need
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
            Built for collectors who play to win
          </h2>
          <p className="mt-4 text-gray-400">
            From a shoebox of cards to a data-driven portfolio — track, value,
            and grow it all in one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature icon="📚" title="Beautiful collection">
            Organize every card with rich previews, quantities, conditions, and
            live prices at a glance.
          </Feature>
          <Feature icon="📊" title="Instant valuations">
            Know your total worth and see exactly where your value lives with
            clean, interactive charts.
          </Feature>
          <Feature icon="🔔" title="Smart price alerts">
            Set targets and get pinged the second a card hits your buy or sell
            zone — never miss a move.
          </Feature>
          <Feature icon="⚡" title="Real-time market">
            Prices refresh around the clock so your numbers are always current,
            not last week&apos;s guess.
          </Feature>
        </div>
      </section>

      {/* ===================== PORTFOLIO SHOWCASE ===================== */}
      <section className="relative container mx-auto max-w-6xl px-4 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* mock dashboard */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-gray-900 to-gray-950 p-6 shadow-2xl">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">
                    Total portfolio value
                  </div>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-3xl font-black text-white">
                      $12,480
                    </span>
                    <span className="pb-1 text-sm font-bold text-emerald-400">
                      ▲ 18.4%
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {["1W", "1M", "1Y"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                        i === 1
                          ? "bg-amber-500 text-gray-950"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* chart */}
              <div className="h-36 w-full">
                <AreaChart />
              </div>

              {/* top movers */}
              <div className="mt-5 space-y-2">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Top movers
                </div>
                {movers.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between rounded-xl border border-amber-500/15 bg-gradient-to-r from-amber-500/10 to-gray-900/50 px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="h-9 w-9 flex-none rounded-lg border border-amber-500/20 object-cover object-top"
                      />
                      <span className="truncate text-sm font-medium text-gray-200">
                        {m.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-white">
                        {m.price}
                      </span>
                      <span className="w-14 text-right text-xs font-bold text-emerald-400">
                        ▲ {m.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
              Your portfolio, decoded
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
              See exactly what your cards are worth
            </h2>
            <p className="mt-4 text-gray-400">
              A live dashboard turns your binder into a portfolio. Watch trends,
              spot your biggest gainers, and make confident calls backed by real
              market data.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Total value that updates as the market moves",
                "Breakdowns by set, rarity, and condition",
                "Top movers surfaced automatically",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button onClick={() => navigate("/app/add-to-collection")}>
                Build your collection →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= HOW IT WORKS ======================= */}
      <section className="relative container mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Three simple steps
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white md:text-4xl">
            From cards to profit in minutes
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[3.4rem] hidden h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent md:block" />
          <Step number="1" title="Add your cards">
            Search thousands of cards and add them to your collection in a few
            taps.
          </Step>
          <Step number="2" title="See the value">
            Get instant valuations and a full breakdown of your portfolio&apos;s
            worth.
          </Step>
          <Step number="3" title="Set alerts &amp; profit">
            Choose target prices and let us notify you the moment they hit.
          </Step>
        </div>
      </section>

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="relative container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
            Loved by duelists everywhere
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Quote name="Marcus T." role="Competitive player">
            YourYugiohProfits helped me spot trends I was missing. The alerts
            paid for themselves in a week.
          </Quote>
          <Quote name="Priya K." role="Long-time collector">
            Finally I know what my binder is actually worth. The dashboard is
            gorgeous and the numbers are spot on.
          </Quote>
          <Quote name="Diego R." role="Card flipper">
            I bought low and sold high three times last month thanks to the
            price alerts. Absolute game-changer.
          </Quote>
        </div>
      </section>

      {/* ============================= CTA ============================ */}
      <section className="relative container mx-auto max-w-5xl px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 via-gray-900 to-yellow-500/10 p-10 text-center shadow-2xl md:p-14">
          {/* decorative glow */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-yellow-500/20 blur-3xl"
            aria-hidden
          />

          <div className="relative">
            <h2 className="font-display text-3xl font-black text-white md:text-5xl">
              Ready to level up your collection?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
              Join now and start tracking your value in minutes. It&apos;s free
              to get started — no credit card required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => navigate("/sign-up")}
                className="text-lg px-10 py-4"
              >
                🚀 Create your free account
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
                className="text-lg px-10 py-4"
              >
                I already have an account
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
