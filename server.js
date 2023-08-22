const express = require("express");
const router = require.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Runnig"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


router.post()