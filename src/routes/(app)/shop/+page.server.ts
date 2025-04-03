import { listProducts, getPrice } from '$lib/stripe/index.svelte';

export async function load() {
  try {
    let products = await listProducts();
    // loop over products and add price to each product as "currentPrice"
    products = await Promise.all(products.map(async (product) => {
        product.currentPrice = await getPrice(product.default_price);
        return product;
    }));

    products = products.map(product => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.currentPrice.unit_amount / 100,
        priceId: product.currentPrice.id,
        // currency: product.currentPrice.currency,
        image: product.images[0]
      };
    });
    
    return {
      products: products.length ? products : [],
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error loading products:', error);
    return {
      products: [],
      error: 'Failed to load products'
    };
  }
}