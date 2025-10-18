const sokert = require("socket.io");
const crypto = require("crypto");
const { get } = require("http");


const getSecretRoomId=(userId,targetUserId)=>{
 return  crypto.createHash('sha256').update([userId, targetUserId].sort().join("$")).digest('hex');
}

const initializeSocket = (server) => {
  const io = sokert(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    socket.on("Join Chat", ({ firstName, userId, targetUserId }) => {
      const roomId = getSecretRoomId(userId, targetUserId);

      socket.join(roomId);
    });
    socket.on("sendMessage", ({ firstName, userId, targetUserId, text }) => {
      const roomId = getSecretRoomId(userId, targetUserId);
      
      io.to(roomId).emit("receiveMessage", { firstName, text });
    });
    socket.on("disconnect", () => {});
  });
};

module.exports = initializeSocket;
