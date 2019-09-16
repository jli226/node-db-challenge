const express = require("express");

const server = express();
server.use(express.json());

const projectRouter = require("./projects/project-router.js");
server.use("/projects", projectRouter);

// server.use('/api/projects', projectRouter);

server.get("/", (req, res) => {
  res.send("Server is working!");
});

module.exports = server;
