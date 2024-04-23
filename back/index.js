const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

//User router
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

//Clothes router
const clothesRouter = require("./routes/clothRoutes.js");
app.use("/cloth", clothesRouter);

//store Items router
const apiRouter = require("./routes/apiRoutes.js");
app.use("/api", apiRouter);

const matchRouter = require("./routes/matchRoutes.js");
app.use("/match", matchRouter);


const initialize = async () => {
    try {
      await mongoose.connect(process.env.MONGO_CONNECT_URL);
      console.log("Mongodb connection success!");
    } catch (e) {
      console.log(e);
    }
  };
  
  const startServer = async () => {
    await initialize();
    app.listen(process.env.PORT || 5200);
    console.log('Server started');
  };
  
  startServer();