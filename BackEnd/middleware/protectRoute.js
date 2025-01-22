import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "unauthorized -  no token provided"});
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(!verified){
        return res.status(401).json({error: "unauthorized - invalid token"});
    }
    console.log("verified:", verified);
    
 req.user = verified.userId; // storing the user id in req.user for use in other routes
    
// const user = await User.findById(verified._id).select("-password");
const user = await User.findById(verified.userId).select("-password");
// console.log("User found:", user);

if(!user){
    return res.status(404).json({error: " no user found"});
}

req.user = user;

next();

    } catch (error) {
        console.error("Error in protectRoute:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
}



export default protectRoute;