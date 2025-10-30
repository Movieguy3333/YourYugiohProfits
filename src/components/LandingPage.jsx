/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative bg-gray-900/50 border border-amber-500/20 shadow-2xl">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center gap-4">
            <Logo />
            <h1 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent text-center">
              Track. Value. Profit.
            </h1>
            <p className="text-gray-300 text-center max-w-2xl">
              Your all-in-one Yu‑Gi‑Oh! hub for collection management, instant
              valuations, and smart price alerts.
            </p>
            <Button
              onClick={() => navigate("/app/add-to-collection")}
              className="text-lg px-10 py-4"
            >
              Get Started Free
            </Button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </section>

      {/* Hero */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-yellow-500/10"></div>
        <div className="relative container mx-auto grid lg:grid-cols-2 gap-10 items-center max-w-6xl">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Make smarter moves with real-time insights
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Search cards, build your collection, and let alerts ping you when
              it’s time to buy or sell. Built for speed, clarity, and profit.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={() => navigate("/sign-up")}>
                🎯 Get Started Free
              </Button>
              <Button variant="ghost" onClick={() => navigate("/login")}>
                🔑 Login
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-gray-900/50 border border-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                  10k+
                </div>
                <div className="text-gray-400 text-sm">Cards Tracked</div>
              </div>
              <div className="bg-gray-900/50 border border-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                  $1.2M
                </div>
                <div className="text-gray-400 text-sm">Total Valued</div>
              </div>
              <div className="bg-gray-900/50 border border-amber-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                  24/7
                </div>
                <div className="text-gray-400 text-sm">Price Monitoring</div>
              </div>
            </div>
          </div>

          {/* Visual mock / sample card grid */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="pointer-events-none" aria-hidden>
              <div className="absolute -top-8 -left-10 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-6 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Highlights */}
      <section className="py-14 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 max-w-6xl">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border-2 border-amber-500/20">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">
              Beautiful Collection
            </h3>
            <p className="text-gray-300">
              Organize cards with rich previews, quantities, and real-time
              prices.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border-2 border-amber-500/20">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">
              Instant Valuations
            </h3>
            <p className="text-gray-300">
              Know your total value and distribution at a glance with charts.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border-2 border-amber-500/20">
            <div className="text-4xl mb-3">🔔</div>
            <h3 className="text-xl font-bold text-amber-400 mb-2">
              Smart Alerts
            </h3>
            <p className="text-gray-300">
              Get notified when your target prices hit — never miss an
              opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold text-center mb-10 text-amber-400">
            How it works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-amber-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-extrabold flex items-center justify-center mb-4">
                1
              </div>
              <p className="text-gray-300">
                Search your favorite cards and add them to your collection.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-amber-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-extrabold flex items-center justify-center mb-4">
                2
              </div>
              <p className="text-gray-300">
                See instant valuations and breakdowns of your portfolio.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-amber-500/20 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-extrabold flex items-center justify-center mb-4">
                3
              </div>
              <p className="text-gray-300">
                Set alerts and get notified when prices hit your targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border-2 border-amber-500/20">
            <p className="text-xl text-gray-300 italic leading-relaxed">
              “YourYugiohProfits helped me spot trends I was missing. Alerts
              paid for themselves in a week.”
            </p>
            <div className="mt-4 text-amber-400 font-semibold">
              — A Happy Duelist
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl p-12 border-2 border-amber-500/30">
          <h2 className="text-4xl font-bold mb-6 text-amber-400">
            Ready to level up your collection? 🚀
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join now and start tracking your value in minutes.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              onClick={() => navigate("/sign-up")}
              className="text-lg px-10 py-4"
            >
              Create Your Account
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
      </section>
    </div>
  );
}

export default LandingPage;
