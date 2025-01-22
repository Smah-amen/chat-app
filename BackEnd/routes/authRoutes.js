import express from "express";
import { login, logout, signup } from "../Controllers/authControllers.js";
const router = express.Router();

router.get("/signup", signup);

router.post("/signup", signup);
router.get("/login" , login);
router.post("/login", login);

router.get("/logout", logout);
router.post("/logout", logout);





export default router;
