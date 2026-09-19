import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainersPreview from "@/components/TrainersPreview";

const values = [
  {
    name: "Coaching, not supervision",
    description:
      "Every session has a coach watching bar path, not a playlist running the room.",
  },
  {
    name: "Community that shows up",
    description:
      "Members who train together for years, not a revolving door of New Year resolutions.",
  },
  {
    name: "Programming with a reason",
    description:
      "Nothing on the whiteboard is there because it's trendy — every block has a purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text md:text-5xl">
            The MAC&rsquo;s story
          </h1>

          {/* Sanity: siteSettings.aboutText / siteSettings.foundingStory (fields to be added to the siteSettings schema) */}
          <div className="mt-8 flex max-w-2xl flex-col gap-5">
            <p className="font-body text-base text-muted">
              The MAC opened in Milton in 2019 with one idea: strength
              training doesn&rsquo;t need gimmicks, just good coaching,
              honest programming, and a community that shows up. What
              started as a single small-group class in a converted warehouse
              unit has grown into Milton&rsquo;s home for strength and
              conditioning &mdash; without losing the thing that made it
              work in the first place: a coach on the floor who knows your
              name.
            </p>
            <p className="font-body text-base text-muted">
              We&rsquo;re not a big-box gym and we&rsquo;re not trying to be.
              Every class is capped, every program is built by a real coach,
              and every member gets a check-in that actually changes their
              training.
            </p>
          </div>

          {/* Sanity: siteSettings.values[] (new array field to be added — name, description) */}
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex flex-col gap-3 bg-surface p-6"
              >
                <div className="h-1 w-10 bg-brand-gradient" />
                <h2 className="font-display text-lg font-bold text-text">
                  {value.name}
                </h2>
                <p className="font-body text-sm text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <TrainersPreview />
      </main>
      <Footer />
    </>
  );
}
