import { useEffect, useRef } from "react";
import { Shield, Search, Target } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Shield,
    title: "Robustness under Attack",
    description:
      "Agents must remain safe under adaptive attacks such as prompt injection, unsafe tool manipulation, and cross-app exploits delivered through MCP connections.",
    color: "#F59E0B",
    bgGlow: "rgba(245, 158, 11, 0.1)",
  },
  {
    icon: Search,
    title: "Execution Safety",
    description:
      "Safety depends on the whole interaction process—what the agent sees, which tools it uses, and when it should stop—not only the final output.",
    color: "#2563EB",
    bgGlow: "rgba(37, 99, 235, 0.1)",
  },
  {
    icon: Target,
    title: "Precision Alignment",
    description:
      "When a failure mode is known, current fixes can be too broad. We need repair methods that improve safety while keeping useful behavior intact.",
    color: "#7C3AED",
    bgGlow: "rgba(124, 58, 237, 0.1)",
  },
];

const motivations = [
  {
    label: "Why now",
    text: "Mobile, wearable, and web agents are becoming capable enough to affect messaging, purchases, navigation, privacy decisions, and access to sensitive contexts.",
  },
  {
    label: "Why UbiComp",
    text: "Ubiquitous systems are context-aware, multi-device, and action-oriented, so safety must include plans, permissions, tool use, and interaction with digital and physical environments.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsEl = cardsRef.current;
    if (!section || !cardsEl) return;

    const cardEls = cardsEl.querySelectorAll(".about-card");

    const ctx = gsap.context(() => {
      gsap.from(cardEls, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Workshop Scope
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Agent systems are being deployed in phones, wearables, and smart spaces. Because these systems can observe context and take actions, safety depends on the whole interaction process. We need to judge not only what an agent says, but also what it sees, which tools it uses, what actions it takes, and when it should stop or ask for help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {motivations.map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-5 bg-white/[0.02] border border-white/5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                {item.label}
              </span>
              <p className="text-[#CBD5E1] text-sm leading-relaxed mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="about-card group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: `linear-gradient(135deg, ${card.bgGlow} 0%, rgba(15, 23, 42, 0.6) 100%)`,
                  border: `1px solid ${card.color}20`,
                  boxShadow: `0 4px 24px ${card.bgGlow}`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${card.color}15 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${card.color}15`,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: card.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#94A3B8] leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
