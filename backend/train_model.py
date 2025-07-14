print("Train model script started.")

import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib

print("Libraries imported successfully.")

try:
    df = pd.read_csv('fake_job_postings.csv')
    print("Dataset loaded successfully.")
except Exception as e:
    print(f"Failed to load dataset: {e}")
    exit()

# Data cleaning
print("Cleaning data...")
df['text'] = df['title'].fillna('') + ' ' + df['company_profile'].fillna('') + ' ' + df['description'].fillna('') + ' ' + df['requirements'].fillna('') + ' ' + df['benefits'].fillna('')
df = df[['text', 'fraudulent']].dropna()

print("Preparing features and labels...")
X = df['text']
y = df['fraudulent']  # 0 = Real, 1 = Fake

# Train-test split
print("Splitting data...")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Vectorization
print("Vectorizing...")
vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Model
print("Training model...")
model = LogisticRegression(max_iter=1000)
model.fit(X_train_tfidf, y_train)

# Evaluation
print("Evaluating model...")
y_pred = model.predict(X_test_tfidf)
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)
print(classification_report(y_test, y_pred))

# Save model and vectorizer
print("Saving model and vectorizer...")
joblib.dump(model, 'model.pkl')
joblib.dump(vectorizer, 'vectorizer.pkl')

print("✅ Model and vectorizer saved successfully.")
print("Train model script completed.")
