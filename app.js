const express = require('express');

const morgan = require('morgan');
const app = express();
const loanRequestRoute = require('./routes/loanRequestRoute');


app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); // adding new property to res object
  req.name = 'anurag porwal';
  next();
});

app.use(express.static(`${__dirname}/public`));

app.use('/loan', loanRequestRoute);
app.use('/', loanRequestRoute);

module.exports = app;
