import Link from "next/link";
import { blogPosts } from "@/lib/placeholder";

export default function BlogIndex() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-2 text-center">The Blog</h1>
      <p className="text-center text-gray-500 mb-12">Dispatches from a man who knows he married up</p>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <p className="text-sm text-gray-400">{post.publishedAt}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
