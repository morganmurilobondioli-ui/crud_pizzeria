import express from "express";
import dotenv from "dotenv";
import pizzaRoutes from "./routes/pizzaRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/pizzas", pizzaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
