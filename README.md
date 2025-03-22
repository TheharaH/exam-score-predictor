# Exam Score Predictor

The *Exam Score Predictor* is a machine learning tool that predicts a student's next exam score based on their last two exam scores. This application utilizes a regression model, implemented using Flask for the backend and React for the frontend.

## Dataset
- *Source*: The dataset is sourced from [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/).
- *Rows*: The dataset contains 33 rows after feature selection.

## Model Implementation
### Regression Model
- *Algorithm*: Linear Regression (LinearRegression() from scikit-learn)
- *Features*: The model uses the last two exam scores to predict the next exam score.

### Performance Metrics
- *Training Performance*:
  - *MAE (Mean Absolute Error)*: 0.81
  - *RMSE (Root Mean Squared Error)*: 1.28
  - *R²*: 84.34%

- *Testing Performance*:
  - *MAE (Mean Absolute Error)*: 0.73
  - *RMSE (Root Mean Squared Error)*: 1.17
  - *R²*: 85.99%

## Tech Stack
- *Backend*: Flask API (Python)
- *Frontend*: React
- *Integration Tool*: PyCharm (for API development)

## Features
- *User Input*: Users can input their last two exam scores.
- *Prediction*: The system predicts their next exam score based on the provided inputs.

