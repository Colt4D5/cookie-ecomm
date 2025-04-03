import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
  if (typeof localStorage === 'undefined') {
    return { cart: [] };
  }

  const { products } = data;

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return { cart, products };
};