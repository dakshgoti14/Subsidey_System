from flask import Flask, request, jsonify
from fraud_detection import FraudDetection
from eligibility_model import EligibilityModel

app = Flask(__name__)
fraud_model = FraudDetection()
eligibility_model = EligibilityModel()

@app.route('/predict-eligibility', methods=['POST'])
def predict_eligibility():
    data = request.json
    prediction = eligibility_model.predict([data['features']])
    return jsonify({"prediction": prediction[0]})

@app.route('/predict-fraud', methods=['POST'])
def predict_fraud():
    data = request.json
    prediction = fraud_model.predict([data['features']])
    return jsonify({"fraud_prediction": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)

