import { NextFunction } from "express";
import { RequestBody, LoginResponse } from "../types";

const db = require('../models/models.js');

const authController = {
    usernameAndPassword: async (req: Request, res: LoginResponse, next: NextFunction) => {
        try {
            if (req.body && typeof req.body === 'object' && 'username' in req.body && 'password' in req.body) {
                const reqBody = req.body as RequestBody;
                const queryObj = {
                    text: `INSERT into Users (user_id, ) VALUES ($1)`,
                    values: [reqBody.userId]
                };
                const results = db.query(queryObj);
                res.locals.loginSuccessful = results;
                res.cookie('token', req.body.username);
                return next();
            }
        } catch (error) {
            const errObj = {
                log: 'An unknown error occurred while trying to login',
                status: 500,
                message: 'An error occurred'
            }
            return next(errObj);
        }
    }
}

module.exports = authController;