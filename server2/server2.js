const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const app = express();

// Erstellen des HTTP-Servers mit express
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('WebSocket Server 2');
});

// Initialisieren des WebSocket-Servers
const wss = new WebSocket.Server({
    server,
    path: '/v1/update-status'
});

wss.on('connection', (ws) => {
    console.log('Client connected to server 2');

    // Funktion zum Senden der Nachrichten
    const sendMessages = () => {
        const messages = [
            { type: "INFO", data: "update not_running" },
            { type: "PROGRESS", data: 0 }
        ];

        messages.forEach((message) => {
            ws.send(JSON.stringify(message));
        });
    };

    // Senden der Nachrichten beim Verbindungsaufbau
    sendMessages();

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        let msg;
        try {
            msg = JSON.parse(message);
        } catch (e) {
            console.log('Error parsing message');
            return;
        }

        // Hier kommt die Logik zur Verarbeitung verschiedener Nachrichten
        switch (msg.topic) {
            // Implementierung der Logik für verschiedene Nachrichtentypen
            // Fügen Sie hier cases für andere Nachrichten-Topics hinzu
            default:
                console.log(`Unsupported message topic: ${msg.topic}`);
                break;
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected from server 2');
    });
});

// Starten des Servers
server.listen(8080, () => {
    console.log('Server 2 running on http://127.0.0.1:8080');
});

