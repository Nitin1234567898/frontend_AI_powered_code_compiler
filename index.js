//Importing necessary modules 
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const openaiRoutes = require("./routes/openaiRoutes");

//Setting up express app
const app = express();
dotenv.config({});
const PORT = process.env.PORT;
//Middlewares setup
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true,
}))
app.use(express.json());

// app.use("/authentication", userRoutes);
//app.use("/folder", fileRoutes);
// app.use("/api/openai", openaiRoutes);


app.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}`)
})
