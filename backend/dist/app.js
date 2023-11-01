import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from 'cors';
import appRouter from "./routes/index.js";
import path from "path";
config();
const app = express();
//middlewares
// Enable All CORS Requests from a Specific Origin
const corsOptions = {
    origin: 'https://talk-gpt-dep.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/api/v1", appRouter);
app.get("/", (req, res, next) => {
    res.send("Yes, You are connected");
});
// remove it in production
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "../frontend/dist")));
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname1, "..", "frontend", "dist", "index.html")));
app.use(morgan('dev'));
export default app;
//# sourceMappingURL=app.js.map