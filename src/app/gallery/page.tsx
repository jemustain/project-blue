import { galleryImages } from "@/lib/placeholder";

export default function Gallery() {
  const colors = ["bg-blue-200", "bg-pink-200", "bg-green-200", "bg-yellow-200", "bg-purple-200", "bg-red-200", "bg-indigo-200", "bg-orange-200"];
  const emojis = ["📸", "🍷", "🔧", "👶", "💻", "🚗", "🍳", "🎉"];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-2 text-center">The Gallery</h1>
      <p className="text-center text-gray-500 mb-12">
        Photographic evidence of Julie being amazing (and Ken being there too, sometimes)
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((img, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className={`${colors[i % colors.length]} h-48 flex items-center justify-center text-6xl`}>
              {emojis[i % emojis.length]}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm mb-1">{img.title}</h3>
              <p className="text-gray-500 text-xs">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
