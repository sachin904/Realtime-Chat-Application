
import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });

interface user {
    socket: WebSocket;
    room: string;
}

const allSockets: user[] = [];
let userCount = 0;
wss.on("connection", (socket) => {
    userCount = userCount + 1;
    console.log("users connected #" + userCount);

    socket.on("message", (message) => {
        const pasrsedMessage = JSON.parse(message as unknown as string);

        if (pasrsedMessage.type === "join") {
            console.log("user joined room " + pasrsedMessage.payload.roomId);
            allSockets.push({
                socket,
                room: pasrsedMessage.payload.roomId
            })

        }

        if (pasrsedMessage.type === "chat") {
            console.log("user wanted to chat");
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                }

            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(pasrsedMessage.payload.message);
                }
            }
        }
    })

})