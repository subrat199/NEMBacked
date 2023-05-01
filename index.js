const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/userRouter");

const app = express();

require("dotenv").config();

app.use(express.json());
 
app.use("/users",userRouter)


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Server listening on port " + process.env.PORT);
});
