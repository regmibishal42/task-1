const UserModel = require('../models/userModel');

// database query to get all users
const fetchAllUsers = async()=>{
    return await UserModel.findAll();
}

// database query to create new users
const createNewUser = async(data)=>{
    return await UserModel.create(data);
}

const loginUser = async(username,password)=>{
    return await UserModel.findOne({where:{username:username,password:password}});
}


module.exports = {
    fetchAllUsers,
    createNewUser,
    loginUser
}