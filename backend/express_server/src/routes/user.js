import {Router} from "express";
import userModel from '../models/user'
const user = Router()

user.get('/', async (req, res) => {
    const result = await userModel.findAll()
    res.json(result)
})

user.post('/registration', async (req, res) => {
    const result = await userModel.addNewUser(req.body)
    res.json(result)
})

user.post('/login', async (req, res) => {
    const result = await userModel.login(req.body)
    if (result.status === 'success') {
        res.json({status: 'success', nickname: result.message})
    } else {
        res.json("login failed")
    }
})


export default user


