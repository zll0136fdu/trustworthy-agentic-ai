import { useState, useEffect } from "react";
import { Calendar, MapPin, Building2, ChevronRight } from "lucide-react";

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="liquid-glass-strong rounded-xl px-5 py-4 min-w-[80px] text-center">
      <span className="block text-3xl md:text-4xl font-extrabold text-[#2563EB] font-mono tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="block text-xs uppercase tracking-wider text-[#94A3B8] mt-2 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Deadline: June 25, 2026 AoE (UTC-12, effectively June 26 12:00 UTC)
    const deadline = new Date("2026-06-26T12:00:00Z").getTime();

    const update = () => {
      const now = Date.now();
      const diff = deadline - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1120]/60 via-[#0A1120]/40 to-[#0A1120]" />

      {/* Floating ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["U", "b", "i", "C", "o", "m", "p"].map((letter, i) => (
          <span
            key={letter + i}
            className="absolute text-[8rem] md:text-[12rem] font-black text-white/[0.02] select-none animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="text-sm font-medium text-[#94A3B8]">
            UbiComp / ISWC 2026 Affiliated Workshop
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
          Towards Trustworthy
          <br />
          <span className="bg-gradient-to-r from-[#2563EB] via-[#F59E0B] to-[#7C3AED] bg-clip-text text-transparent">
            Agentic AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[#94A3B8] font-light max-w-3xl mx-auto mb-8 leading-relaxed">
          The 1st Workshop and Challenge on Dynamic Evaluation, Execution Safety, and Precision Alignment
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#94A3B8] mb-12">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#2563EB]" />
            October 11 or 12, 2026
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#2563EB]" />
            Shanghai, China
          </span>
          <span className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#2563EB]" />
            In-person Workshop
          </span>
        </div>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>
        <p className="text-xs text-[#64748B] mb-10 tracking-wide">
          Until submission deadline (June 25, 2026 AoE)
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollTo("#cfp")}
            className="group px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-base hover:bg-[#1D4ED8] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Submit Paper
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#challenge")}
            className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Challenge Details
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1120] to-transparent" />
    </section>
  );
}
