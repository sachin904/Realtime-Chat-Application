# Realtime Chat Application

This is a **Realtime Chat Application** built using **React.js** for the frontend and **WebSockets** for real-time communication. Users can join rooms and send messages instantly.

## 🚀 Features

- Real-time messaging using WebSockets
- Join specific chat rooms
- Simple and clean UI with Tailwind CSS
- Persistent connection with WebSocket server

## 🛠️ Tech Stack

- **Frontend:** React.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, WebSocket

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sachin904/Realtime-Chat-Application.git
cd Realtime-Chat-Application
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Frontend
```sh
npm run dev
```

### 4️⃣ Start the WebSocket Server
_(Ensure that you have a WebSocket server running at `ws://localhost:8080`)_

```sh
node server.js  # If you have a WebSocket server file
```


## 🚀 Usage
1. Open the application in your browser.
2. Join a chat room by sending a `roomId`.
3. Start sending messages in real-time!

## 🛠️ Project Structure
```
📂 Realtime-Chat-Application
├── 📁 src
│   ├── 📄 App.tsx  # Main React component
│   ├── 📄 index.tsx # Entry point
│   ├── 📁 components  # UI Components (if any)
├── 📄 package.json
├── 📄 README.md
└── 📄 server.js (if applicable)
```



## 💡 Contributing
Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.



Happy coding! 🚀
