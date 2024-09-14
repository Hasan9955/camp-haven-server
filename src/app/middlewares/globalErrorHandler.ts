import { ErrorRequestHandler } from "express";



const globalErrorHandler: ErrorRequestHandler = async (error, req, res, next) => {
    let status = error.status ? error.status : 500;
    let message = error.message ? error.message : 'Something went wrong globally!'


    res.status(status).json({
        success: false,
        status: status,
        message,
        error
    })
}


export default globalErrorHandler;