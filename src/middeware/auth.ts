import express, { Request, Response, NextFunction } from "express";
import { Client } from "../database/client"
import jwt from 'jsonwebtoken';

async function auth (req: Request, res: Response, next: NextFunction) {
    const token = req.header ("x-auth-token")
    if (!token) return res.status(401).send("Access denied, no token provided")
    try {
        const decoded = <any>jwt.verify(token, "myprivatekey")
        const client = await Client.findById(decoded.id)
        req.client = client;
        next()
    } catch (error) {
        res.status(400).send("invalid token")
    }
}

export {auth}