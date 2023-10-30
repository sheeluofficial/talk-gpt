import express from "express";
import { config } from "dotenv";
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from 'cors';
import appRouter from "./routes/index.js";
config();
const app = express();
//middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", appRouter);
app.get("/", (req, res, next) => {
    res.send("Yes, You are connected");
});
//remove it in production
app.use(morgan('dev'));
export default app;
//# sourceMappingURL=app.js.map