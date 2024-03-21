const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) { //bearer is the type of authentication
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1]; //split and get the 2nd element

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userID){
            req.userId = decoded.userId; //i doubt it will be userID, cuz there is no variable named such
            next();
        }
        else{
            return res.status(403).json({});
        }

    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}