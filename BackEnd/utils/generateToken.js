import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,  //pravent xss attack
    
    sameSite:"strict", //pravent CSRF attack
    secure: process.env.NODE_ENV !=="devlopment" , //only send cookie over HTTPS
  });
};

export default generateTokenAndSetCookie;
