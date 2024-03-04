import { CustomerModel } from '../model/customerModel.js'

export async function saveCustomer(data){
    try {
        const customer = await CustomerModel.create(data)

        return customer
    } catch (error) {
       throw Error(error) 
    }
}