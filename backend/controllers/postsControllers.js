
import { getPostModel, addPostModel } from "../models/queries.js";

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