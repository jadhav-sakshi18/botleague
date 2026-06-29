import { ecosystem } from "../data/siteData.js";

export default function Ecosystem() {
  return (
    <section
      id="community"
      className="section-pad bg-black"
    >
      <p className="eyebrow">
        Community
      </p>

      <h2 className="mt-2 font-display text-[60px] font-bold uppercase tracking-[0.04em] text-white">
        JOIN THE ECOSYSTEM
      </h2>

      <p className="mt-5 max-w-3xl text-[25px] text-white/70">
        Build your robotics career through competitions, judging,
        mentoring and city chapters.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {ecosystem.map((item) => (
          <article
            key={item.title}
            className="flex h-[460px] w-[396px] flex-col rounded-[15px] border border-white/40 bg-white/5 p-8 transition duration-300 hover:border-[#FF4C4C]"
          >
          

            <h3 className="mt-8 font-display text-[30px] font-semibold uppercase tracking-[0.04em] text-white">
              {item.title}
            </h3>

            <p className="mt-6 flex-1 text-[22px] leading-9 text-white/70">
              {item.text}
            </p>

            <button className="mt-8 h-12 rounded-md bg-gradient-to-r from-[#FF4C4C] to-[#992E2E] font-display font-bold uppercase text-white">
              Learn More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}