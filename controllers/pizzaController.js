import pool from "../config/db.js";

export const getPizzas = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM pizzas");
  res.json(rows);
};

export const getPizzaById = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM pizzas WHERE id = ?", [req.params.id]);
  if (rows.length === 0) return res.status(404).json({ message: "Pizza no encontrada" });
  res.json(rows[0]);
};

export const createPizza = async (req, res) => {
  const { nombre, ingredientes, precio } = req.body;
  const [result] = await pool.query(
    "INSERT INTO pizzas (nombre, ingredientes, precio) VALUES (?, ?, ?)",
    [nombre, ingredientes, precio]
  );
  res.json({ id: result.insertId, nombre, ingredientes, precio });
};


export const updatePizza = async (req, res) => {
  const { id } = req.params;
  const { nombre, ingredientes, precio } = req.body;
  await pool.query("UPDATE pizzas SET nombre=?, ingredientes=?, precio=? WHERE id=?", [nombre, ingredientes, precio, id]);
  res.json({ message: "Pizza actualizada" });
};

export const deletePizza = async (req, res) => {
  await pool.query("DELETE FROM pizzas WHERE id = ?", [req.params.id]);
  res.json({ message: "Pizza eliminada" });
};