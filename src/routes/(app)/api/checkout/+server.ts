import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_APPLICATION_URI } from '$env/static/public';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST = async ({ request }) => {
  const { items } = await request.json();

  const data = {
    success: true,
    items: items
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => ({
      price: item.priceId,
      quantity: item.quantity
    })),
    mode: 'payment',
    success_url: `${PUBLIC_APPLICATION_URI}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PUBLIC_APPLICATION_URI}/checkout/failure`
  });

  return new Response(JSON.stringify({ ...data, sessionId: session.id }), { status: 200 });
}

// export const POSTSSS = async ({ request }) => {
//   try {
//     const { products } = await request.json();
        
//     // Format line items for Stripe
//     const lineItems = products.map(product => ({
//       price: product.priceId, // The Stripe Price ID you've set up in your Stripe dashboard
//       quantity: product.quantity
//     }));

//     // Create a checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment', // 'subscription' for subscription products
//       success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${request.headers.get('origin')}/cancelled`,
//     });

//     return new Response(JSON.stringify({ id: session.id }), { status: 200 });
//   } catch (error) {
//     console.error('Error creating checkout session:', error);
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }