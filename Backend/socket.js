const socketIo = require("socket.io");
const userModel = require("./models/userModel");
const captainModel = require("./models/captainModel");

let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`client connected: ${socket.id}`);

    socket.on("update-location-captain", async (data) => {
      const { captainId, location } = data;
      if (!captainId || !location || !location.ltd || !location.lng) {
        console.log("Invalid data for updating captain location");
        return socket.emit("error", {
          message: "Invalid data for updating captain location",
        });
      }
      try {
        await captainModel.findByIdAndUpdate(captainId, {
          location: { ltd: location.ltd, lng: location.lng },
        });
      } catch (err) {
        console.log("Error updating captain location:", err.message);
      }
    });

    socket.on("join", async (data) => {
      const { userId, userType } = data;

      try {
        if (userType == "user") {
          const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true },
          );
          console.log("User updated:", updatedUser);
        } else if (userType == "captain") {
          const updatedCaptain = await captainModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true },
          );
          console.log("Captain updated:", updatedCaptain);
        }
      } catch (err) {
        console.log("Error updating socketId:", err.message);
      }
    });

    socket.on("disconnect", () => {
      console.log(`client disconnected: ${socket.id}`);
    });
  });
}

function sendMessageToSocketId(socketId, messageObject) {
  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log("Socket.io is not initialized");
  }
}

module.exports = { initializeSocket, sendMessageToSocketId };
