import { NextFunction } from "express";
import { RequestBody, ScheduleResponse } from "../types";

const db = require('../models/models.js');

const scheduleController = {
    addSchedule: async (req: Request, res: ScheduleResponse, next: NextFunction) => {
        try {
            if (req.body && typeof req.body === 'object' && 'schedText' in req.body && 'userId' in req.body) {
                const reqBody = req.body as RequestBody;
                const queryObj = {
                    text: `INSERT into Schedules (sched_text, user_id) VALUES ($1, $2)`,
                    values: [reqBody.schedText, reqBody.userId]
                };
                const results = db.query(queryObj);
                res.locals.addSchedule = results;
                return next();
            }
        } catch (error) {
            const errObj = {
                log: 'An unknown error occurred while trying to add a schedule',
                status: 500,
                message: 'An error occurred'
            }
            return next(errObj);
        }
    }
};

module.exports = scheduleController;