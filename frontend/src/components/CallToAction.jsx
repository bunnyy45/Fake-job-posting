import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section
    id="call-to-action"
    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Detect Fake Jobs?</h2>
      <p className="text-lg md:text-xl mb-6">
        Paste or upload your job postings and get instant analysis with explainability.
      </p>
      <button
        onClick={() => navigate("/analyze")}
        className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full hover:bg-purple-100 hover:scale-105 transition transform active:scale-95 shadow-lg"
      >
        Check a Job Posting
      </button>
    </section>
  );
}

export default CallToAction;
