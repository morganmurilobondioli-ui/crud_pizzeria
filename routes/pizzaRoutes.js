import express from "express";
import { getPizzas, getPizzaById, createPizza, updatePizza, deletePizza } from "../controllers/pizzaController.js";

const router = express.Router();

router.get("/", getPizzas);
router.get("/:id", getPizzaById);
router.post("/", createPizza);
router.put("/:id", updatePizza);
router.delete("/:id", deletePizza);

export default router;
