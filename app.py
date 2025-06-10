# pylint: disable=missing-module-docstring
# pylint: disable=missing-function-docstring

import threading
import socket

from flask import Flask, jsonify, send_from_directory
from flask_socketio import SocketIO, emit

app = Flask(__name__, static_folder="static")
socketio = SocketIO(app, cors_allowed_origins="*")


def run_socket_server():
    host = "0.0.0.0"
    port = 12345
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_sock:
        server_sock.bind((host, port))
        server_sock.listen()
        print("✅ Socket server running on port 12345")
        while True:
            conn, addr = server_sock.accept()
            with conn:
                print(f"🔌 Connection from {addr}")
                conn.sendall(b"Switch connection OK")


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/status")
def status():
    try:
        with socket.create_connection(("127.0.0.1", 12345), timeout=2) as s:
            msg = s.recv(1024).decode()
        return jsonify({"ok": True, "message": f"✅ {msg}"})
    except (socket.error, OSError) as e:
        return jsonify({"ok": False, "message": f"❌ Connection failed: {e}"})


@socketio.on("chat_message")
def handle_chat_message(message):
    print("📩 Received:", message)
    emit("chat_message", message, broadcast=True)


if __name__ == "__main__":
    threading.Thread(target=run_socket_server, daemon=True).start()
    socketio.run(app, host="0.0.0.0", port=5000)
