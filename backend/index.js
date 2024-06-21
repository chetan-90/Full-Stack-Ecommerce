const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const router = require('./routes')
require('dotenv').config()

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser())




app.use("/api",router)

const PORT =  8080 || process.env.PORT

app.get("/", (req, res)=>{
    
    res.send("hello");
})


connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is running on 8080");
    })
}).catch((err) => {
    console.log("error is - ", err);
})


