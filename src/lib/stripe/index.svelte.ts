import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
const stripe = new Stripe(STRIPE_SECRET_KEY);

// function to return a list of all items in the stripe account
export const listProducts = async () => {
  const products = await stripe.products.list();
  return products.data;
};

// function to get pricing based on price id
export const getPrice = async (priceId: string) => {
  const price = await stripe.prices.retrieve(priceId);
  return price;
};

const createCustomer = async (email: string) => {
  if (!email) {
    throw new Error('Email is required to create a customer');
  }
  const customer = await stripe.customers.create({
    email: email,
  });
  
  console.log(customer.id);
};

export { stripe };