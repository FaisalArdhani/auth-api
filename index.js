import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;

// endpoint || Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.end('Halaman Utama')
});


app.listen(port, () => {
    console.log(`server running on port ${port}`)
});