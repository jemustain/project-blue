import Link from "next/link";
import { heroData, blogPosts } from "@/lib/placeholder";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            {heroData.heading}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            {heroData.subheading}
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link href="/about" className="bg-accent text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
              Meet Ken (Julie&apos;s Husband)
            </Link>
            <Link href="/blog" className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition font-semibold">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Declarations of Love</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 h-full flex flex-col">
                <div className="bg-blue-100 rounded-lg h-40 mb-4 flex items-center justify-center text-4xl">
                  {post.slug.includes("nobel") ? "🏆" : post.slug.includes("genius") ? "🧠" : "📋"}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">{post.excerpt}</p>
                <p className="text-xs text-gray-400 mt-4">{post.publishedAt}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
