from flask import Flask, jsonify, request
from flask_cors import CORS

print("Starting Flask app...")

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    print("Home route accessed")
    return jsonify({"message": "Welcome to the Fake Job Posting API!"})

if __name__ == '__main__':
    print("Inside __main__")
    app.run(debug=True)
