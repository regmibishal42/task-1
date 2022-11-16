const UserModel = require('../models/userModel');

const router = require('express').Router();

router.get('/get-all',async(req,res)=>{
    const users = await UserModel.findAll();
    return res.status(200).json({users});
});

router.post('/new',async(req,res)=>{
    const {userName} = req.body;
    const user = await UserModel.create({userName});
    if(user) return res.status(200).json({
        message:'User Created Successfully',
        user
    });
    return res.status(400).json({message:'Something Failed'});
});

module.exports = router;