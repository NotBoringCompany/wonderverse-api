import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// temporarily allowing all cors requests
app.use(cors());

app.listen(5000, () => {
    console.log(`Server is running on port ${5000} 🚀`);
})

