"use server";
import { NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(res: NextApiResponse) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1OgWQmIYiWJp8AOoBKiMgMQb",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `/success`,
      cancel_url: `/`,
    });
    res.redirect(303, session.url as string);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
