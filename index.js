//variables || import || require
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const { createServer } = require("http");
const server = createServer(app);
const cors = require("cors");

app.use(cors({
    origin:process.env.client,
    methods: ["GET", "POST"],
}));

const port = process.env.PORT || 9000;

mongoose
    .connect(`mongodb+srv://${process.env.DB}@database.4wfi2ky.mongodb.net/booking`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes 
const routesRoom = require("./routes/room");
const routesUser = require("./routes/user");
const routesSchedule = require("./routes/schedule");

app.use("/room", routesRoom);
app.use("/user",routesUser)
app.use("/schedule",routesSchedule)

app.get("/", (req, res) => {
    res.send("<style>body { background-color:rgb(10,40,10)}</style>");
});

server.listen(port);
