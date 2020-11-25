import asyncHandler from "express-async-handler";
//@desc  create new order
//route   POST /api/orders
//access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shipingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
});

if (orderItems?.length === 0) {
  res.status(400);
  throw new Error("No order Items");
} else {
  const order = new Order({
    orderItems,
    user: req.user._id,
    shipingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  const createdOrder = await order.save();

  res.status(201).json({ createdOrder });
}
export { addOrderItems };
