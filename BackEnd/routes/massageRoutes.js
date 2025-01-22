import express from "express";
import { getMassages, sendMessage } from "../Controllers/massageController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id",protectRoute,getMassages);

router.post("/send/:id",protectRoute,sendMessage);


export default router; 