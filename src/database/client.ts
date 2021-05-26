import mongoose from 'mongoose';

interface clientType  {
    username: string,
    email: string,
    password: string,
    token?: string
  }
  
  const clientSchema = new mongoose.Schema<clientType>({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token : {
        type: String
    }
  })

  
  const Client = mongoose.model('Client', clientSchema)

  export {Client, clientType}