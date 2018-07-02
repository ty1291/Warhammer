const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const chalk = require('chalk');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

app.listen(4210, () => {
  console.log(chalk.blue('listening on 4210...'));
});

app.get('/api/test', (req, res) => {
  res.send('Hello World');
});
