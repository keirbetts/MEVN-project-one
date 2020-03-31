require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
const router = require("./characters");

db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database!"));

server.use(express.json());
server.use(cors());

server.use("/characters", router);

server.listen(3000, () => console.log("Server Started"));
