const { sql } = require("../config/pgDb");

const addCategory = async (req, res) => {
  try {
    const { title, color, id, description, iconname } = req.body;
    await sql`INSERT INTO category(title, color, id, description, iconname) VALUES(${title}, ${color}, ${id}, ${description}, ${iconname})`;
    res.status(201).json({ message: "category success" });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "category failed" });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM category`;
    res.status(201).json({ categories });
  } catch (error) {
    res.status(500).json({ message: "get failed" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { title, color, id, description, iconname } = req.body;
    //    const findCategory =
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCategory, getCategory };
