# NgawourAI Website

«Official website and documentation frontend for NgawourAI.»

NgawourAI — Lite AI. Small models. Real capability.

This repository contains the source code for the public-facing NgawourAI website.

The website is designed as a lightweight, documentation-first interface for the NgawourAI project and its LiteAI models.

---

🌐 About

The NgawourAI website provides:

- Project information
- LiteAI documentation
- Model information
- Training documentation
- Testing documentation
- Google Colab notebook links
- Model download links
- Project updates
- Frequently asked questions

The website does not provide an inference API.

Users download and run NgawourAI models locally.

---

🎨 Design

The website follows a minimal, documentation-focused design.

Visual direction:

- Black and white
- Grayscale
- Clean typography
- Generous whitespace
- Minimal animations
- Lightweight frontend
- Responsive design
- Mobile friendly

The design intentionally avoids unnecessary visual effects and heavy frontend frameworks.

---

🛠️ Technology

The website uses:

HTML
CSS
Vanilla JavaScript

No frontend framework is required.

The website is designed to work as a static website.

---

📁 Structure

NgawourAI-Web/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── logo/
│   └── icons/
│
└── README.md

The structure may change as the website develops.

---

🚀 GitHub Pages

This repository is intended to be deployed using GitHub Pages.

The website does not require a production backend.

Once GitHub Pages is enabled, the static files can be served directly.

---

🧪 Local Testing

A small Flask runner may be used during development to test the website locally.

The Flask server is not part of the production website.

Example:

Local Device
     ↓
Flask Runner
     ↓
index.html

The Flask runner exists only as a development/testing utility.

---

🤖 Models

The website currently contains no released models.

When NgawourAI models become available, the website will provide:

- Model information
- GGUF Q4_K_M download links
- Google Drive download links
- Testing notebooks
- Model documentation
- Benchmark information

Until then, the Models section will display:

«No models released yet.»

No fake model links or download URLs are used.

---

🧪 Google Colab

The website will eventually link to Google Colab notebooks for:

Testing

Users can test released models through Google Colab before downloading them.

Training

Training notebooks will document fine-tuning workflows using Google Colab and Unsloth Studio.

Notebook links will be added when they are available.

---

📚 Documentation First

The website is intentionally documentation-first.

Most of the website is dedicated to explaining:

- What NgawourAI is
- What LiteAI means
- Model development
- Fine-tuning
- Dataset preparation
- Evaluation
- Quantization
- GGUF
- Local inference
- Google Colab
- Unsloth Studio
- Testing models

The goal is to make the project understandable and reproducible rather than simply presenting a model download page.

---

🔗 Related

NgawourAI

The main project repository contains model development resources, notebooks, experiments, and other project files.

LiteAI

LiteAI is the core philosophy behind NgawourAI:

«Build AI models that are as small and lightweight as possible while remaining useful for their intended tasks.»

---

📜 License

The website source code and project assets are licensed according to the license specified in this repository.

Model licenses are separate and depend on the individual model and its underlying base model.

---

🚧 Status

Website       In Development
Documentation In Development
Models        Not Released
Notebooks     Coming Soon

---

NgawourAI

Small. Lightweight. Useful. Local.
