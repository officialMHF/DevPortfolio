import Section from "./Section";
import { projects, type Project } from "../data";
import { ArrowIcon } from "./icons";

function ProjectIcon({ name }: { name: Project["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
    "aria-hidden": true,
  };
  if (name === "racing") {
    return (
      <svg {...common}>
        <path d="M5 21V4" />
        <path d="M5 4c3-1.6 6 1.6 9 0s5-1.2 5-1.2v9s-2 .4-5 1.2-6-1.6-9 0" />
        <path d="M5 8.5h14M12 4.2v9.6M8.5 5v8M15.5 4v9" opacity="0.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 4v8a4 4 0 1 1-4-4" />
      <circle cx="14" cy="3.4" r="1" />
      <path d="M17 17c2 0 3.5-1.3 3.5-3S19 11 17 11c-2.4 0-4 1.6-4 3 0 .7.4 1.4 1 1.9" />
      <path d="M20.5 14h2l-1.5 1.5L23 17" opacity="0.6" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden rounded-2xl">
      <div className="relative aspect-[16/5] w-full overflow-hidden bg-gradient-to-br from-accent-soft/70 via-accent/40 to-background-soft">
        {project.banner ? (
          <>
            <img
              src={project.banner}
              alt={`${project.title} banner`}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_-20%,rgba(192,132,252,0.55),transparent_60%)]" />
            <div className="absolute -right-4 bottom-0 select-none text-[5.5rem] font-black leading-none tracking-tight text-white/10 sm:text-[7rem]">
              {project.title.split(" ")[0]}
            </div>
          </>
        )}
      </div>

      <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_1.4fr]">
        <div>
          <div
            className={`relative z-10 -mt-12 mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-border shadow-lg shadow-black/40 ${
              project.logo
                ? "bg-background-soft p-2.5"
                : "bg-gradient-to-br from-accent to-accent-soft text-white"
            }`}
          >
            {project.logo ? (
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className={`h-full w-full object-contain ${
                  project.pixelLogo ? "pixelated" : ""
                }`}
              />
            ) : (
              <ProjectIcon name={project.icon} />
            )}
          </div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-accent">
            {project.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
            {project.stats.map((s) => (
              <div key={s.label}>
                <p className="text-base font-bold uppercase tracking-wide text-foreground">
                  {s.value}
                </p>
                <p className="text-xs font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent-soft hover:text-accent"
            >
              <ArrowIcon className="h-4 w-4" />
              {project.linkLabel ?? "View Project"}
            </a>
          )}
        </div>

        <div>
          <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-base">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured"
      highlight="Projects"
      subtitle="A selection of things I've designed, built, and shipped."
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
