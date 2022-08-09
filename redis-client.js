const Redis = require("ioredis");
const redis = new Redis({
  host: "redis-16315.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  port: 16315,
  username: "default",
  password: "Vtbd4k5bORw29XQxNop8M226P2LyHM29",
});
module.exports = redis;
