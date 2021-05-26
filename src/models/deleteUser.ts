import {User} from './createUser'

async function deleteUser (id: string) {
    try {
        let user = await User.findById(id);
        if (!user) {user = "not found"; return user}
        user = await User.findByIdAndRemove(id)
        return user
        
    } catch (error) {
        console.log(error)
    }
}

export {deleteUser}