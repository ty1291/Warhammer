const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const chalk = require('chalk');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

const server = app.listen(4210, '127.0.0.1', () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(chalk.blue('Listening at http://%s:%s'), host, port);
});

app.get('/api/test', (req, res) => {
  res.send('Hello World');
});

app.use( (req, res, next) => {
  res.status(404).send('Request route does not exist.');
});
