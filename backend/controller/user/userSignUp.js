const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');


async function userSignUpController(req, res){
    try{
        const {email , password, name} = req.body

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("User Already exist.")
        }

        if(!email){
            throw new Error("Please Provide Email")
        }
        if(!password){
            throw new Error("Please Provide Password")
        }
        if(!name){
            throw new Error("Please Provide Name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }
        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const savedUser =await userData.save();
        

        res.status(201).json({
            data : savedUser,
            success : true,
            error : false,
            message : "User created Successfully"
        })
        
    
    }catch(err){
        res.json({
            message : err.message ||err  ,
            error : true,
            success : false
        })
    }
}   

module.exports = userSignUpController