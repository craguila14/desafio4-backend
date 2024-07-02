import express from 'express';
import cors from 'cors';
import router from './routes/router.js'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend/index.html')));

app.use(express.json())
app.use(cors())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`🔥 Server on 🔥 http://localhost:${PORT}`)
});