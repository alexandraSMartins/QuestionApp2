import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import questionsRoute from "./routes/questions.js";

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/questions", questionsRoute);

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Start listening to port
app.listen(process.env.PORT || 3005);
