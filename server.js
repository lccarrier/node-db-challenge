const express = require("express");
const ProjectRouter = require("./projects/projectRouter.js");
const server = express();
server.use(express.json());
server.use("/projects", ProjectRouter);

server.get("/", (req, res) => {
    res.status(200).send(`Yolo!`);
});

module.exports = server;
