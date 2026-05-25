import Auth from "../models/AuthModel.js";
import bcrypt from "bcryptjs";


export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name||!email||!password){
            return res.json ({
                message:"All feilds are required"
            })
        }
        const exisitingUser=await Auth.findOne({email})
        if(exisitingUser){
            res.json({message:"User already exists"})
        }

        const hashedPassword=await bcrypt.hash(password,10)
         const userRegister=await Auth.create({name,email,password:hashedPassword})
         res.json({
            message:"User created successfully",
            data:userRegister
         })
    } catch (error) {
        res.json(error.message) 
    }
}


export const login=async(req,res)=>{
try {
    const{email,password}=req.body
    if(!email||!password){
        return res.json({
            message:"All fields are required"
        })
    }
    const existingUser=await Auth.findOne({email})
    if(!existingUser){
        return res.json({message:"This email don't exists"})
    }
    const comparePassword=await bcrypt.compare(password,existingUser.password)
    if(comparePassword){
     return res.json({
        data:existingUser
     })
    }
} catch (error) {
    res.json(error.message)
}


}