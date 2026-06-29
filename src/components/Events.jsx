import { upcomingEvents } from "../data/siteData.js";

function Bracket() {
  return (
    <div className="mt-8 grid gap-4">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="flex items-center gap-4">
          <span className="h-8 w-28 rounded bg-white/15" />
          <span className="h-px flex-1 bg-danger" />
          <span className="h-8 w-24 rounded bg-white/15" />
        </div>
      ))}
    </div>
  );
}

export default function Events() {
  return (
    <section
      id="events"
      className="section-pad bg-[radial-gradient(circle_at_20%_0%,rgba(255,78,87,.22),transparent_35%),#181818]"
    >
      <h2 className="display-title text-center">
        Competitions & Events
      </h2>

      {/* Main Cards */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[480px_412px_409px] lg:justify-center">

        {/* Live Now */}
        <article className="h-[480px] w-[480px] rounded-[10px] border border-white/35 bg-panel p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Live Now</p>

              <h3 className="mt-4 text-2xl font-bold">
                Bengaluru Regionals
              </h3>

              <p className="mt-2 text-white/60">
                India's biggest robotics competition.
              </p>
            </div>

            <span className="rounded bg-danger px-3 py-2 text-xs font-bold uppercase">
              Ongoing
            </span>
          </div>

          <Bracket />
        </article>

        {/* Upcoming */}
        <article className="h-[480px] w-[412px] rounded-[10px] border border-white/35 bg-panel p-6">
          <p className="eyebrow">Upcoming</p>

          <div className="mt-6 space-y-5">
            {upcomingEvents.map((event) => (
              <div
  key={event.city}
  className="h-[180px] rounded-[10px] border border-white/20 bg-[#1d1d1d] p-4"
>
                <h3 className="text-xl font-bold">
                  Event in {event.city}
                </h3>

                <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <dt className="font-bold">Date</dt>
                    <dd>{event.date}</dd>
                  </div>

                  <div>
                    <dt className="font-bold">Location</dt>
                    <dd>{event.location}</dd>
                  </div>

                  <div>
                    <dt className="font-bold">Category</dt>
                    <dd>{event.category}</dd>
                  </div>
                </dl>

                <a
                  href="#register"
                  className="btn-primary mt-6 w-full"
                >
                  Register
                </a>
              </div>
            ))}
          </div>
        </article>

        {/* Past Results */}
        <article className="h-[480px] w-[409px] rounded-[10px] border border-white/35 bg-panel p-6">
          <p className="eyebrow">Past Results</p>

          <div className="mt-6 space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border-b border-white/20 pb-4 last:border-none"
              >
                <h3 className="text-xl font-bold">
                  Bengaluru Regionals
                </h3>

                <p className="mt-2 text-white/60">
                  Champions: Team Robo Titans
                </p>
              </div>
            ))}
          </div>
        </article>

      </div>
    </section>
  );
}