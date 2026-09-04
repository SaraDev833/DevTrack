import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']); 
import AuthRoute from "./routes/AuthRoute.js"
import cors from "cors"

import express from  "express"
import mongoose from "mongoose"
import connectDB from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()


const app = express()
const port = 3000
// middleware
app.use(cors());
app.use(express.json())



connectDB();

// routes
app.use("/api/auth" , AuthRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})