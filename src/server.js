require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(errorHandler);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

// 192.168.0.156
// 192.168.0.156
// http://192.168.5.2:5000/user/register
// user_name: input.value
// phone: input.value
// email: input.value
// password: input.value
// {
// 	user_name : input.value
// 	phone: input.value
// 	email: input.value
// 	password: input.value
// }
// http://192.168.5.2:5000/user/login
// email: input.value
// password: input.value

// http://192.168.5.211:5000/todo

// http://192.168.5.211:5000/todo/1

// JSON.stringify({text:value})

// Authorization

// npm i
// npm run start

// http://192.168.8.87:5000/todo

// http://192.168.5.2:5000/todo
