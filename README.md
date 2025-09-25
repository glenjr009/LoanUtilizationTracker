Loan Utilization App

A cross-platform mobile and web solution to track and verify loan utilization using AI, GPS, and blockchain. Built for Smart India Hackathon 2025 by Team Hexa Titans.

🚀 Features

📱 Mobile-first app (React Native / Flutter) for beneficiaries and officers

📷 Native camera integration to capture asset images/videos

📡 Offline uploads & sync when connectivity is available

🤖 AI/ML-based fraud detection (image tampering, fake submissions)

🌍 GPS-based verification of asset location

🔗 Blockchain-backed transparency (Hyperledger / Polygon)

🗄 Secure backend with Node.js/FastAPI, PostgreSQL + MongoDB

📊 Real-time dashboard for officers to approve/reject verifications

🛠 Tech Stack:

FRONTED:-

React Native / Flutter

Native Camera + GPS APIs

Offline Storage (AsyncStorage / SQLite)

BACKEND:-

Node.js / FastAPI

PostgreSQL (structured data)

MongoDB (media metadata)

Redis / RabbitMQ (async processing)

Infrastructure

AWS S3 / Google Cloud Storage (file storage)

TensorFlow / PyTorch Lightning (AI/ML models)

Hyperledger Fabric / Polygon (blockchain integration)

📂 Project Structure loan-utilization-app/ │── frontend/ # React Native or Flutter app │── backend/ # Node.js / FastAPI APIs │── ml/ # AI/ML models & scripts │── docs/ # Documentation & diagrams │── README.md # Project description

⚡ Installation Prerequisites

Node.js (>=18)

Python (>=3.9)

PostgreSQL + MongoDB

React Native CLI / Flutter SDK

Clone the repo git clone https://github.com//loan-utilization-app.git cd loan-utilization-app

Setup Frontend cd frontend npm install npm run start

Setup Backend cd backend npm install npm run dev

📸 Usage Flow

Beneficiary logs in using mobile number/OTP.

Uploads asset images/videos (works offline too).

AI verifies authenticity & GPS checks location.

Data syncs to backend once online.

Officer reviews & approves/rejects via dashboard.

🤝 Team – Hexa Titans

👩‍💻 [Glen, Samruddhi, Stavan] – Frontend, Backend, Blockchain

👨‍💻 [Shreya, Avanti, M K Roshan Kanna] – AI/ML

📖 References

React Native Docs

Node.js Docs

MongoDB Atlas Docs

Hyperledger Fabric

TensorFlow

🏆 Acknowledgements

Built for Smart India Hackathon 2025 – Problem Statement 25149: Loan Utilization Tracking via Mobile App.

