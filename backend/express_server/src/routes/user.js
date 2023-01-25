import {Router} from "express";
import userModel from '../models/user'

const user = Router()
const expiresInMinutes = 30;


user.get('/', async (req, res) => {
    const result = await userModel.findAll()
    res.json(result)
})

user.post('/registration', async (req, res) => {
    const result = await userModel.addNewUser(req.body)
    if (result.status === 'success') {
        res.cookie('isLoggedIn', true, {
            expires: expiresTime,
            httpOnly: true,
        });
        res.json({status: 'success', nickname: result.message})

    } else {
        res.json("login failed")
    }
})

user.post('/login', async (req, res) => {
    const result = await userModel.login(req.body)
    if (result.status === 'success') {
        res.cookie('isLoggedIn', true, {
            expires: new Date(Date.now() + expiresInMinutes * 60000),
            httpOnly: true,
        });

        res.cookie('nickname', result.message, {
            expires: new Date(Date.now() + expiresInMinutes * 60000),
            httpOnly: true
        });
        res.json({status: 'success', nickname: result.message})

    } else {
        res.json("login failed")
    }
})

user.get('/check-cookie', async (req, res) => {
    if (req.cookies.isLoggedIn) {
        res.json({isLoggedIn: true, nickname: req.cookies.nickname});
    } else {
        res.json({isLoggedIn: false});
    }
});

user.get('/logout', (req, res) => {
    res.clearCookie('isLoggedIn');
    res.clearCookie('nickname');
    res.redirect('/login');
});

user.post('/:nickname/game', (req, res) => {

})


export default user


