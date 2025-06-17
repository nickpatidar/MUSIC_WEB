import express from "express";
import upload from "../middlewares/multer.js";
import { addSong, listSong, removeSong } from "../controllers/songController.js";

const songRouter = express.Router();

songRouter.post("/add",upload.fields([{ name: "audio", maxCount: 1 },{ name: "image", maxCount: 1 }]), addSong);
songRouter.get("/list",listSong);
songRouter.post("/remove", removeSong);

export default songRouter;