import { NextFunction } from "express";
import { RequestBody } from "../types";

const db = require('../models/models.js');

const authController = {
    usernameAndPassword: async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (req.body && typeof req.body === 'object' && 'username' in req.body && 'password' in req.body) {
                const reqBody = req.body as RequestBody;
                const queryObj = {
                    text: `INSERT into Users (user_id, ) VALUES ($1, $2)`,
                    values: [reqBody.user_id, reqBody.]
                };
                const results = db.query(queryObj);
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