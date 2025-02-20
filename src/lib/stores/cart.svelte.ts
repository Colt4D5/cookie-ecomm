// Define the initial state
let cart = $state({ items: [] as Cart[] });
let shipping = $state(0);

// Function to add an item to the cart
export function addItem({ id, image, name, price, quantity = 1 }: Cart) {
  const existingItem = cart.items.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 0) + quantity;
  } else {
    cart.items.push({ id, image, name, quantity: quantity || 1, price });
  }
  if (localStorage) {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  }
}

// Function to remove an item from the cart
export function removeItem(id: Cart['id']) {
  cart.items = cart.items.filter(item => item.id !== id);
  if (localStorage) {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  }
}

// function to decrease quantity of an item in the cart
export function decreaseQuantity(id: Cart['id']) {
  const item = cart.items.find(item => item.id === id);
  if (item) {
    item.quantity = (item.quantity || 0) - 1;
    if (item.quantity <= 0) {
      removeItem(id);
    }
    if (localStorage) {
      localStorage.setItem('cart', JSON.stringify(cart.items));
    }
  }
}

// Function to update the quantity of an item in the cart
export function updateQuantity(id: Cart['id'], quantity: number) {
  const item = cart.items.find(item => item.id === id);
  if (item) {
    item.quantity = quantity;
    if (localStorage) {
      localStorage.setItem('cart', JSON.stringify(cart.items));
    }
  }
}

// Function to clear the cart
export function clearCart() {
  cart.items = [];
  if (localStorage) {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  }
}

// Function to save the cart to local storage
function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart.items));
}

// function to calculate the total price of the cart
export function calculateTotal() {
  return cart.items.reduce((total, item) => {
    return total + (item.price * (item.quantity || 0));
  }, 0);
}

if (typeof localStorage !== 'undefined') {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart.items = JSON.parse(savedCart);
  }
}


export function getTotalItems() {
  return cart.items.reduce((total, item) => total + (item.quantity || 0), 0);
}


export function setShippingCost(cost: number) {
  shipping = cost;
}


export function getShippingCost() {
  return shipping;
}


export function calculateShippingCost() {
  const total = calculateTotal();

  return total > 50 ? 0 : 5;
}

// Export the cart state
export { cart };