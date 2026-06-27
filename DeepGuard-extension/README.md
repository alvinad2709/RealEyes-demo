# DeepGuard

DeepGuard is an AI-powered deepfake image detection project. It combines a FastAPI AI backend, an Express API bridge, a React web interface, and a Chrome extension that can capture selected webpage regions for image analysis.

## Features

- Image deepfake detection using a Hugging Face/PyTorch model
- Upload-based image analysis
- Image URL analysis
- Base64 image analysis for browser extension workflows
- React web UI for image detection results
- Chrome extension with region selection and visible-tab screenshot capture
- Authenticity score, probability breakdown, hash generation, and analysis details
- DOCX report generation from the web UI

## Current Scope

The implemented AI backend currently supports image detection only.

There are UI/page files for broader concepts such as live detection, video detection, awareness, fake news, and AI chat, but the active FastAPI backend routes in this folder are image-focused:

- `backend/routers/image.py`
- `backend/models/image_model.py`

## Project Structure

```text
DeepGuard-extension/
├── api/                    # Express API bridge used by the web app
│   ├── server.js
│   ├── routes/
│   └── controllers/
├── backend/                # FastAPI AI image detection backend
│   ├── main.py
│   ├── models/
│   │   └── image_model.py
│   ├── routers/
│   │   └── image.py
│   └── requirements.txt
├── extension/              # Chrome Manifest V3 extension
│   ├── public/
│   │   └── manifest.json
│   └── src/
│       ├── background/
│       ├── content/
│       ├── popup/
│       └── shared/
├── web/                    # React web frontend
│   └── src/
│       ├── components/
│       └── pages/
├── start_backend.bat
├── start_mern.bat
└── build_extension.bat
```

## Architecture

```text
React Web UI
   -> Express API at http://localhost:5000/api/tools/detect-image
      -> FastAPI AI Backend at http://127.0.0.1:8000/analyze/image

Chrome Extension
   -> Captures selected webpage region
      -> Sends base64 image to FastAPI backend at /analyze/image-base64
```

## Tech Stack

- Frontend: React, Vite, Tailwind CSS
- Extension: Chrome Manifest V3, React, TypeScript, Vite
- API bridge: Node.js, Express, Multer
- AI backend: Python, FastAPI, Uvicorn
- ML stack: PyTorch, TorchVision, Transformers, timm, Pillow

## Backend Setup

From `DeepGuard-extension/backend`:

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

The FastAPI server exposes:

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/analyze/image` | Analyze an uploaded image file |
| `POST` | `/analyze/image-url` | Analyze an image from a URL |
| `POST` | `/analyze/image-base64` | Analyze a base64-encoded image |
| `GET` | `/health` | Health check |
| `GET` | `/docs` | Swagger API docs |

## Express API Setup

From `DeepGuard-extension/api`:

```bash
npm install
npm run dev
```

This starts the Express API on `http://localhost:5000`. The web app uses:

```text
POST /api/tools/detect-image
```

The Express API forwards image files or image URLs to the FastAPI backend and formats the result for the React UI.

## Web App Setup

From `DeepGuard-extension/web`:

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal. The image detection page is available at:

```text
/detect-image
```

## Chrome Extension Setup

From `DeepGuard-extension/extension`:

```bash
npm install
npm run build
```

Then load the extension in Chrome:

1. Open `chrome://extensions/`
2. Enable Developer mode
3. Click Load unpacked
4. Select `DeepGuard-extension/extension/dist`

Make sure the FastAPI backend is running on port `8000` before using region analysis.

## Useful Scripts

```text
start_backend.bat     Starts the Python/FastAPI backend
build_extension.bat   Builds the Chrome extension
start_mern.bat        Starts the web/API stack if configured locally
```

## GitHub Description

DeepGuard is an AI-powered deepfake image detection project with a FastAPI backend, Express API bridge, React web interface, and Chrome extension support for webpage region capture and image analysis.

## Suggested Topics

```text
deepfake-detection
image-detection
ai
fastapi
react
chrome-extension
pytorch
huggingface
computer-vision
media-forensics
```
