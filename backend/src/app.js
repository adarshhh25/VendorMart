import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import mongoConnect from './db.js' 

dotenv.config();
const app = express()

const URI = process.env.MONGO_URI;
mongoConnect(URI);

app.use(cors({
  origin: '*',       // allow any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


import orderRouter from './routes/order.js'
import groupRouter from './routes/grouping.js'

app.use('/api', orderRouter);
app.use("/api/group-and-match", groupRouter);

app.get('/api/content' (req))

app.listen(3000, () => {
    console.log(`Server Running on Port: http://localhost:3000`)
})