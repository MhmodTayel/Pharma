const { config } = require("dotenv");
const Stripe =require('stripe');
const Order = require("../../models/order");

config();

 const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2020-08-27'
})

const createOrder=(order)=> Order.create(order);

async function createStripeCheckoutSession(
    body
  ) {
    // Example Item
    // {
    //   name: 'T-shirt',
    //   description: 'Comfortable cotton t-shirt',
    //   images: ['https://example.com/t-shirt.png'],
    //   amount: 500,
    //   currency: 'usd',
    //   quantity: 1,
    // }

    const url = process.env.WEBAPP_URL;
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items:body.line_items,
      metadata:body.metadata,
      success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/failed`,
    });

    return session;
  }

  const payment = async(session_id)=> {
    const session = await stripe.checkout.sessions.retrieve(session_id)
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent)
    const lineItems = await stripe.checkout.sessions.listLineItems(session_id);
    // session_id listLineItems => line items
    // session_id retrive => paymentIntent
    // paymentIntent => order details 
   
    return {paymentIntent,lineItems,session}
  }
  module.exports = {createStripeCheckoutSession,payment, createOrder}