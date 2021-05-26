import mongoose from 'mongoose';
import {Client} from '../database/client';
import bcrypt from 'bcrypt';

async function registerClient (body: Record<string, any>) {
    try {
        const {username, email, password} = await body;
        let client = await Client.findOne({username: username})
        if (client) {return}
        client = new Client({
            username: username,
            email: email,
            password: password
        })
        const salt = await bcrypt.genSalt(10);
        client.password = await bcrypt.hash(client.password, salt)
        const result = await client.save()
        return result  
    } catch (error) {
        console.log(error)
    }
}

export {registerClient}