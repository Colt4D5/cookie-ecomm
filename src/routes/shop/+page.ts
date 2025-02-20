import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  if (typeof localStorage === 'undefined') {
    return { cart: [] };
  }
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return { cart };
};