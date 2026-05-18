import { useEffect, useRef } from "react";
import { Clock, Mic, Coffee, Award, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scheduleItems = [
  {
    time: "08:30–08:45",
    title: "Opening",
    description: "Challenge goals and logistics",
    speaker: "Dr. Xuelong Li",
    icon: Clock,
    type: "opening" as const,
  },
  {
    time: "08:45–09:30",
    title: "Keynote 1 (T1)",
    description: "Efficient Agentic Reasoning",
    speaker: "Dr. Pan Zhou (SMU)",
    icon: Mic,
    type: "keynote" as const,
  },
  {
    time: "09:30–10:15",
    title: "Keynote 2 (T2)",
    description: "AI Alignment and Safe RL",
    speaker: "Dr. Yaodong Yang (PKU)",
    icon: Mic,
    type: "keynote" as const,
  },
  {
    time: "10:15–10:45",
    title: "Coffee Break & Poster Session A",
    description: "Networking and poster presentations",
    speaker: null,
    icon: Coffee,
    type: "break" as const,
  },
  {
    time: "10:45–12:00",
    title: "Challenge Spotlight I",
    description: "Track 1 and Track 2 winners (oral presentations)",
    speaker: null,
    icon: MessageSquare,
    type: "spotlight" as const,
  },
  {
    time: "12:00–13:30",
    title: "Lunch Break",
    description: null,
    speaker: null,
    icon: Coffee,
    type: "break" as const,
  },
  {
    time: "13:30–14:15",
    title: "Keynote 3 (T3)",
    description: "Safe AI Verification",
    speaker: "Prof. Alessio R. Lomuscio (Imperial)",
    icon: Mic,
    type: "keynote" as const,
  },
  {
    time: "14:15–15:00",
    title: "Invited Talk",
    description: "Robust & Interpretable Agent",
    speaker: "Prof. Liping Jing (BJTU)",
    icon: Mic,
    type: "invited" as const,
  },
  {
    time: "15:00–15:30",
    title: "Coffee Break & Poster Session B",
    description: "Networking and poster presentations",
    speaker: null,
    icon: Coffee,
    type: "break" as const,
  },
  {
    time: "15:30–16:30",
    title: "Challenge Spotlight II",
    description: "Track 3 winners and technical Q&A",
    speaker: null,
    icon: MessageSquare,
    type: "spotlight" as const,
  },
  {
    time: "16:30–17:00",
    title: "Awards & Closing",
    description: "Awards ceremony and closing remarks",
    speaker: null,
    icon: Award,
    type: "closing" as const,
  },
];

const speakers = [
  {
    name: "Dr. Pan Zhou",
    affil: "Singapore Management University (SMU)",
    topic: "Efficient Agentic Reasoning",
    track: "T1",
    color: "#DC2626",
  },
  {
    name: "Dr. Yaodong Yang",
    affil: "Peking University (PKU)",
    topic: "AI Alignment and Safe RL",
    track: "T2",
    color: "#059669",
  },
  {
    name: "Prof. Alessio R. Lomuscio",
    affil: "Imperial College London",
    topic: "Safe AI Verification",
    track: "T3",
    color: "#7C3AED",
  },
  {
    name: "Prof. Liping Jing",
    affil: "Beijing Jiaotong University (BJTU)",
    topic: "Robust & Interpretable Agent",
    track: "Invited",
    color: "#F59E0B",
  },
];

const typeStyles: Record<string, { border: string; bg: string; iconColor: string }> = {
  opening: { border: "#05966940", bg: "#05966908", iconColor: "#059669" },
  keynote: { border: "#2563EB40", bg: "#2563EB08", iconColor: "#2563EB" },
  break: { border: "#47556940", bg: "#47556908", iconColor: "#94A3B8" },
  spotlight: { border: "#7C3AED40", bg: "#7C3AED08", iconColor: "#7C3AED" },
  invited: { border: "#F59E0B40", bg: "#F59E0B08", iconColor: "#F59E0B" },
  closing: { border: "#DC262640", bg: "#DC262608", iconColor: "#DC2626" },
};

export default function Program() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".schedule-item", {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".speaker-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".speakers-grid",
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="program"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A1120] via-[#0F172A]/30 to-[#0A1120]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Workshop Program
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            A one-day, in-person, discussion-oriented workshop. The program combines invited talks, paper spotlights, poster sessions, and a discussion session centered on the three challenge tracks.
          </p>
        </div>

        {/* Tentative label */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
            Tentative Schedule — October 11 or 12, 2026
          </span>
        </div>

        {/* Schedule */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-4">
            {scheduleItems.map((item) => {
              const Icon = item.icon;
              const style = typeStyles[item.type];
              return (
                <div
                  key={item.time}
                  className="schedule-item relative flex items-start gap-4 md:gap-6 group"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: style.bg,
                        border: `1px solid ${style.border}`,
                      }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: style.iconColor }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.015)",
                      border: `1px solid rgba(255,255,255,0.05)`,
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-[#64748B] font-semibold">
                        {item.time}
                      </span>
                      {item.speaker && (
                        <span className="text-xs text-[#94A3B8]">
                          {item.speaker}
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-semibold text-base">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-[#64748B] text-sm mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Invited Speakers */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Invited Speakers
          </h3>
          <p className="text-[#94A3B8] text-sm text-center mb-10 max-w-xl mx-auto">
            A balanced mix of verification, alignment, reasoning, and robust agent research.
          </p>

          <div className="speakers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="speaker-card rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `${speaker.color}08`,
                  border: `1px solid ${speaker.color}20`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold"
                  style={{
                    background: `${speaker.color}15`,
                    color: speaker.color,
                    border: `1px solid ${speaker.color}30`,
                  }}
                >
                  {speaker.track}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {speaker.name}
                </h4>
                <p className="text-[#64748B] text-xs mb-2">{speaker.affil}</p>
                <p
                  className="text-xs font-medium"
                  style={{ color: speaker.color }}
                >
                  {speaker.topic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Workshop Note */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl p-6 max-w-2xl" style={{ background: "rgba(37, 99, 235, 0.05)", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
            <h4 className="text-white font-semibold mb-2">Open Workshop Policy</h4>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              The workshop is planned as an open, in-person event. UbiComp/ISWC attendees may join without a paper submission, subject to registration and room capacity. We expect 30–45 participants from UbiComp/ISWC researchers, agent system builders, and trustworthy AI researchers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
