const dotenv = require("dotenv");

// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config();

module.exports.getEnvVars = () => ({
  JWT_SECRET: process.env.JWT_SECRET,
});
