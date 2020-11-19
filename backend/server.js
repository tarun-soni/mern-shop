import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

//routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

app.use(cors());
app.get("/", (req, res) => {
  res.send("app running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//404 route
app.use(notFound);

//error handler route
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));
