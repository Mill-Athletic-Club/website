import { classTypes } from "@/lib/mockData";

export default function ClassTypesPreview() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
              Training
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-text md:text-4xl">
              Find your class type
            </h2>
          </div>
          <a
            href="/classes"
            className="hidden whitespace-nowrap font-body text-sm font-semibold text-teal no-underline hover:text-blue md:inline"
          >
            View full schedule &rarr;
          </a>
        </div>

        {/* Sanity: classType[] (new schema to be created — name, description, schedule) */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {classTypes.map((classType) => (
            <div
              key={classType.slug}
              className="flex flex-col gap-3 bg-surface p-6"
            >
              <div className="h-1 w-10 bg-brand-gradient" />
              <h3 className="font-display text-lg font-bold text-text">
                {classType.name}
              </h3>
              <p className="font-body text-sm text-muted">
                {classType.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
