import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified:", verified);

        const user = await User.findById(verified.userId).select("-password");

        if (!user) {
            return res.status(404).json({ error: "No user found" });
        }

        req.user = user; 
        next();
    } catch (error) {
        console.error("Error in protectRoute:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export default protectRoute;