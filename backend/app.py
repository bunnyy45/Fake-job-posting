from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import shap
import numpy as np

# Initialize app
app = Flask(__name__)
CORS(app)

# Load model and vectorizer
model = joblib.load('model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

# Prepare SHAP explainer
explainer = shap.LinearExplainer(model, vectorizer.transform(["sample text"]), feature_perturbation="interventional")

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Fake Job Detection API is working!"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        text = data.get("text", "")

        if not text.strip():
            return jsonify({"error": "No text provided"}), 400

        # Transform text
        X_vect = vectorizer.transform([text])

        # Predict
        pred = model.predict(X_vect)[0]
        proba = model.predict_proba(X_vect)[0][pred]

        prediction = "Fake" if pred == 1 else "Real"
        confidence = round(float(proba), 4)

        # Explanation
        shap_values_all_classes = explainer.shap_values(X_vect)

        if isinstance(shap_values_all_classes, list):
            shap_values = shap_values_all_classes[1][0]  # class 1 (Fake), first sample
        else:
            shap_values = shap_values_all_classes[0]     # first sample

        feature_names = vectorizer.get_feature_names_out()
        feature_importance = dict(sorted(
            zip(feature_names, shap_values),
            key=lambda x: abs(x[1]),
            reverse=True
        )[:10])  # top 10 features

        return jsonify({
            "prediction": prediction,
            "confidence": confidence,
            "explanation": feature_importance
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
