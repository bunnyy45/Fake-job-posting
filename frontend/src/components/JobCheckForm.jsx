import { useState } from "react";
import axios from "axios";

function JobCheckForm({ setResult }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { text }); // Update URL if needed
      setResult(response.data);
    } catch (error) {
      console.error("Error checking job posting:", error);
      alert("Error connecting to backend. Please check your server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 rounded-xl shadow bg-white">
      <h2 className="text-xl font-semibold mb-2 text-center">Check if a Job Posting is Real or Fake</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          rows="8"
          placeholder="Paste the job posting text here..."
          className="p-3 border rounded-lg focus:outline-none focus:ring"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          disabled={loading}
        >
          {loading ? "Checking..." : "Check"}
        </button>
      </form>
    </div>
  );
}

export default JobCheckForm;
