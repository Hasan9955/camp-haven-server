import { NextFunction, Request, Response } from "express";


const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: 'Api not found!',
        error: ''
    })
}


export default notFound;