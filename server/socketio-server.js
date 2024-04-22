// Load required modules
const http = require("http"); // http server core module
const path = require("path");
const express = require("express"); // web framework external module
 
// Set process name
process.title = "networked-aframe-server";
 
// Get port or default to 8080
const port = process.env.PORT || 7000;
 
// Setup and configure Express http server.
const app = express();
 
// Serve the bundle in-memory in development (needs to be before the express.static)
if (process.env.NODE_ENV === "development") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const config = require("../webpack.config");
 
  app.use(
    webpackMiddleware(webpack(config), {
      publicPath: "/dist/"
    })
  );
}
 
// Serve the files from the examples folder
app.use(express.static(path.resolve(__dirname, "..", "examples")));
 
// Start Express http server
const webServer = http.createServer(app);
const io = require("socket.io")(webServer);
 
const rooms = {};
 
io.on("connection", socket => {
  console.log("user connected", socket.id);
 
  socket.on("joinRoom", data => {
    let { room } = data;
 
    if (!rooms[room] || Object.keys(rooms[room].occupants).length >= 3) {
      // If the room doesn't exist or is full, find an available room
      let availableRoom = null;
      for (const [roomName, roomData] of Object.entries(rooms)) {
        if (Object.keys(roomData.occupants).length < 3) {
          availableRoom = roomName;
          break;
        }
      }
 
      if (availableRoom) {
        // If an available room is found, join it
        room = availableRoom;
        socket.join(room);
        rooms[room].occupants[socket.id] = Date.now();
        console.log(`${socket.id} joined room ${room}`);
      } else {
        // If no available room is found, create a new one
        const newRoomNumber = Object.keys(rooms).length + 1;
        room = `basic-room-${newRoomNumber}`;
        rooms[room] = {
          name: room,
          occupants: {},
        };
        socket.join(room);
        rooms[room].occupants[socket.id] = Date.now();
        console.log(`${socket.id} joined room ${room}`);
      }
    } else {
      // If the requested room exists and has available space, join it
      socket.join(room);
      rooms[room].occupants[socket.id] = Date.now();
      console.log(`${socket.id} joined room ${room}`);
    }
 
    // Emit success message to the joined user
    socket.emit("connectSuccess", { joinedTime: Date.now() });
 
    // Broadcast to the room that occupants have changed
    const occupants = rooms[room].occupants;
    io.in(room).emit("occupantsChanged", { occupants });
  });
 
  socket.on("send", data => {
    io.to(data.to).emit("send", data);
  });
 
  socket.on("broadcast", data => {
    socket.to(data.room).broadcast.emit("broadcast", data);
  });
 
  socket.on("disconnect", () => {
    console.log('disconnected: ', socket.id);
    for (const roomName of Object.keys(rooms)) {
      if (rooms[roomName].occupants[socket.id]) {
        delete rooms[roomName].occupants[socket.id];
        const occupants = rooms[roomName].occupants;
        socket.to(roomName).broadcast.emit("occupantsChanged", { occupants });
 
        if (Object.keys(occupants).length === 0) {
          console.log("everybody left room", roomName);
          delete rooms[roomName];
        }
        break;
      }
    }
  });
});
 
webServer.listen(port, () => {
  console.log("listening on http://localhost:" + port);
});