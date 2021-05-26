import mongoose from 'mongoose';
import {User} from './createUser'


async function updateUser(id: string, body: Record<string, any>) {
    try {
        const {organization, products, marketValue, address, ceo, country, noOfEmployees, employees} = await body;
        const user = await User.findById(id);
        if (!user) return;
        user.organization = organization || user.orgnization;
        user.updatedAt = Date.now();
        user.products = products || user.product;
        user.marketValue = marketValue || user.marketValue;
        user.address = address || user.product;
        user.ceo = ceo || user.ceo;
        user.country = country || user.country;
        user.noOfEmployees  = noOfEmployees || user.noOfEmployees;
        user.employees  = employees || user.employees;

        const result = await user.save();
        return result
    } catch (error) {
      console.log(error)
    }
}


export {updateUser}