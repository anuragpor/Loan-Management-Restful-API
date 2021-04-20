const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB, {  // these are some option to deal with deprecation warning
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => { 
  console.log("DB connection established");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
     
