<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=68A9BD&width=600&lines=AI+Test+Generation+Platform;Generate+Tests+with+GPT+%26+Gemini" alt="Typing SVG">
</p>

<h1 align="center">AI Test Generation Platform</h1>
<h3 align="center">Generate tests and content effortlessly using AI-powered APIs</h3>

<div align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-16+-green">
  <img alt="Express.js" src="https://img.shields.io/badge/Express.js-4.x-blue">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/your-username/your-repo">
</div>

## Project Structure

```
.
├── api/
│   └── index.js           # API entry point
├── app.js                 # Main application file
├── controller/
│   └── generateTest.js    # Controller handling test generation logic
├── routes/
│   └── generateTest.js    # API routes
└── util/
    ├── chat-gpt.js        # OpenAI GPT integration
    └── geminiClient.js    # Google Gemini AI integration
```

## Tech Stack

* Node.js: Backend runtime
* Express.js: Web framework
* OpenAI GPT: AI content generation
* Google Gemini: AI content generation

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env` file in the root folder:

```
OPENAI_API_KEY=your_openai_api_key
GOOGLE_GEMINI_KEY=your_google_gemini_key
PORT=3000
```

### Run the project

```bash
npm start
```

API will run on `http://localhost:3000`

## API Usage

### Endpoint

```
POST /unit-test
```

### Test with Postman

1. Open Postman → New Request
2. Method: `POST`
3. URL: `http://localhost:3000/unit-test`
4. Body → raw JSON:
5. Send request → check JSON response.

## Features

* AI Test Generation: Create jest unit tests for given function.
* Multiple AI Models: OpenAI GPT or Google Gemini AI integration.
* Modular & Extensible: Easy to add new routes or models.
* API Ready: Connect with any frontend or app.

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Make changes & commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## Contact

* Developer: Deviprasad Rai
* Email: [dpraidola@gmail.com](mailto:dpraidola@gmail.com)
* GitHub: [https://github.com/devi5040](https://github.com/devi5040)
