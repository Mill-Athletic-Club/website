export default function Hero() {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-text md:text-7xl">
            Train at
            <br />
            <span className="text-gradient">The MAC.</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg text-muted">
            Strength and conditioning training in the heart of Milton, Ontario.
            Small group coaching, honest programming, no gimmicks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/join"
              className="bg-brand-gradient px-7 py-3 font-body text-base font-semibold text-bg no-underline"
            >
              Start your first week
            </a>
            <a
              href="/classes"
              className="border border-white/20 px-7 py-3 font-body text-base font-semibold text-text no-underline hover:border-teal hover:text-teal"
            >
              See the schedule
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <dl className="grid grid-cols-2 gap-y-4 font-body text-sm text-muted">
            <dt className="font-semibold text-text">Location</dt>
            <dd>Milton, Ontario</dd>
            <dt className="font-semibold text-text">Hours</dt>
            <dd>Mon&ndash;Fri 5am&ndash;9pm</dd>
            <dt className="font-semibold text-text">Style</dt>
            <dd>Strength &amp; conditioning</dd>
            <dt className="font-semibold text-text">Format</dt>
            <dd>Small group, coached</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
