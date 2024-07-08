
import { getPostModel, addPostModel, updateLikesModel, deletePostModel } from "../models/queries.js";

export const getPostController = async (req, res) => {
    try {
        const posts = await getPostModel()
        res.status(200).json({posts: posts})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

export const addPostController = async (req, res) => {
    try {
        const {titulo, img, descripcion} = req.body
        const result = await addPostModel(titulo, img, descripcion)
        res.status(201).json({message: "Post added successfully", post: result})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
}

export const updateLikesController = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedPost = await updateLikesModel(id);
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({post: updatedPost})
    } catch (error) {
        console.error('Error incrementing likes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const deletePostController = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deletePostModel(id);
        res.status(200).send("Post deleted successfully")
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send(error.message)
    }
}
