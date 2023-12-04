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

const addTransaction = async (req, res) => {
  try {
    const {
      userId,
      name,
      amount,
      transaction_type,
      description,
      currency_type,
      category_id,
    } = req.body;
    await sql`INSERT INTO transaction (userId, name, amount, transaction_type, description, currency_type, category_id) VALUES (${userId}, ${name}, ${amount}, ${transaction_type}, ${description}, ${currency_type}, ${category_id} )`;
    res.status(201).json({ message: "transaction success" });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "transaction failed" });
  }
};

const getTransaction = async (req, res) => {
  try {
    const transaction = await sql`SELECT * FROM transaction`;
    res.status(201).json({ transaction });
  } catch (error) {
    res.status(500).json({ message: "get failed" });
  }
};

module.exports = { addCategory, getCategory, getTransaction, addTransaction };
