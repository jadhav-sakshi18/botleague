import {
  Trophy,
  ShieldCheck,
  BriefcaseBusiness,
  Zap,
} from "lucide-react";

export default function WhyRegister() {
  const items = [
    {
      title: "NATIONAL RECOGNITION",
      text: "Benchmark your skills on India's official robotics leaderboard.",
      icon: Trophy,
    },
    {
      title: "FAIR JUDGING",
      text: "Compete with confidence under standardized, expert-led evaluation.",
      icon: ShieldCheck,
    },
    {
      title: "CAREER OPS",
      text: "Bridge the gap between arena victories and top-tier tech placements.",
      icon: BriefcaseBusiness,
    },
    {
      title: "HIGH-ENERGY ECO",
      text: "Join a nationwide community of elite innovators and robotics athletes.",
      icon: Zap,
    },
  ];

  return (
    <section id="register" className="section-pad bg-black">
      <p className="eyebrow">Registration</p>

      <h2 className="display-title mt-2">
        WHY REGISTER?
      </h2>

      <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1fr_831px]">

        {/* Left */}
        <div className="space-y-12">
          {items.map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex gap-6">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF4C4C]/10">
                <Icon className="h-8 w-8 text-[#FF4C4C]" />
              </div>

              <div>
                <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>

                <p className="mt-3 max-w-xl text-[25px] leading-8 text-white/70">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/why-register.png"
            alt="Robot"
            className="h-[760px] w-[831px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}