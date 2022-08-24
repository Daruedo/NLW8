import express from 'express';
import cors from 'cors';
import http from 'http';
import { routes } from './routes';
import { Server } from "socket.io";

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`);
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running!");
})

export { serverHttp, io };