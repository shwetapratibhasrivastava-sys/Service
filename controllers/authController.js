import Auth from "../models/AuthModel.js";


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