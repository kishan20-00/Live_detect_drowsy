from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the pre-trained Keras model
best_model = load_model('detection.h5')  # Replace 'detection.h5' with the path to your .h5 file

# Function to preprocess the input image
def preprocess_image(image):
    # Resize the image to match the size used during training (64x64)
    resized_img = image.resize((64, 64))
    # Convert image to grayscale
    grayscale_img = resized_img.convert('L')
    # Convert image to numpy array
    np_img = np.array(grayscale_img)
    # Normalize pixel values
    normalized_img = np_img / 255.0
    return normalized_img

# Function to predict using the loaded model
def predict_image(image):
    preprocessed_img = preprocess_image(image)
    # Add batch dimension
    preprocessed_img = np.expand_dims(preprocessed_img, axis=0)
    # Reshape to match model input shape (1, 64, 64, 1)
    preprocessed_img = preprocessed_img.reshape(1, 64, 64, 1)
    result = best_model.predict(preprocessed_img)
    return result[0][0]  # Return the probability of being open

@app.route('/predict', methods=['POST'])
def predict():
    # Check if the request contains file data
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image_file = request.files['image']
    image = Image.open(image_file)
    
    # Predict using the loaded model
    prediction = predict_image(image)

    # Convert prediction to 'opened' or 'closed' based on threshold
    if prediction > 0.5:
        prediction_label = 'opened'
    else:
        prediction_label = 'closed'

    print(prediction)
    print(prediction_label)

    return jsonify({'prediction': prediction_label})

if __name__ == '__main__':
    app.run(debug=True)
