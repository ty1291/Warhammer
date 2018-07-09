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

// middleware to set default Content-Type
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/api/getFactionList', (req, res) => {

  // replace with real data later
  res.send([
    { name: 'Ultramarines', type: 'Loyalist' },
    { name: 'Blood Angels', type: 'Loyalist' },
    { name: 'Dark Angels', type: 'Loyalist' },
    { name: 'Imperial Fists', type: 'Loyalist' },
    { name: 'Emperor\'s Children', type: 'Traitor' }
  ]);
});

app.get('/api/getUnitList/:faction', (req, res) => {
  var faction = decodeURIComponent(req.params.faction);

  // replace with real data later
  var unitList = [
    { name: 'Primaris Intercessor', factions: ['Ultramarines', 'Blood Angels'] },
    { name: 'Primaris Aggressor', factions: ['Ultramarines', 'Blood Angels'] },
    { name: 'Primaris Reiver', factions: ['Ultramarines'] },
    { name: 'Primaris Inceptor', factions: ['Ultramarines', 'Blood Angels'] },
    { name: 'Chaos Space Marine', factions: ['Emperor\'s Children'] }
  ];

  var filteredUnitList = unitList.filter(unit => {
    return unit.factions.map((faction) => {
      return faction.toLocaleLowerCase();
    }).includes(faction);
  });

  res.send(filteredUnitList);
});

app.use( (req, res, next) => {
  res.status(404).send('Request route does not exist.');
});
