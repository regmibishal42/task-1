const passport = require('passport');
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
        const {username,password} = req.body;
        console.log('User Image Name is ',req.userProfileImage)
        await userSchema.create.validateAsync({username,password,image:req.userProfileImage});
        const user = await createNewUser({username,password,image:req.userProfileImage});
        customResponse(res,200,user,'Users Create Method','Post');
    } catch (error) {
        throw error;
    }
}

const login = async(req,res,next)=>{
    passport.authenticate("local", { session: false }, (err, user, next) => {
        if (err || !user) {
          return res
            .status(400)
            .json({ message: "sorry couldn't authenticate you" });
        }
        req.user = user;
        return res.status(200).send({ message:'logged in ',user});
      })(req, res);
}

module.exports = {
    getAllUsers,
    createUser,
    login
}