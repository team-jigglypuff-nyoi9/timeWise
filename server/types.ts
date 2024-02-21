export type Error = {
    log: string,
    status: number,
    message: string
}

export type RequestBody = {
    schedText: string;
    userId: string;
}