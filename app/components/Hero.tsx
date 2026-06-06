import { profile } from "../data";
import { GitHubIcon, MailIcon, DiscordIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="aurora pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-5xl px-6 pt-28 pb-16">
        <div className="fade-up max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for student jobs &amp; freelance
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-muted sm:text-2xl">
            {profile.role}
            <span className="mx-2 text-accent">·</span>
            {profile.location}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-soft"
            >
              Contact me
            </a>
            <div className="ml-1 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-muted transition-colors hover:text-accent"
              >
                <MailIcon className="h-6 w-6" />
              </a>
              <span
                title={`Discord: ${profile.discord}`}
                aria-label="Discord"
                className="text-muted"
              >
                <DiscordIcon className="h-6 w-6" />
              </span>
            </div>
          </div>

          <p className="mt-8 font-mono text-sm text-muted">
            <span className="text-accent">availability:</span>{" "}
            {profile.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
