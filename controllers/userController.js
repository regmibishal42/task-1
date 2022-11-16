const UserModel = require('../models/userModel');
const userSchema = require('../validator/user_validator');

const router = require('express').Router();

router.get('/get-all',async(req,res)=>{
    const users = await UserModel.findAll();
    return res.status(200).json({users});
});

router.post('/new',async(req,res)=>{
   try{
    const {userName} = req.body;
    await userSchema.create.validateAsync({userName})
    const user = await UserModel.create({userName});
    if(user) return res.status(200).json({
        message:'User Created Successfully',
        user
    });
    return res.status(400).json({message:'Something Failed'});
   }catch(e){
    throw e;
   }
});

module.exports = router;