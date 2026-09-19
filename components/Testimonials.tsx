const testimonials = [
  {
    quote:
      "I've trained at three gyms in Milton and this is the only one where a coach actually watches my bar path every set.",
    name: "Devon K.",
    memberSince: "Member since 2022",
  },
  {
    quote:
      "Small group coaching sounded like a gimmick until I tried it. Twelve people, one coach, real feedback every session.",
    name: "Alisha R.",
    memberSince: "Member since 2023",
  },
  {
    quote:
      "No fluff, no fads — just programming that works and coaches who remember your PRs better than you do.",
    name: "Tom F.",
    memberSince: "Member since 2021",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
          Member stories
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-text md:text-4xl">
          What members say
        </h2>

        {/* Sanity: testimonial[] (new schema to be created — quote, memberName, memberSince) */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between gap-6 bg-surface p-6"
            >
              <blockquote className="font-body text-base text-text">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="font-body text-sm text-muted">
                <span className="font-semibold text-text">
                  {testimonial.name}
                </span>{" "}
                &middot; {testimonial.memberSince}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
