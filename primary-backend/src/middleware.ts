import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./conig";
import Jwt, { JwtPayload }  from "jsonwebtoken";

declare module 'express-serve-static-core' {
    interface Request {
        id?: number;
    }
}

export const authmiddleware = (req : Request , res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message: "token missing"
        })
    }
    try{
        const payload = Jwt.verify(token, JWT_SECRET);
        req.id = (payload as JwtPayload).id;
        next();

    }catch(e){
        return res.status(401).json({
            message: "Not logged in"
        })
    }
}
