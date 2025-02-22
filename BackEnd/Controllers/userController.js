import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // Use _id instead of id

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};