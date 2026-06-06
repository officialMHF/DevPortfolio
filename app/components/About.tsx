import Section from "./Section";
import { about, stats } from "../data";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      highlight="Me"
      subtitle="Backend logic, databases, and modern front-end — plus high-performance Minecraft plugins."
    >
      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 text-lg leading-relaxed text-muted md:col-span-2">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card rounded-xl p-5">
              <p className="gradient-text text-3xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
