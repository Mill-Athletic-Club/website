import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { classTypes } from "@/lib/mockData";

export default function ClassesPage() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
            Training
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text md:text-5xl">
            Classes &amp; Schedule
          </h1>
          <p className="mt-4 max-w-xl font-body text-base text-muted">
            Every session is coached and capped at twelve athletes, built
            around barbell strength work. Find the format that fits your
            training.
          </p>

          {/* Sanity: classType[] — name, slug, description, schedule (new schema to be created) */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {classTypes.map((classType) => (
              <div
                key={classType.slug}
                className="flex flex-col gap-3 bg-surface p-8"
              >
                <div className="h-1 w-10 bg-brand-gradient" />
                <h2 className="font-display text-xl font-bold text-text">
                  {classType.name}
                </h2>
                <p className="font-body text-sm text-muted">
                  {classType.description}
                </p>
                <p className="mt-2 font-body text-sm font-semibold text-teal">
                  {classType.schedule}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-10">
            <h2 className="font-display text-2xl font-bold text-text">
              Ready to try a class?
            </h2>
            <a
              href="/join"
              className="bg-brand-gradient px-7 py-3 font-body text-base font-semibold text-bg no-underline"
            >
              Start your first week
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
