import {pool} from "../config/db.js"

export const getPostModel = async () => {
    const sql = 'SELECT * FROM posts';
    const result = await pool.query(sql)
    return result.rows
}

export const addPostModel = async(titulo, img, descripcion) => {
    const sql = 'INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)';
    const values = [titulo, img, descripcion]
    const result = await pool.query(sql, values)
    return result.rows;

}

export const updateLikesModel = async(id) => {
    try {
        const sql = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(sql, values);
        return result.rows[0]
    } catch (error) {
        throw error
    }
}

export const deletePostModel = async(id) => {
    try {
        const sql = 'DELETE FROM posts WHERE id = $1 RETURNING *'
        const values = [id]
        const response = await pool.query(sql, values);
        if (response.rowCount > 0) {
            return response.rows
        }
    } catch (error) {
        console.log(error)
    }
}