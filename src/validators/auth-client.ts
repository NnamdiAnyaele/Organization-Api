import mongoose from 'mongoose';
import {Client} from '../database/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function auth(body:Record <string, any>) {
    try {
        const {username, password} = await body;
        const client = await Client.findOne({username})
        if(!client) return;
        const validPassword = await bcrypt.compare(password, client.password)
        if(!validPassword) return;
        const token = jwt.sign({_id: client._id}, 'myprivatekey')
        return {client: client,token: token}
    } catch (error) {
        console.log(error)
    }
} 

export {auth}