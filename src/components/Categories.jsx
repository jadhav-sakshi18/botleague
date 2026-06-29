import { categories } from "../data/siteData.js";

export default function Categories() {
  return (
    <section className="section-pad bg-panel" id="community">
      <h2 className="display-title">Categories</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map(({ title, text, icon: Icon, featured }) => (
          <article
            key={title}
            className={`panel min-h-64 p-7 transition hover:-translate-y-1 hover:border-gold ${
              featured ? "border-gold bg-gold/5" : ""
            }`}
          >
            <Icon className="size-16 text-gold" />
            <h3 className="mt-7 font-display text-2xl font-bold uppercase leading-7">{title}</h3>
            <p className="mt-2 min-h-10 leading-5 text-white/60">{text}</p>
            <a href="#events" className="mt-7 inline-flex font-display font-bold uppercase text-danger">
              Learn More +
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}