function ResultCard({ result }) {
  return (
    <div className="max-w-xl mx-auto mt-6 p-4 rounded-xl shadow bg-white">
      <h3 className="text-lg font-semibold mb-2 text-center">Result</h3>
      <p><strong>Prediction:</strong> {result.prediction}</p>
      <p><strong>Confidence:</strong> {result.confidence * 100}%</p>
      <div className="mt-4">
        <h4 className="font-semibold">Top Keywords Influencing Decision:</h4>
        <ul className="list-disc ml-6">
          {Object.entries(result.explanation).map(([word, weight], idx) => (
            <li key={idx}>
              {word}: {weight.toFixed(4)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultCard;
