import { aboutData } from "@/lib/placeholder";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-8 text-center">{aboutData.title}</h1>
      <div className="bg-white rounded-xl shadow-md p-8 space-y-4">
        <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
          🤵
        </div>
        {aboutData.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-lg">
            {p}
          </p>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-8 italic">
        * This bio was written by Ken and &quot;lightly edited&quot; by Julie. 
        (Julie wrote all of it. Ken approved it because everything she writes is perfect.)
      </p>
    </section>
  );
}
