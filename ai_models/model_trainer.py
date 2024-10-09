import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import IsolationForest
import joblib

class ModelTrainer:
    def __init__(self):
        self.eligibility_model = RandomForestClassifier()
        self.fraud_detection_model = IsolationForest()

    def train_eligibility_model(self, X, y):
        self.eligibility_model.fit(X, y)
        joblib.dump(self.eligibility_model, 'eligibility_model.pkl')

    def train_fraud_detection_model(self, X):
        self.fraud_detection_model.fit(X)
        joblib.dump(self.fraud_detection_model, 'fraud_detection_model.pkl')

# Sample training data
X_train = np.array([[1, 3000], [0, 5000], [1, 12000]])  # Features: e.g., [is_farmer, income]
y_train = np.array([1, 0, 1])  # Eligibility: 1 = Eligible, 0 = Not Eligible

X_fraud_train = np.random.rand(100, 5)  # Fraud Detection Features

trainer = ModelTrainer()
trainer.train_eligibility_model(X_train, y_train)
trainer.train_fraud_detection_model(X_fraud_train)
