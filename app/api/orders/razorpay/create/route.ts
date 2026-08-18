import { auth } from '@/lib/auth';
import dbConnect from '@/lib/dbConnect';
import OrderModel from '@/lib/models/OrderModel';
import { razorpay } from '@/lib/razorpay';

export const POST = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json(
      { message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { amount, orderId, paymentMethod } = await req.json();



    if (!orderId) {
      return Response.json(
        { message: 'Order ID is required' },
        { status: 400 }
      );
    }

    await dbConnect();
    const order = await OrderModel.findById(orderId);
    if (!order) {
      return Response.json(
        { message: 'Order not found' },
        { status: 404 }
      );
    }

    // Create Razorpay order using the trusted database price
    const razorpayOrder = await razorpay.createOrder(order.totalPrice, {
      notes: {
        orderId,
        paymentMethod: paymentMethod || 'razorpay',
      },
    });



    return Response.json({
      razorpayOrder,
      razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error: any) {
    console.error('[RAZORPAY] Order creation failed:', error.message);
    return Response.json(
      { message: error.message || 'Failed to create payment order' },
      { status: 500 }
    );
  }
});