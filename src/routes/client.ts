import express, { Request, Response, NextFunction } from "express";
import { Client } from '../database/client';
import { validateClient} from '../validators/client';
import {registerClient} from '../models/registerClient';
import {auth} from '../validators/auth-client'

var router = express.Router();

/* GET home page. */
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const { error } = validateClient(body)
    if(error) {return res.status(400).send(error.details[0].message)}
    const result = await auth(body)
    if(!result) {
      return res.status(400).send("Invalid username or password")
    }
    const {client, token} = result;
    res.header('x-auth-token', token)
    res.status(200).json({user: client})
  } catch (error) {
    
  }
});

router.post('/register', async(req: Request , res: Response) => {
  try {
    const body = req.body;
    const { error } = validateClient(body)
    if(error) {return res.status(400).send(error.details[0].message)}
    const client = await registerClient(body)
    if(!client) {return res.status(400).send("user already exists")}
    res.status(201).json({user: client})
  } catch (error) {
    res.status(500).send("operation failed, try again")
  }
})

export default router