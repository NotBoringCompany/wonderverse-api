import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = parseInt(process.env.TS_PORT!) || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// temporarily allowing all cors requests
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀`);
})

