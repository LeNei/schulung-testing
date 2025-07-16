import express from "express";
import { router } from "./routes";

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json());

api.use("/", router);
export { api };
