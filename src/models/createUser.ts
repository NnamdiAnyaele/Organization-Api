import mongoose from 'mongoose';

interface userType  {
    organization: string,
    createdAt: Date, 
    updatedAt: Date, 
    products: string[], 
    marketValue: string,
    address: string,
    ceo: string,
    country: string, 
    id: number,
    noOfEmployees: number, 
    employees:string[] 
  }
  
  const userSchema = new mongoose.Schema<userType>({
    organization: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type : Date,
      default: Date.now()
    }, 
    updatedAt: {
      type : Date,
      default: Date.now()
    }, 
    products: [String], 
    marketValue: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true,
      unique: true,
    },
    ceo: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true
    },
    noOfEmployees: {
      type : Number,
      required : true
    } , 
    employees:[String] 
  
  })
  
  const User = mongoose.model('User', userSchema)
  
  async function createUser(body: Record<string, any>) {
      try {
          const {organization, products, marketValue, address, ceo, country, noOfEmployees, employees} = await body;
          const user = new User ({
              organization : organization,
              createdAt: Date.now(),
              updatedAt: Date.now(),
              products: products,
              marketValue: marketValue,
              address: address,
              ceo: ceo,
              country: country,
              noOfEmployees: noOfEmployees,
              employees: employees
          })
          const result = await user.save()
          console.log(result)
          return result    
      } catch (error) {
        console.log(error)
      }
  }

  export {User, createUser}