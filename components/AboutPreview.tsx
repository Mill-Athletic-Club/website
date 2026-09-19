export default function AboutPreview() {
  return (
    <section className="border-t border-white/10 bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1fr_1.4fr] md:py-24">
        <div>
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
            About The MAC
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Built for people who want to get{" "}
            <span className="text-gradient">stronger</span>, not entertained.
          </h2>
        </div>

        {/* Sanity: siteSettings.aboutText (field to be added to the siteSettings schema) */}
        <div className="flex flex-col justify-center gap-6 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="font-body text-base text-muted">
            The MAC opened in Milton in 2019 with one idea: strength training
            doesn&rsquo;t need gimmicks, just good coaching, honest
            programming, and a community that shows up. No fads, no flashing
            lights &mdash; just barbells, kettlebells, and coaches who know
            your name.
          </p>
          <p className="font-body text-base text-muted">
            Every program is built and adjusted by real coaches watching real
            reps &mdash; not a template pulled off the internet.
          </p>
        </div>
      </div>
    </section>
  );
}
