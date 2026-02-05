import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface user {
  socket: WebSocket;
  room: string;
  name: string;
}

let allsocket: user[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (event) => {
    const parsedMess = JSON.parse(event.toString());
    if (parsedMess.type === "join") {
      allsocket.push({
        socket: socket,
        room: parsedMess.payload.room,
        name: parsedMess.payload.name,
      });
    }else if(parsedMess.type === "chat") {
      let curr_room = null;
      for (let i = 0; i < allsocket.length; i++) {
        if (allsocket[i].socket === socket) {
          curr_room = allsocket[i].room;
        }
      }
      if (curr_room !== null) {
        for (let i = 0; i < allsocket.length; i++) {
          if (curr_room === allsocket[i].room) {
            allsocket[i].socket.send(
              JSON.stringify({
                type: "chat",
                payload: { message: parsedMess.payload.message , name: parsedMess.payload.name},
              })
            );
          }
        }
      }
    } else {
      console.warn("User is not part of any room.");
    }
  });
  socket.on("close", () => {
    allsocket = allsocket.filter((x) => x.socket !== socket);
  });
});