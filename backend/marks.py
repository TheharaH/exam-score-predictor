from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS  # Allows React to send requests to Flask

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your trained model using joblib
model = joblib.load("linear_regression_model.pkl")

# Check model type and coefficients to verify it's loaded correctly
print(f"Model type: {type(model)}")
print(f"Model coefficients: {model.coef_}")

@app.route("/")
def home():
    return "Flask server is running!"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # Get JSON data from React
    G1 = data.get("G1")
    G2 = data.get("G2")

    if G1 is None or G2 is None:
        return jsonify({"error": "Invalid input"}), 400

    # Convert input to NumPy array and reshape for prediction
    input_data = np.array([[G1, G2]])

    # Debugging print to check the input data shape
    print(f"Input data shape: {input_data.shape}")

    # Use the loaded model for prediction
    try:
        prediction = model.predict(input_data)  # Predict with the model
        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
