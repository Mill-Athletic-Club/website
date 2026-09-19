import { notFound } from "next/navigation";
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Sanity: blogPost — fetch by slug.current, fields title/publishedAt/body/coverImage
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-bg">
        <div
          className={`aspect-[3/1] w-full ${coverToneClasses[post.coverTone]}`}
        />
        <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <a
            href="/blog"
            className="font-body text-sm font-semibold text-teal no-underline hover:text-blue"
          >
            &larr; Back to blog
          </a>
          <p className="mt-6 font-body text-xs font-semibold uppercase tracking-widest text-muted">
            {formatDate(post.publishedAt)}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-8 flex flex-col gap-5">
            {post.body.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
