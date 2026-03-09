import { blogPosts } from "@/lib/placeholder";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-primary hover:underline text-sm mb-6 inline-block">
        ← Back to all posts
      </Link>
      <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-8">{post.publishedAt}</p>
      <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
        {post.body.map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-lg">{para}</p>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-8 italic">
        Written with love by Ken. Spell-checked by Julie (because of course).
      </p>
    </section>
  );
}
