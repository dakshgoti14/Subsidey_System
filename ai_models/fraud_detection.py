from sklearn.ensemble import IsolationForest
import numpy as np
import joblib

class FraudDetection:
    def __init__(self):
        self.model = IsolationForest()

    def train(self, X):
        self.model.fit(X)
        joblib.dump(self.model, 'fraud_detection_model.pkl')

    def predict(self, X):
        self.model = joblib.load('fraud_detection_model.pkl')
        return self.model.predict(X)

X_train = np.random.rand(100, 5)  # Sample data
fraud_detector = FraudDetection()
fraud_detector.train(X_train)
