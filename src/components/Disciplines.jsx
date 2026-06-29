import { disciplines } from "../data/siteData.js";

export default function Disciplines() {
  return (
    <section className="section-pad bg-black">
      <p className="eyebrow">Sports</p>
      <h2 className="display-title mt-2">Competition Disciplines</h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((item) => (
          <article key={item.title} className="group overflow-hidden border border-line bg-panel">
            <img
              src={item.image}
              alt={item.title}
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <h3 className="px-5 py-5 text-center font-display text-xl font-bold">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}