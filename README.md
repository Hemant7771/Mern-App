# MERN First App 🚀

This is a basic MERN stack application developed as part of my internship first task.  
The project demonstrates the integration of a React frontend with a Node.js + Express backend API connected to MongoDB.

## 📌 Project Overview

The application fetches student data from a backend API and displays it on the frontend using React.  
It helps in understanding the complete flow of a MERN stack application.
- Used reusable Card component and props to display data
- Implemented basic CRUD API (GET, POST)

## 🛠 Tech Stack

**Frontend**
- React.js
- Axios
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

## ✨ Features

- React component-based frontend
- REST API using Express
- MongoDB database integration
- Data fetched from backend and displayed on UI
- Clean and simple UI with basic styling

## 📂 Project Structure

mern-first-app/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── StudentList.js
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
│
├── backend/
│ ├── server.js
│ └── package.json
│
└── README.md

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository
```bash
git clone "https://github.com/USERNAME/mern-first-app.git"

### 2️⃣ Run Backend
cd backend
npm install
node server.js

Backend will run on:
http://localhost:5000

3️⃣ Run Frontend
cd frontend
npm install
npm start

Frontend will run on:
http://localhost:3000
