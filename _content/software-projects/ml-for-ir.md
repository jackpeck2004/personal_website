---
title: Machine Learning Model for Predicting Functional Groups from IR Spectra
description: We fine-tuned a machine learning model to analyze chemical mixtures with IR spectroscopy, as existing models only handle pure compounds. Our process involved reproducing a state-of-the-art model, scraping and processing 60,000+ spectra, and then fine-tuning for binary mixtures.
languages: Python
frameworks: PyTorch, NumPy, OpenCV, Scikit-learn, Pandas, Matplotlib
date: 06/2025
live: https://giacomopasin.com/articles/20250620-ml-for-ir-spectroscopy
featured: true
published: true
cv: true
cvOrder: 2
cvTitle: ML for IR Spectroscopy
cvTechnologies: Python, PyTorch, OpenCV
cvBullets:
  - "Built a training corpus of 60,000+ IR spectra in under two days by developing two Selenium scrapers for NIST and SDBS and normalizing GIF and JCAMP-DX data."
  - "Extended functional-group prediction from pure compounds to binary mixtures by reproducing a published CNN in PyTorch and developing a fine-tuning pipeline using synthetic mixture spectra."
  - "Enabled spectrum uploads to return functional-group probabilities through a web interface by deploying the trained model behind a Flask API with Swagger documentation."
---
