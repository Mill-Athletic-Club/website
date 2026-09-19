import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockBlogPosts } from "@/lib/mockData";

const coverToneClasses: Record<string, string> = {
  teal: "bg-gradient-to-br from-teal/30 via-surface to-surface",
  blue: "bg-gradient-to-br from-blue/30 via-surface to-surface",
  mixed: "bg-brand-gradient",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = [...mockBlogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <Header />
      <main className="bg-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-teal">
            From the gym floor
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-text md:text-5xl">
            The MAC Blog
          </h1>
          <p className="mt-4 max-w-xl font-body text-base text-muted">
            Coaching notes, programming philosophy, and the occasional PR
            story from the floor at Milton&rsquo;s home for strength
            training.
          </p>

          {/* Sanity: blogPost[] — title, slug, publishedAt, excerpt, coverImage */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-white/10 bg-surface no-underline"
              >
                <div
                  className={`aspect-video ${coverToneClasses[post.coverTone]}`}
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted">
                    {formatDate(post.publishedAt)}
                  </p>
                  <h2 className="font-display text-lg font-bold text-text group-hover:text-teal">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-muted">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
