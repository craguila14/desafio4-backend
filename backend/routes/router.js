import { Router } from "express";
import { getPostController, addPostController } from "../controllers/postsControllers.js";


const router = Router()


router.get("/posts", getPostController)

router.post("/posts", addPostController)

export default router