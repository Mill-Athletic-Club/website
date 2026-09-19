const trainers = [
  {
    name: "Jordan Reyes",
    title: "Head Coach & Owner",
    bio: "CSCS-certified with 14 years coaching strength athletes, from first-timers to provincial powerlifters.",
  },
  {
    name: "Priya Nandan",
    title: "Strength Coach",
    bio: "Former competitive Olympic lifter turned coach, specializing in technical barbell work.",
  },
  {
    name: "Marcus Webb",
    title: "Conditioning Coach",
    bio: "Programs every conditioning finisher on the floor and runs the Saturday community workout.",
  },
];

export default function TrainersPreview() {
  return (
    <section className="border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
          Coaching staff
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-text md:text-4xl">
          Coached by people who lift too
        </h2>

        {/* Sanity: trainer[] (new schema to be created — name, title, bio, photo) */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="flex flex-col gap-4">
              <div className="flex h-16 w-16 items-center justify-center bg-brand-gradient font-display text-lg font-bold text-bg">
                {trainer.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text">
                  {trainer.name}
                </h3>
                <p className="font-body text-sm font-semibold text-teal">
                  {trainer.title}
                </p>
                <p className="mt-2 font-body text-sm text-muted">
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
