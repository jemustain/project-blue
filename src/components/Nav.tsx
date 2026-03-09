import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-accent transition-colors">
          🏠 Ken&apos;s Corner
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}
