# LinkedIn Email Extractor and Connection Personalizer

This project is a two-part application designed to streamline LinkedIn networking by automating the process of extracting work email addresses and generating personalized connection requests. It consists of a **Chrome Extension (Frontend)** and a **Node.js/Express Backend API**, with optional **LLM Integration** for personalized messaging.

---

## 📝 Overview

1. **Frontend (Chrome Extension):**
   - Scrapes LinkedIn profiles to extract work email addresses.
   - Uses Hunter.io API for email validation and extraction.

2. **Backend (Node.js/Express):**
   - Processes extracted email addresses.
   - Generates personalized connection request messages using Google's Generative AI API.
   - Securely manages API calls and data processing.

3. **Bonus Task: LLM Integration**
   - Integrates Google's Generative AI API for generating tailored LinkedIn connection requests.
   - Enhances networking by providing context-aware, professionally crafted messages.

---

## 🚀 Features

### Chrome Extension (Frontend)
- **LinkedIn Integration**: Seamlessly interacts with LinkedIn profiles to extract available work email addresses.
- **Email Extraction**: Leverages the Hunter.io API to find and verify email addresses from public data.
- **User-Friendly Interface**: Minimalist UI for easy interaction and email extraction management.

### Backend API
- **Email Validation**: Ensures the validity of email addresses extracted from LinkedIn profiles.
- **Generative AI Messaging**: Generates professional and personalized connection request messages.
- **Secure Communication**: Implements secure API endpoints for safe data exchange.

### Bonus: LLM Integration
- **Context-Aware Messaging**: Utilizes Google's Generative AI to create highly tailored connection requests.
- **Dynamic Input Handling**: Generates messages based on extracted profile data, such as job title, company, and mutual connections.

---

## 🛠️ Technology Stack

- **Frontend**: Chrome Extension (JavaScript, HTML, CSS)
- **Backend**: Node.js, Express.js
- **APIs Used**:
  - Hunter.io API: For email extraction and validation.
  - Google Generative AI API: For personalized message generation.
- **Additional Tools**: JSON Web Tokens (JWT) for authentication, Axios for API calls.

---

## 📂 Project Structure

📦 Project Root ├── 📂 chrome-extension │ ├── manifest.json # Chrome extension configuration │ ├── popup.html # Extension popup interface │ ├── content.js # LinkedIn profile scraper │ ├── background.js # Background script for communication │ └── styles.css # Styling for the extension UI ├── 📂 backend │ ├── server.js # Express server entry point │ ├── routes │ │ ├── email.js # Email validation and processing endpoints │ │ └── message.js # Generative AI integration endpoints │ ├── services │ │ ├── hunterService.js # Hunter.io API integration │ │ └── aiService.js # Google Generative AI API integration │ └── utils │ └── helpers.js # Utility functions ├── 📂 docs │ └── README.md # Project documentation



## 🛠️ Installation and Setup

### Prerequisites
- Node.js and npm installed
- Google API credentials for Generative AI
- Hunter.io API key
- Chrome browser for the extension

### Steps
1. Clone the repository:
   ```bash
   git clone [https://github.com/imransid/linkedin-email-extractor.git](https://github.com/imransid/EmailFinder)
   cd linkedin-email-extractor


cd backend
npm install
npm start



HUNTER_API_KEY=your_hunter_io_key
GOOGLE_API_KEY=your_google_ai_key




markdown
Copy code
# LinkedIn Email Extractor and Connection Personalizer

This project is a two-part application designed to streamline LinkedIn networking by automating the process of extracting work email addresses and generating personalized connection requests. It consists of a **Chrome Extension (Frontend)** and a **Node.js/Express Backend API**, with optional **LLM Integration** for personalized messaging.

---

## 📝 Overview

1. **Frontend (Chrome Extension):**
   - Scrapes LinkedIn profiles to extract work email addresses.
   - Uses Hunter.io API for email validation and extraction.

2. **Backend (Node.js/Express):**
   - Processes extracted email addresses.
   - Generates personalized connection request messages using Google's Generative AI API.
   - Securely manages API calls and data processing.

3. **Bonus Task: LLM Integration**
   - Integrates Google's Generative AI API for generating tailored LinkedIn connection requests.
   - Enhances networking by providing context-aware, professionally crafted messages.

---

## 🚀 Features

### Chrome Extension (Frontend)
- **LinkedIn Integration**: Seamlessly interacts with LinkedIn profiles to extract available work email addresses.
- **Email Extraction**: Leverages the Hunter.io API to find and verify email addresses from public data.
- **User-Friendly Interface**: Minimalist UI for easy interaction and email extraction management.

### Backend API
- **Email Validation**: Ensures the validity of email addresses extracted from LinkedIn profiles.
- **Generative AI Messaging**: Generates professional and personalized connection request messages.
- **Secure Communication**: Implements secure API endpoints for safe data exchange.

### Bonus: LLM Integration
- **Context-Aware Messaging**: Utilizes Google's Generative AI to create highly tailored connection requests.
- **Dynamic Input Handling**: Generates messages based on extracted profile data, such as job title, company, and mutual connections.

---

## 🛠️ Technology Stack

- **Frontend**: Chrome Extension (JavaScript, HTML, CSS)
- **Backend**: Node.js, Express.js
- **APIs Used**:
  - Hunter.io API: For email extraction and validation.
  - Google Generative AI API: For personalized message generation.
- **Additional Tools**: JSON Web Tokens (JWT) for authentication, Axios for API calls.

---

## 📂 Project Structure

📦 Project Root ├── 📂 chrome-extension │ ├── manifest.json # Chrome extension configuration │ ├── popup.html # Extension popup interface │ ├── content.js # LinkedIn profile scraper │ ├── background.js # Background script for communication │ └── styles.css # Styling for the extension UI ├── 📂 backend │ ├── server.js # Express server entry point │ ├── routes │ │ ├── email.js # Email validation and processing endpoints │ │ └── message.js # Generative AI integration endpoints │ ├── services │ │ ├── hunterService.js # Hunter.io API integration │ │ └── aiService.js # Google Generative AI API integration │ └── utils │ └── helpers.js # Utility functions ├── 📂 docs │ └── README.md # Project documentation

yaml
Copy code

---

## 🛠️ Installation and Setup

### Prerequisites
- Node.js and npm installed
- Google API credentials for Generative AI
- Hunter.io API key
- Chrome browser for the extension

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/linkedin-email-extractor.git
   cd linkedin-email-extractor
Set up the Chrome Extension:

Navigate to chrome://extensions/ in Chrome.
Enable Developer Mode.
Click Load unpacked and select the chrome-extension folder.
Install backend dependencies and start the server:


cd backend
npm install
npm start
Configure .env for backend:

HUNTER_API_KEY=your_hunter_io_key
GOOGLE_API_KEY=your_google_ai_key


💡 Usage
Open LinkedIn in Chrome and activate the extension.
Extract emails from profiles using the extension interface.
Backend API processes the emails to generate personalized connection requests.
(Optional) View and customize AI-generated messages before sending.


🌟 Future Enhancements
Add scheduling for automated connection requests.
Implement analytics for tracking connection success rates.
Support multi-language connection requests using LLM.

📧 Contact
For support or inquiries, please email emailofimran1992@gmail.com or open an issue on the repository.

🛡️ License
This project is licensed under the MIT License. See the LICENSE file for more details.
