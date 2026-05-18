import { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const organizers = [
  {
    initials: "JZ",
    name: "Jian Zhao",
    affil: "TeleAI, China Telecom; Northwestern Polytechnical University",
    role: "General Co-Chair",
    roleColor: "#1E7A8C",
    bio: "Works on trustworthy AI, model governance, and safety evaluation. Coordinates the workshop and challenge design.",
  },
  {
    initials: "TZ",
    name: "Tianle Zhang",
    affil: "TeleAI, China Telecom",
    role: "General Co-Chair",
    roleColor: "#1E7A8C",
    bio: "Works on robustness, verification, and evaluation for intelligent systems. Supports reliable evaluation and safety guarantees.",
  },
  {
    initials: "HZ",
    name: "Huilin Zhou",
    affil: "USTC; TeleAI",
    role: "Challenge Chair",
    roleColor: "#F59E0B",
    bio: "Works on multimodal foundation models and diffusion-model safety. Contributes to the attack track and challenge setup.",
  },
  {
    initials: "WC",
    name: "Wentao Chen",
    affil: "CAICT",
    role: "Challenge Chair",
    roleColor: "#F59E0B",
    bio: "Works on large-model safety benchmarking, evaluation, and standards. Brings industrial-scale assessment experience.",
  },
  {
    initials: "JC",
    name: "Jie Chen",
    affil: "CAICT",
    role: "Challenge Chair",
    roleColor: "#F59E0B",
    bio: "Works on AI security, agent security assessment, and industrial testing. Contributes enterprise AI evaluation experience.",
  },
  {
    initials: "FW",
    name: "Feng Wei",
    affil: "CAICT",
    role: "Challenge Chair",
    roleColor: "#F59E0B",
    bio: "Works on evaluation, benchmarking, and standardization for LLM and AI agent safety and security.",
  },
  {
    initials: "LZ",
    name: "Lan Zhang",
    affil: "USTC",
    role: "PC Member",
    roleColor: "#7C3AED",
    bio: "Professor working on mobile sensing, data privacy protection, and data sharing. Multiple papers in top mobile and ubiquitous computing venues.",
  },
  {
    initials: "ZW",
    name: "Zhibo Wang",
    affil: "Zhejiang University",
    role: "PC Member",
    roleColor: "#7C3AED",
    bio: "Professor working on intelligent IoT, AI security, data security, and privacy protection. Strong expertise in security systems and large-scale deployment.",
  },
  {
    initials: "XL",
    name: "Xuelong Li",
    affil: "TeleAI, China Telecom",
    role: "Senior Advisor",
    roleColor: "#059669",
    bio: "Supports large-scale deployment, industry links, and community outreach.",
  },
];

export default function Organization() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Cards render directly without GSAP opacity animation to avoid visibility issues
    void section;
  }, []);

  return (
    <section
      id="organization"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Organizing Committee
          </h2>
          <p className="text-lg text-[#A0B4C8] max-w-2xl mx-auto">
            A mix of expertise in agent safety, benchmarking, mobile systems, privacy, and deployment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {organizers.map((org, index) => (
            <div
              key={org.name}
              className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "#162D45",
                border: "1px solid #3D5A73",
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.borderColor = `${org.roleColor}80`;
                card.style.boxShadow = `0 8px 32px ${org.roleColor}30`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.borderColor = "rgba(255,255,255,0.15)";
                card.style.boxShadow = "none";
              }}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${org.roleColor}60 0%, ${org.roleColor}30 100%)`,
                  border: `2px solid ${org.roleColor}80`,
                }}
              >
                {org.initials}
              </div>

              {/* Name */}
              <h3 className="text-white font-bold text-center mb-1 text-base">
                {org.name}
              </h3>

              {/* Affiliation */}
              <p className="text-[#6B8299] text-xs text-center leading-relaxed mb-3">
                {org.affil}
              </p>

              {/* Role */}
              <div className="text-center mb-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide"
                  style={{
                    background: `${org.roleColor}35`,
                    color: org.roleColor,
                    border: `1px solid ${org.roleColor}60`,
                  }}
                >
                  {org.role}
                </span>
              </div>

              {/* Expandable Bio */}
              {org.bio && (
                <div>
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="flex items-center gap-1 mx-auto text-[#4A6278] hover:text-[#A0B4C8] transition-colors text-xs"
                  >
                    <span>Background</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedIndex === index
                        ? "max-h-32 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#6B8299] text-xs leading-relaxed text-center border-t border-white/10 pt-2">
                      {org.bio}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
