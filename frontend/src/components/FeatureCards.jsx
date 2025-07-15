import { ShieldCheck, SearchCheck, Lock } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-purple-600" />,
    title: "AI-Powered Detection",
    description: "Detect fake job postings instantly with our ML-based classifier trained on real data.",
  },
  {
    icon: <SearchCheck size={40} className="text-purple-600" />,
    title: "Explainability",
    description: "View keyword impact analysis so you understand why a posting is flagged.",
  },
  {
    icon: <Lock size={40} className="text-purple-600" />,
    title: "Privacy First",
    description: "Your data is never stored; analysis happens securely without retaining your information.",
  },
];

function FeatureCards() {
  return (
    <section className="py-16 bg-gray-50 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Our Detector?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
