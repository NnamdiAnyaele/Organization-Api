
import {User} from './createUser'


async function getAllUsers (pageNumber: number) {
  try {
    const pageSize = 5;
    const totalDocument = await User.countDocuments()

    const previous = pageNumber - 1 <= 0 ? null : pageNumber - 1;
    const next = pageNumber + 1 >= totalDocument ? null : pageNumber + 1; 

    const users = await User.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize)
    
    return {
      previous: previous,
      next: next,
      users: users
    }
  } catch (error) {
    console.log(error)
  }
  }

async function getUser (userId: string) {
  try {
    const user = await User.findById(userId)
    return user;
    
  } catch (error) {
    console.log(error)
  }
}
  
export { getAllUsers, getUser }