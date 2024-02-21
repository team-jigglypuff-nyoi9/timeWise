import 'express';

export type Error = {
    log: string;
    status: number;
    message: string;
}

export type RequestBody = {
    schedText?: string;
    userId?: string;
    password?: string;
}

export interface Locals {
    message?: string;
    addSchedule? : any;
    loginSuccessful?: any;
}

export interface ScheduleResponse extends Response {
    locals: Locals;
}

export interface LoginResponse extends Response  {
    locals: Locals;
    cookie: any;
}