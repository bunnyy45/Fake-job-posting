import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

function AnalyzePage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { text });
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-100 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-6 border border-purple-100">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-2">🛡️ Analyze Job Posting</h2>
          <p className="text-center text-gray-500 mb-4">Check if a job posting is real or fake instantly</p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <textarea
              rows="8"
              placeholder="Paste the job posting text here..."
              className="p-3 border rounded-lg focus:outline-none focus:ring focus:border-purple-400 transition resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-transform transform hover:scale-105 duration-200"
              disabled={loading}
            >
              {loading ? "Checking..." : "Check Real or Fake"}
            </button>
          </form>
        </div>

        {result && (
          <div className="max-w-xl w-full mt-6 p-6 bg-white rounded-3xl shadow-xl border border-purple-100">
            <h3 className="text-xl font-bold mb-2 text-center text-purple-700">Result</h3>
            <p className="text-center mb-2">
              Prediction:{" "}
              <span
                className={`font-semibold ${
                  result.prediction === "Fake" ? "text-red-600" : "text-green-600"
                }`}
              >
                {result.prediction}
              </span>
            </p>
            <p className="text-center mb-4">
              Confidence:{" "}
              <span className="font-semibold">
                {(result.confidence * 100).toFixed(2)}%
              </span>
            </p>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-center">
                Top Influencing Keywords:
              </h4>
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {Object.entries(result.explanation).map(([word, weight], idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {word}: {weight.toFixed(4)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AnalyzePage;
