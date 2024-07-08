import { Router } from "express";
import { getPostController, addPostController, updateLikesController, deletePostController } from "../controllers/postsControllers.js";


const router = Router()


router.get("/posts", getPostController)

router.post("/posts", addPostController)

router.put("/posts/like/:id", updateLikesController
)
router.delete("/posts/:id", deletePostController)

export default router