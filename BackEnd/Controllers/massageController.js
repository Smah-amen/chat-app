import Conversation from "../models/conversationModel.js";
import Massage from "../models/massageModel.js";

export const sendMessage = async (req, res) => {
  try {
    console.log("User:", req.user.data);

    const { massage } = req.body;
    const { id: receiverId } = req.params;

    console.log("receiverId:", receiverId);
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMassage = new Massage({
      senderId,
      receiverId,
      massage,
    });

    // await newMassage.save();

    conversation.massages.push(newMassage._id);
    // await conversation.save();
    await Promise.all([conversation.save(), newMassage.save()]);

    res.status(201).json({ message: "Message sent successfully", newMassage });
  } catch (error) {
    // console.error("Error in sendMessage:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getMassages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user.id;
    
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("massages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(201).json(conversation.massages);
  } catch (error) {
    console.error("Error in getMassages:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
