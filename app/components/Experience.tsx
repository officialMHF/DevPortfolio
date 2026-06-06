import Section from "./Section";
import { experience, type ExperienceItem } from "../data";

function ExpIcon({ name }: { name: ExperienceItem["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true,
  };
  if (name === "code") {
    return (
      <svg {...common}>
        <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
      </svg>
    );
  }
  if (name === "server") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="7" rx="1.5" />
        <rect x="3" y="13" width="18" height="7" rx="1.5" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M3 9l9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v4c0 1 2.2 2 5 2s5-1 5-2v-4" />
    </svg>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="My"
      highlight="Experience"
      subtitle="My journey in software development so far."
    >
      <div className="relative mx-auto max-w-2xl border-l border-border pl-8">
        {experience.map((item, i) => (
          <div key={i} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[49px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-accent-soft bg-surface text-accent">
              <ExpIcon name={item.icon} />
            </span>
            <div className="card rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-accent">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-muted">{item.org}</p>
              <p className="mt-3 leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
