type Props = {
  id: string;
  title: string;
  highlight: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  highlight,
  subtitle,
  children,
}: Props) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
      <div className="mb-14 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title} <span className="gradient-text">{highlight}</span>
        </h2>
        <span className="mt-4 h-1 w-16 rounded-full bg-accent" />
        {subtitle && (
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
