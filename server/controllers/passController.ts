// import { NextFunction } from "express";
// import { RequestBody, ScheduleResponse } from "../types";

// const bcrypt = require('bcrypt');
// const saltRounds: number = 10;

// const passController = {
//     hashPass: async (req: Request, res: ScheduleResponse, next: NextFunction) => {
//         try {
//             if (req.body && typeof req.body === 'object' && 'password' in req.body) {
//                 const reqBody = req.body as RequestBody;
//                 bcrypt.genSalt(saltRounds, (err, salt) => {
//                     bcrypt.hash(reqBody.password, salt, (err, hash) => {
    
//                     })
//                 })
//                 return next();
//             }
            
//         } catch (error) {
//             const errObj = {
//                 log: 'An unknown error occurred while trying to hash a password',
//                 status: 500,
//                 message: 'An error occurred'
//             }
//             return next(errObj);
//         }
//     }
// }

// module.exports = passController
