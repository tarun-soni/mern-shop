import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderToOutForDelivery,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

//tip :here keep all routes with /:id below
router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router
  .route("/:id/outForDelivery")
  .put(protect, admin, updateOrderToOutForDelivery);
export default router;
