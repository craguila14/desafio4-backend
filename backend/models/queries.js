import pool from "../config/db.js"

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

