import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// temporarily allowing all cors requests
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
})

