require("dotenv").config();
const apiKey = `${process.env.STRIPE_SECRET_KEY}`;
const stripe = require("stripe")(apiKey);

exports.handler = async (event) => {

   try {
      const { amount } = JSON.parse(event.body);
      const paymentIntent = await stripe.paymentIntents.create({
         amount,
         currency: "sek",
         payment_method_types: ["card"]
      });

      return{
         statusCode: 200,
         body: JSON.stringify({paymentIntent}),
      }

   } catch (error) {
      console.log({event})

      return {
         statusCode: 400,
         body: JSON.stringify({error}),
      }
   }
}