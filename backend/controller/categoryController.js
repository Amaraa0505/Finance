const { sql } = require("../config/pgDb");
const addCategory = async (req, res) => {
    try {
        const { title, color } = req.body;
        await sql`INSERT INTO category(title, color) VALUES(${title}, ${color})`;
        req.status(201).json({ message: "category success",  });
    }catch (error) {
        console.log("ERR", error);
        req.status(500).json({ message:"category failed"});
    }
};
module.exports = {addCategory};