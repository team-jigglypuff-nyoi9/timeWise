const path = require('path');
const express = require('express');
import { Request, Response } from 'express';

type Error = {
    log: string,
    status: number,
    message: string
}

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../dist')));

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
