var express = require("express");
var path = require("path");
var compression = require('compression')
var fs = require("fs");
var PORT = process.env.PORT || 5000;

var app = express();


app.use(compression());

app.get("/", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});







app.get("/category/*", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }


    res.send(data)
  });
});




app.get("/view/*", (req, res) => {


  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
      // return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "[Beta] My Dars - платформа онлайн обучения")
      .replace(/__DESCRIPTION__/g, "С помощью My Dars вы сможете легко и безопасно выбрать для себя и своих детей лучших репетиторов и обучаться с ними в удобное время онлайн. Улучшайте знания языков, точных и гуманитарных наук вместе с My Dars!");

    res.send(data)
  });
});





app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})