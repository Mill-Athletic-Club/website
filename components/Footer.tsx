import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface text-text">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <Image src="/mac-logo.svg" alt="The MAC" width={36} height={36} />
          <p className="font-display text-base font-bold">THE MAC</p>
        </div>

        <div className="font-body text-sm">
          <p className="font-semibold">Hours</p>
          <p className="mt-2 text-muted">Mon&ndash;Fri: 5am&ndash;9pm</p>
          <p className="text-muted">Sat&ndash;Sun: 7am&ndash;2pm</p>
        </div>

        <div className="font-body text-sm">
          <p className="font-semibold">Follow</p>
          <div className="mt-2 flex gap-4">
            <a href="#" className="text-muted no-underline hover:text-teal">
              Instagram
            </a>
            <a href="#" className="text-muted no-underline hover:text-teal">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
