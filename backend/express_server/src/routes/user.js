import {Router} from "express";
import userModel from '../models/user'
const user = Router()

user.get('/', async (req, res) => {
    const result = await userModel.findAll()
    res.json(result)
})
//
// user.get('/:id', async (req, res) => {
//     const result = await user.findById()
//     res.json(result)
// })

export default user


