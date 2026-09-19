import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/mac-logo.svg"
            alt="The MAC — Mill Athletic Club"
            width={44}
            height={44}
            className="glow"
          />
          <span className="font-display text-lg font-bold tracking-tight text-text">
            THE MAC
          </span>
        </a>

        <nav className="hidden gap-8 font-body text-sm font-medium md:flex">
          <a href="/classes" className="text-text no-underline hover:text-teal">
            Classes
          </a>
          <a href="/blog" className="text-text no-underline hover:text-teal">
            Blog
          </a>
          <a href="/about" className="text-text no-underline hover:text-teal">
            About
          </a>
          <a href="/contact" className="text-text no-underline hover:text-teal">
            Contact
          </a>
        </nav>

        <a
          href="/join"
          className="bg-brand-gradient px-5 py-2 font-body text-sm font-semibold text-bg no-underline"
        >
          Join now
        </a>
      </div>
    </header>
  );
}
