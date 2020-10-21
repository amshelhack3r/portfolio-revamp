const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const winston = require('winston');
const mongoose = require('mongoose')

require('dotenv').config();

//create an express app
const app = express();

//parsing data
//parse body
app.use(express.json()) // for parsing application /json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//setup middlewares
app.use(cors());
app.use(helmet())

//register routes
app.use('/', require('./lib/routes.js'));

mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ds147225.mlab.com:47225/portfolio`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(val=>console.log("Connected to mongo database"))
  .catch(err=>console.error(err))



let PORT= (process.env.NODE_ENV =='production')?process.env.PORT:8080

//setup a logger 
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
      logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }));
    }
  

//listen to port 
app.listen(PORT, ()=>{
    console.log(`Connection listening on port ${PORT}`);
    
})