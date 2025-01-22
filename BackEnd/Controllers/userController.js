import User from "../models/userModel.js ";

export const  getUsersForSidebar = async (req , res)=>{
try {

    const loggedInUserId = req.user.id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");    ;

    res.status(201).json(allUsers);
    
} catch (error)  {
    console.error("Error in getUsersForSidebar:", error);
    res.status(500).json({ message: "Something went wrong" });
}{
    
}
}