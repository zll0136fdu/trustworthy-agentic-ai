import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    id: 1,
    tag: "Track 1",
    title: "Agent & MCP Attack",
    description:
      "Studies adaptive attacks on tool-using agents. How can agents remain safe under changing attack strategies?",
    topics: [
      "Prompt injection & jailbreaks",
      "Tool misuse & cross-app manipulation",
      "Attacks via MCP connections",
      "Dynamic red-teaming benchmarks",
    ],
    color: "#DC2626",
    bgClass: "liquid-glass-track-1",
    glowClass: "animate-glow-red",
    image: "/images/track1-attack.jpg",
  },
  {
    id: 2,
    tag: "Track 2",
    title: "Execution Safety",
    description:
      "Studies whether an agent acts safely while interacting with phones, apps, and contextual interfaces.",
    topics: [
      "Risky action detection",
      "State-aware intervention",
      "Trajectory & process checking",
      "Recovery from unsafe plans",
    ],
    color: "#059669",
    bgClass: "liquid-glass-track-2",
    glowClass: "animate-glow-green",
    image: "/images/track2-safety.jpg",
  },
  {
    id: 3,
    tag: "Track 3",
    title: "Precision Alignment",
    description:
      "Studies targeted repair of unsafe behavior with limited side effects on benign capabilities.",
    topics: [
      "Model editing for agents",
      "Selective unlearning",
      "Concept removal & localization",
      "Safety–utility tradeoff metrics",
    ],
    color: "#7C3AED",
    bgClass: "liquid-glass-track-3",
    glowClass: "animate-glow-purple",
    image: "/images/track3-alignment.jpg",
  },
];

const trackFlow = [
  "Track 1 studies how failures are triggered through attacks and unsafe instructions.",
  "Track 2 studies how failures surface in execution traces, tool calls, and recovery behavior.",
  "Track 3 studies how known unsafe behavior can be repaired without broad capability loss.",
];

export default function Tracks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTrack, setActiveTrack] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".track-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="challenge"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A1120] via-[#0F172A]/50 to-[#0A1120]"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Three-Track Challenge
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            The workshop includes a challenge program designed to make the links between attack, monitoring, and repair concrete and comparable under shared tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {trackFlow.map((item, index) => (
            <div
              key={item}
              className="rounded-xl p-5 bg-white/[0.02] border border-white/5"
            >
              <span className="font-mono text-xs text-[#64748B]">
                0{index + 1}
              </span>
              <p className="text-[#CBD5E1] text-sm leading-relaxed mt-2">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#94A3B8] max-w-3xl mx-auto mb-12 leading-relaxed">
          Shared tasks give participants a common basis for comparing attack scenarios,
          execution logs, monitoring signals, and targeted repair methods across the
          same agent-safety problem.
        </p>

        {/* Desktop: Side-by-side with active expansion */}
        <div className="hidden lg:flex gap-4 items-stretch min-h-[520px]">
          {tracks.map((track) => {
            const isActive = activeTrack === track.id;
            return (
              <div
                key={track.id}
                className={`track-card relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
                  isActive ? "flex-[3]" : "flex-[1]"
                } ${track.glowClass}`}
                style={{
                  background: `linear-gradient(180deg, ${track.color}08 0%, rgba(10, 17, 32, 0.95) 100%)`,
                  border: `1px solid ${track.color}${isActive ? "40" : "15"}`,
                }}
                onMouseEnter={() => setActiveTrack(track.id)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-700"
                  style={{ backgroundImage: `url(${track.image})` }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(180deg, ${track.color}10 0%, #0A1120 70%)`,
                  }}
                />

                <div className="relative z-10 h-full flex flex-col p-6">
                  {/* Tag */}
                  <span
                    className="inline-block self-start px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4"
                    style={{
                      background: `${track.color}15`,
                      color: track.color,
                      border: `1px solid ${track.color}30`,
                    }}
                  >
                    {track.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-white mb-3 whitespace-nowrap"
                    style={{
                      writingMode: isActive ? "horizontal-tb" : undefined,
                    }}
                  >
                    {isActive ? track.title : track.tag}
                  </h3>

                  {/* Expandable content */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "opacity-100 max-h-[400px]"
                        : "opacity-0 max-h-0"
                    }`}
                  >
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>

                    <ul className="space-y-3">
                      {track.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 text-sm text-[#CBD5E1]"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ background: track.color }}
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="track-card rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${track.color}08 0%, rgba(10, 17, 32, 0.95) 100%)`,
                border: `1px solid ${track.color}25`,
              }}
            >
              {/* Background image */}
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${track.image})` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, #0A1120 100%)`,
                  }}
                />
              </div>

              <div className="p-6">
                <span
                  className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3"
                  style={{
                    background: `${track.color}15`,
                    color: track.color,
                    border: `1px solid ${track.color}30`,
                  }}
                >
                  {track.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {track.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                  {track.description}
                </p>
                <ul className="space-y-2">
                  {track.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm text-[#CBD5E1]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: track.color }}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
