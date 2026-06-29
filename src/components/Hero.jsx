export default function Hero() {
  return (
    <section id="top" className="bg-arena bg-cover bg-center">
      <div className="section-pad flex min-h-[560px] items-center">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 border border-danger/50 bg-ink/80 px-4 py-2 text-sm font-semibold">
            <span className="size-2 bg-danger" />
            LIVE: Episode 14, Bengaluru Regionals
            <a href="#events" className="font-display text-danger">
              Watch live
            </a>
          </div>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
            India's Ultimate Robotics Arena
          </h1>
          <p className="mt-4 max-w-xl text-xl font-semibold leading-7 text-white/90">
            Build. Compete. Rank. The national ecosystem for robotics arena athletes,
            teams, and future engineers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#register" className="btn-primary">
              Create Account
            </a>
            <a href="#events" className="btn-outline">
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}