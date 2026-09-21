# NgawourAI Official Website

Official landing page and model catalog for NgawourAI, a provider of lightweight AI models distributed in GGUF format.

## 🚀 Quick Start (Local Testing)

To run this website locally (especially on Android/Termux) using the provided Flask runner:

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the server:**
   ```bash
   python app.py
   ```

3. **Access the site:**
   Open your browser and go to `http://localhost:5000` (or your device's IP address).

## 🌐 Deployment (Production)

This website is designed to be static. You can deploy it directly to **GitHub Pages**:

1. Push these files to a GitHub repository.
2. Go to **Settings** → **Pages**.
3. Select the `main` branch as the source and save.

## 🛠 Customization

- **Adding Models:** Open `script.js` and add new objects to the `models` array.
- **Updating Links:** Search for `YOUR_...` placeholders in `index.html` and `script.js` and replace them with your actual Google Drive and Colab links.
