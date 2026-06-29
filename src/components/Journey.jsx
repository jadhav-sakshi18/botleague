import { journey } from "../data/siteData.js";

export default function Journey() {
  return (
    <section className="section-pad bg-black text-center">
      <p className="eyebrow">User Journey</p>
      <h2 className="display-title mt-2">Your Path To The League</h2>
      <p className="mt-2 text-white/45">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>

      <div className="relative mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-12 hidden h-1 bg-electric md:block" />
        {journey.map(({ step, title, icon: Icon }) => (
          <article key={step} className="relative">
            <div className="mx-auto grid size-24 place-items-center rounded-full border-[10px] border-white/15 bg-panel shadow-blueGlow">
              <Icon className="size-10 text-white" />
            </div>
            <p className="mt-7 font-display text-sm font-bold uppercase text-danger">{step}</p>
            <h3 className="mx-auto mt-2 max-w-40 font-display text-lg font-bold uppercase leading-6">
              {title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}