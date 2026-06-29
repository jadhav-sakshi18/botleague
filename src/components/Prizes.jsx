import { prizes } from "../data/siteData.js";

export default function Prizes() {
  return (
    <section id="ranks" className="section-pad bg-panel">
      <p className="eyebrow">Rewards</p>
      <h2 className="display-title mt-2">Prizes & Recognition</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {prizes.map(({ label, value, icon: Icon }) => (
          <article key={label} className="panel p-6">
            <Icon className="size-12 text-gold" />
            <p className="mt-8 font-display text-3xl font-bold uppercase text-danger">{value}</p>
            <h3 className="mt-2 text-xl font-bold">{label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}