import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

class EligibilityModel:
    def __init__(self):
        self.model = RandomForestClassifier()

    def train(self, X, y):
        self.model.fit(X, y)
        joblib.dump(self.model, 'eligibility_model.pkl')

    def predict(self, X):
        self.model = joblib.load('eligibility_model.pkl')
        return self.model.predict(X)

X_train = np.array([[1, 3000], [0, 5000], [1, 12000]])
y_train = np.array([1, 0, 1])

eligibility_model = EligibilityModel()
eligibility_model.train(X_train, y_train)
