const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection success!");
});
//notify router
const notifyRouter = require("./routes/notifyRoutes.js");
app.use("/notify", notifyRouter);

//User router
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

//Teacher router
const teacherRouter = require("./routes/teacherRoutes.js");
app.use("/teacher", teacherRouter);

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  console.log(`Server running on port ${port}`);
});







/*const express = require("express");
const cors = require("cors");
const  mongoose = require('mongoose');
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

//notify router
const notifyRouter = require("./routes/notifyRoutes.js");
app.use("/notify", notifyRouter);

//User router
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);


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


  */
