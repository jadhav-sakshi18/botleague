import { Cpu } from "lucide-react";
import { aboutItems } from "../data/siteData.js";

export default function About() {
  return (
    <section id="programs" className="section-pad bg-panel">
      <h2 className="display-title">What is BotLeague?</h2>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-8 sm:grid-cols-2">
          {aboutItems.map((item) => (
            <article key={item.number}>
              <p className="font-display text-3xl font-bold text-danger">{item.number}</p>
              <h3 className="font-display text-2xl font-bold uppercase">{item.title}</h3>
              <p className="mt-2 max-w-sm text-lg leading-6 text-white/55">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="hidden justify-center lg:flex">
  <img
    src="/botleague-robot.png"
    alt="BotLeague Robot"
    className="h-[386px] w-[375px] object-contain"
  />
</div>
      </div>
    </section>
  );
}