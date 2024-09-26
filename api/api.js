import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
const app = express();
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import { login } from "./controllers/auth.controller.js";

import bodyParser from "body-parser";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174", // allow the React frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // specify the allowed HTTP methods
    credentials: true, // if you need to send cookies or authorization headers
  },
});

app.use(
  cors({
    origin: "http://localhost:5174", // allow the React frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // specify the allowed HTTP methods
    credentials: true, // if you need to send cookies or authorization headers
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

console.log("mine");
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

const user = false;
io.use((socket, next) => {
  if (login) next();
});

io.on("connection", (socket) => {
  console.log(`User_Connected_${socket.id}`);

  //socket.emit("Welcome", `welcome to server ${socket.id}`);
  socket.on("sendMessage", (message) => {
    console.log(message, socket.id);

    // socket.broadcast.emit("receiveMessage", message);
    //
    socket.broadcast.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log(`User_disconnected ${socket.id}`);
  });
});

app.use("/api/work", (req, res) => {
  res.send("i am working");
});

server.listen(3000, () => {
  console.log("server is running 3000");
});
