const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: '/websocket/app' });

wss.on('connection', (ws) => {
  console.log('Client connected');
  const sendStatus = () => {
    const message = {
      topic: "STATUS",
      data: {
        send_time: Date.now() / 1000,
        frame_counter_TwFoV: 977,
        frame_counter_TnFoV: 977,
        frame_counter_RGBwFoV: 977,
        frame_counter_RGBnFoV: 977,
        objects: [],
        camera: {
          pan: 2.9600000381469727,
          tilt: -0.019999999552965164
        },
        imu: {
          roll: -0.045466214418411255,
          pitch: 0.028890512883663177,
          yaw: -79.63822937011719
        },
        alarms: [],
        distance_alarm: false,
        worker_beziers: [
          // Beziers data omitted for brevity
        ],
        timestamp1: 1018755000,
        boatbus_timestamp: 0
      }
    };
    ws.send(JSON.stringify(message));
  };
  const interval = setInterval(sendStatus, 5000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

// Simple video stream endpoint
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  const command = ffmpeg()
    .input('color=c=green:s=640x480:d=99999')
    .inputFormat('lavfi')
    .on('error', (err) => console.log('An error occurred: ' + err.message))
    .on('end', () => console.log('Streaming finished'))
    .videoCodec('libx264')
    .noAudio()
    .format('mp4')
    .pipe(res, { end: true });

  req.on('close', () => {
    command.kill('SIGKILL');
  });
});

app.get("/ping",(req,res)=>{
    res.json(true);
})

server.listen(9002, () => {
  console.log('Server running on http://127.0.0.1:9002');
});

