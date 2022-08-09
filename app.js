const express = require("express");
const redis = require("./redis-client");
const app = express();

app.get("/", async function (req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("ip: " + ip);
  res.send("Hello World");
  const response = await redis.incr("counter1");
  console.log(response);
});

app.listen(3000);
