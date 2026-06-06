import Section from "./Section";
import { skills, type Skill } from "../data";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function TechIcon({ skill }: { skill: Skill }) {
  if (skill.slug === "rest") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a855f7"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-9 w-9"
        aria-hidden
      >
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="18" cy="6" r="2.4" />
        <circle cx="18" cy="18" r="2.4" />
        <path d="M8.1 11 16 6.6M8.1 13l7.9 4.4" />
      </svg>
    );
  }

  return (
    <img
      src={`${DEVICON}/${skill.slug}/${skill.slug}-original.svg`}
      alt={skill.name}
      width={36}
      height={36}
      loading="lazy"
      className="h-9 w-9 object-contain"
      style={skill.invert ? { filter: "invert(1) brightness(2)" } : undefined}
    />
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="My"
      highlight="Skills"
      subtitle="Technologies and tools I use for backend, databases and modern web development."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="card rounded-2xl p-6 sm:p-8">
            <h3 className="mb-6 text-lg font-bold text-accent">
              {group.category}
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-background-soft px-2 py-4 transition-colors hover:border-accent-soft"
                >
                  <TechIcon skill={skill} />
                  <span className="text-center text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
