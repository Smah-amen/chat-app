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

    conversation.massages.push(newMassage._id);
    await Promise.all([conversation.save(), newMassage.save()]);

    res.status(201).json({ message: "Message sent successfully", newMassage });
  } catch (error) {
    // console.error("Error in sendMessage:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getMassages = async (req, res) => {
  try {
    const userToChatId = req.params.id;
    const senderId = req.user.id;
    
    console.log("Sender ID:", senderId);
    console.log("User to Chat ID:", userToChatId);

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("massages");

    console.log("Conversation:", conversation);

    if (conversation) {
      return res.status(200).json(conversation.massages); 
    } else {
      return res.status(200).json([]);
    }
  } catch (error) {
    console.error("Error in getMassages:", error);
    return res.status(500).json({ message: error.message });
  }
};
