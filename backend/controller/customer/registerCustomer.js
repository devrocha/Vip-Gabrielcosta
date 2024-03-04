import { saveCustomer } from "../../services/customerService.js";

export async function createCustomer(req, res) {
    try {
        const newCustomer = {
            ...req.body,
            createAt: new Date(),
            updateAt: new Date()
        }

        const customer = await saveCustomer(newCustomer)

        res.json(customer)
    } catch (error) {
        res.json({ erro: error.message })
    }
}