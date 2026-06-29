import { sponsors } from "../data/siteData";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="section-pad bg-black"
    >
      <p className="eyebrow">Partners</p>

      <h2 className="display-title mt-2">
        Our Sponsors
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex flex-col items-center rounded-xl border border-line bg-panel p-8 transition hover:border-gold"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="h-36 w-36 object-contain opacity-70"
            />

            <h3 className="mt-5 font-display text-lg font-bold uppercase">
              {sponsor.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}