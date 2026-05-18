import { useRef, useState } from "react";
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
    image: "/trustworthy-agentic-ai/images/track1-attack.jpg",
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
    image: "/trustworthy-agentic-ai/images/track2-safety.jpg",
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
    image: "/trustworthy-agentic-ai/images/track3-alignment.jpg",
  },
];

export default function Tracks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTrack, setActiveTrack] = useState(1);

  // Cards render directly without GSAP opacity animation
  void sectionRef;

  return (
    <section
      id="challenge"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D1B2A] via-[#162D45]/50 to-[#0D1B2A]"
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
          <p className="text-lg text-[#A0B4C8] max-w-2xl mx-auto leading-relaxed">
            The workshop includes a challenge program designed to make the links between attack, monitoring, and repair concrete and comparable under shared tasks.
          </p>
        </div>

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
                    background: `linear-gradient(180deg, ${track.color}10 0%, #0D1B2A 70%)`,
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
                    <p className="text-[#A0B4C8] text-sm leading-relaxed mb-6">
                      {track.description}
                    </p>

                    <ul className="space-y-3">
                      {track.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 text-sm text-[#B8C8D8]"
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
                    background: `linear-gradient(180deg, transparent 0%, #0D1B2A 100%)`,
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
                <p className="text-[#A0B4C8] text-sm leading-relaxed mb-4">
                  {track.description}
                </p>
                <ul className="space-y-2">
                  {track.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-3 text-sm text-[#B8C8D8]"
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
