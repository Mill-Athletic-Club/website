import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text md:text-5xl">
            Visit The MAC
          </h1>
          <p className="mt-4 max-w-xl font-body text-base text-muted">
            Drop by during open hours, or send a message and a coach will
            get back to you.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-8">
              {/* Sanity: siteSettings.address */}
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-muted">
                  Address
                </p>
                <p className="mt-2 font-body text-lg text-text">
                  412 Steeles Ave, Milton, ON L9T 1Y7
                </p>
              </div>

              {/* Sanity: siteSettings.hoursWeekday / siteSettings.hoursWeekend */}
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-muted">
                  Hours
                </p>
                <p className="mt-2 font-body text-lg text-text">
                  Mon&ndash;Fri: 5am&ndash;9pm
                </p>
                <p className="font-body text-lg text-text">
                  Sat&ndash;Sun: 7am&ndash;2pm
                </p>
              </div>

              {/* Sanity: siteSettings.instagramUrl / siteSettings.facebookUrl */}
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-widest text-muted">
                  Follow
                </p>
                <div className="mt-2 flex gap-4">
                  <a
                    href="#"
                    className="font-body text-lg text-teal no-underline hover:text-blue"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="font-body text-lg text-teal no-underline hover:text-blue"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="flex aspect-video w-full items-center justify-center border border-white/10 bg-surface">
                <p className="font-body text-sm text-muted">
                  Map &mdash; coming with the Sanity integration
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-white/10 bg-surface p-8">
              <h2 className="font-display text-xl font-bold text-text">
                Send a message
              </h2>
              <label className="flex flex-col gap-2 font-body text-sm text-muted">
                Name
                <input
                  type="text"
                  className="border border-white/20 bg-bg px-4 py-3 font-body text-text outline-none focus-visible:border-teal"
                />
              </label>
              <label className="flex flex-col gap-2 font-body text-sm text-muted">
                Email
                <input
                  type="email"
                  className="border border-white/20 bg-bg px-4 py-3 font-body text-text outline-none focus-visible:border-teal"
                />
              </label>
              <label className="flex flex-col gap-2 font-body text-sm text-muted">
                Message
                <textarea
                  rows={4}
                  className="border border-white/20 bg-bg px-4 py-3 font-body text-text outline-none focus-visible:border-teal"
                />
              </label>
              <button
                type="button"
                className="mt-2 bg-brand-gradient px-7 py-3 font-body text-base font-semibold text-bg"
              >
                Send message
              </button>
              {/* Form is UI-only for now — no submission handler wired yet */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
