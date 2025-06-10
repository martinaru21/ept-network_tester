# Network Tester Chat App (Python + Flask-SocketIO)

This project turns your Mini PC into a live interactive LAN-based chat system for demos, like career fairs or classroom workshops.

It includes:
- A Flask app with a SocketIO-powered WebSocket server
- A Material Design-inspired chat UI using HTML, JS, and CSS
- A simulated network connectivity check via a TCP socket

---

## 🔧 Installation Guide (Ubuntu Mini PC)

### 1. Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Install Python & Tools
```bash
sudo apt install python3 python3-pip python3-venv -y
```

### 3. Unzip or Clone the Project
```bash
unzip network_tester_chat.zip
cd network_tester_chat
```

### 4. Set Up Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate
```

### 5. Install Required Python Packages
```bash
pip install flask flask-socketio eventlet
```

### 6. Run the App
```bash
python app.py
```

### 7. Find Local IP (to connect other devices)
```bash
hostname -I
```

Use this IP to access the chat from other devices:
```
http://<your-ip>:5000
```

### 8. (Optional) Open Firewall Ports
```bash
sudo ufw allow 5000
sudo ufw allow 12345
```

---

## ✅ Features

- Real-time LAN chat via WebSockets
- Material Design chat UI
- TCP-based switch connection check
- Works across PCs and phones on same network

---

## 🧠 Future Ideas

- Add usernames
- Per-device chat rooms
- Server logs of activity
- Exportable message history

---

## 📁 Folder Structure

```
network_tester_chat/
├── app.py
├── static/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── venv/ (created locally)
```

---

Happy chatting!
