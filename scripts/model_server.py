from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

eligibility_model = joblib.load('eligibility_model.pkl')
fraud_model = joblib.load('fraud_detection_model.pkl')

@app.route('/predict-eligibility', methods=['POST'])
def predict_eligibility():
    data = request.json
    features = np.array(data['features']).reshape(1, -1)
    prediction = eligibility_model.predict(features)
    return jsonify({'eligibility': prediction[0]})

@app.route('/predict-fraud', methods=['POST'])
def predict_fraud():
    data = request.json
    features = np.array(data['features']).reshape(1, -1)
    prediction = fraud_model.predict(features)
    return jsonify({'fraud_prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
