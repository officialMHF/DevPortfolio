"use client";

import { useState } from "react";
import Section from "./Section";
import { profile } from "../data";
import { GitHubIcon, MailIcon, DiscordIcon } from "./icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Sven,\n\n${message}\n\n— ${name}${
      email ? ` (${email})` : ""
    }`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio message from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const fieldClass =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent";

  return (
    <Section
      id="contact"
      title="Get In"
      highlight="Touch"
      subtitle="Open to student jobs, freelance work, and interesting projects."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-muted">
            Looking for a developer for a student job, freelance project, or just
            want to talk shop? Drop me a message and I&apos;ll get back to you.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <MailIcon className="h-5 w-5" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-5 w-5" />
              {profile.github.replace("https://", "")}
            </a>
            <p className="flex items-center gap-3 text-muted">
              <DiscordIcon className="h-5 w-5" />
              {profile.discord}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={fieldClass}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={fieldClass}
            />
          </div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className={`${fieldClass} mt-4`}
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className={`${fieldClass} mt-4 resize-none`}
          />
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
