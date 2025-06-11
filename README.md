# 🔧 Network Chat Tester

A simple network chat + status checker built with Flask and Flask-SocketIO. Designed for testing local connections between multiple devices.

## ✅ Features

-   Real-time chat via WebSockets (Socket.IO)
-   Username prompt (saved in local storage)
-   Switch status check via `/status`
-   Responsive UI for desktop and mobile

---

## 💻 Requirements

-   Python 3.9+
-   pip
-   (Recommended) Virtual environment

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/network-tester.git
cd network-tester
```

### 2. Create and activate a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is missing, use:

```bash
pip install flask flask-socketio
```

---

## 🚀 Running the app

```bash
python app.py
```

This will:

-   Start the Flask + SocketIO chat server on `http://<ip>:5000`
-   Start a background TCP socket server on port `12345` for switch status

---

## 🌐 Accessing the app

### On the server machine:

-   Open `http://localhost:5000` in a browser

### From other devices (clients):

1. Make sure all devices are connected to the same local network.
2. Get the IP of the server machine:

```bash
ip a
```

3. Open in browser:

```
http://<SERVER_IP>:5000
```

---

## 🔄 Files and Structure

```
network-tester/
├── app.py               # Main Flask + socket server
├── static/
│   ├── index.html       # Chat UI
│   ├── status.html      # Network status page
│   ├── script.js        # Frontend logic
│   └── style.css        # Custom styles
└── requirements.txt     # Python dependencies
```

---

## 🧪 Testing

-   On browser, enter a username when prompted
-   Chat in real time across multiple devices
-   Click "Test Network Status" to check switch connection via TCP

---

## 🛑 Common Issues

-   **Port already in use:** Run `lsof -i :12345` or `:5000` and kill the blocking process.
-   **Firewall blocks:** Make sure port 5000 and 12345 are open on the server.
-   **CORS errors:** Avoid HTTPS if you're running locally.

---

## 📦 To add dependencies later

```bash
pip install <package-name>
pip freeze > requirements.txt
```

---

## 📜 License

FACET License © Martina Rubio
