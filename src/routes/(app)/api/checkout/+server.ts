import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { PUBLIC_APPLICATION_URI } from '$env/static/public';

if (!STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST = async ({ request }) => {
  try {
    const { items } = await request.json();

    if (!Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: 'items must be a non-empty array' }), { status: 400 });
    }

    // Build Stripe line_items: accept either priceId (pre-created Price) or price_data
    const line_items = items.map((item, i) => {
      const quantity = Number(item.quantity ?? 1);
      const priceId = item.priceId ?? item.price ?? item.price_id;

      if (!priceId && !item.price_data) {
        throw new Error(`Line item ${i} is missing 'priceId' or 'price_data'`);
      }

      if (priceId) {
        return {
          price: String(priceId),
          quantity: Math.max(1, Math.floor(quantity))
        };
      }

      // validate minimal price_data shape
      const pd = item.price_data;
      if (!pd || !pd.currency || !pd.unit_amount || !pd.product_data?.name) {
        throw new Error(`Line item ${i} has incomplete price_data (requires currency, unit_amount, product_data.name)`);
      }

      return {
        price_data: {
          currency: pd.currency,
          product_data: {
            name: pd.product_data.name
          },
          unit_amount: Math.floor(pd.unit_amount)
        },
        quantity: Math.max(1, Math.floor(quantity))
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${PUBLIC_APPLICATION_URI}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${PUBLIC_APPLICATION_URI}/checkout/failure`
    });

    return new Response(JSON.stringify({ success: true, sessionId: session.id, url: session.url }), { status: 200 });
  } catch (err: any) {
    console.error('Create checkout session error:', err?.message ?? err);
    const status = String(err?.message ?? '').toLowerCase().includes('missing') ? 400 : 500;
    return new Response(JSON.stringify({ error: err?.message ?? 'Internal error' }), { status });
  }
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