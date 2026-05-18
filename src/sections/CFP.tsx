import { useEffect, useRef } from "react";
import { FileText, Presentation } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const topics = [
  "Attacks on AI agents, prompt injection, and unsafe tool use",
  "MCP safety and security in tool-integrated LLM agents",
  "Execution tracing, trajectory checks, and safety monitoring during interaction",
  "Safe planning for mobile and wearable assistants",
  "Multimodal and environment-grounded evaluation",
  "Model editing, concept removal, and selective unlearning",
  "Safety–utility tradeoffs for ubiquitous agentic systems",
  "Datasets, simulators, logs, and benchmarks for trustworthy agents",
];

const submissionTypes = [
  {
    icon: FileText,
    title: "Archival Workshop Papers",
    description: "2-4 pages, excluding references, in the ACM double-column format.",
    details: [
      "Lightly reviewed for relevance, clarity, technical quality, and discussion value",
      "Suitable for mature early results, benchmarks, methods, and system studies",
      "Planned for archival publication, subject to ACM and UbiComp/ISWC proceedings rules",
    ],
    borderColor: "#2563EB",
  },
  {
    icon: Presentation,
    title: "Non-Archival Participation",
    description: "1-page participation statement or poster, presented at the workshop.",
    details: [
      "Suitable for early ideas, benchmark proposals, demos, negative results, and system observations",
      "Designed for discussion and community feedback rather than formal archival publication",
      "Accepted contributions may be presented as posters or short discussion inputs",
    ],
    borderColor: "#F59E0B",
  },
];

export default function CFP() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".cfp-panel", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      gsap.from(".cfp-topic", {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cfp-topics-list",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".sub-type-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sub-types-grid",
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cfp"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0A1120] via-[#0F172A]/30 to-[#0A1120]"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Call for Papers
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            We invite papers and challenge submissions on trustworthy agent behavior in ubiquitous and wearable computing.
          </p>
        </div>

        {/* CFP Panel */}
        <div className="cfp-panel liquid-glass-strong rounded-2xl p-8 md:p-12">
          {/* Topics of Interest */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#2563EB] rounded-full" />
              Topics of Interest
            </h3>
            <ul className="cfp-topics-list grid grid-cols-1 md:grid-cols-2 gap-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="cfp-topic flex items-start gap-3 text-[#CBD5E1] text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Submission Types */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#F59E0B] rounded-full" />
              Submission Types
            </h3>
            <div className="sub-types-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {submissionTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className="sub-type-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderLeft: `3px solid ${type.borderColor}`,
                      border: `1px solid rgba(255,255,255,0.05)`,
                      borderLeftWidth: "3px",
                      borderLeftColor: type.borderColor,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${type.borderColor}15` }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: type.borderColor }}
                        />
                      </div>
                      <strong className="text-white font-semibold">
                        {type.title}
                      </strong>
                    </div>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {type.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#CBD5E1]"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: type.borderColor }}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review Process */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#7C3AED] rounded-full" />
              Review &amp; Presentation
            </h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Submissions will go through a light review process evaluating relevance, clarity, technical quality, and discussion value. Accepted work will be presented as{" "}
              <span className="text-white font-medium">short oral spotlights</span>{" "}
              or{" "}
              <span className="text-white font-medium">posters</span>. We expect roughly{" "}
              <span className="text-white font-medium">10-15 accepted submissions</span>, with selected contributions invited for oral presentation and the rest presented as posters. The short paper length lowers the barrier for new work, early benchmarks, and negative results.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[#64748B] text-sm max-w-xl">
              Ready to contribute? The submission link will be posted here once the official system is ready.
            </p>
            <button
              type="button"
              disabled
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-[#94A3B8] font-semibold text-sm cursor-not-allowed"
            >
              Submission System (Coming soon)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
