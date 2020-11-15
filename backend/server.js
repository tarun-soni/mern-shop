import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

//routes
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

app.use(cors());
app.get("/", (req, res) => {
  res.send("app running");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
