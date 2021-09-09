const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const connect = require('./db/connect');
const http = require('http')
const cors = require("cors");
const requestsRouter = require('./routes/requests');

const app = express();;

connect.connect();


app.use(cors());

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

const buildHtml = path.resolve(__dirname, "../frontend/build/index.html");
const buildStatic = path.resolve(__dirname, "../frontend/build/");

app.use(express.static(buildStatic));

app.use('/tab', requestsRouter)

app.get("*", (_, res) => {
  res.sendFile(buildHtml);
});


app.listen(process.env.PORT|| 5000, () => {
  console.log(`Server started on port: ${process.env.PORT}`)
})

