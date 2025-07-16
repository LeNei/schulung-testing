import { Router } from "express";
import { index, users, userById } from "./controller";

const router = Router();

router.get("/", index);
router.get("/users", users);
router.get("/users/:id", userById);

export { router };
