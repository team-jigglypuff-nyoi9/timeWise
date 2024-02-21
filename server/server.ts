const path = require('path');
const express = require('express');
import { Request, Response, NextFunction } from 'express';
import { Error } from './types';
const scheduleController = require('./controllers/scheduleController');
const authController = require('./controllers/authController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`
      🙏🙏🙏🙏🙏🙏🙏🙏
      FLOW CHECK \n
      URL: ${req.url}\n
      METHOD: ${req.method}
      `);
    return next();
  });

app.post('/schedule', scheduleController.addSchedule, (req: Request, res: Response)=> {
    return res.status(200);
});

app.post('/login', authController.usernameAndPassword, (req: Request, res: Response) => {
    return res.status(200);
})

// Catch All Handler
app.use('*', (req: Request, res: Response) => {
    res.status(404).send('Page Not Found');
});

// GLOBAL ERROR HANDLER 
app.use((err: Error, req: Request, res: Response) => {
    const defaultErr: Error = {
        log: 'Global err handler, unkonwn middleware error',
        status: 500,
        message: 'Unknown server error. Please try again'
    };
    const errObj = Object.assign({}, defaultErr, err);
    return res.status(errObj.status).json(errObj.message);
});

const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = server;
