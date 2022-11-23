const {fetchAllUsers,createNewUser} = require('../repository/user-respository');
const customResponse = require('../utils/customResponse');
const userSchema = require('../validator/user_validator');


const getAllUsers = async(req,res,next) =>{
    try{
        const users = await fetchAllUsers();
        return customResponse(res,200,users,'Users Get Method','Get');
    }catch(e){
        throw e;
    }
};

const createUser = async(req,res,next)=>{
    try {
        const {userName} = req.body;
        console.log('User Image Name is ',req.userProfileImage)
        await userSchema.create.validateAsync({userName,image:req.userProfileImage});
        const user = await createNewUser({userName,image:req.userProfileImage});
        customResponse(res,200,user,'Users Create Method','Post');
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUsers,
    createUser
}