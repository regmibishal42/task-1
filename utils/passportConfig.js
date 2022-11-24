
const {loginUser} = require('../repository/user-respository');
const LocalStrategy = require("passport-local").Strategy;

exports.initializingPassport = (passport) =>{
    passport.use(
        new LocalStrategy(async(username,password,done)=>{
            const user = await loginUser(username,password);
            console.log('User Found',user);
            if(!user) return done(null,false,{
                message:'Invalid Username or Password'
            });
            return done(null,user);
        })
    );
}