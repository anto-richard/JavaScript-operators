// initial shopping cart
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

console.log("Initial Shopping Cart: " + shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) 
{
  shoppingCart.unshift('Meat');
  console.log("Added Meat to the beginning of the shopping cart: " + shoppingCart);
}

// add Sugar at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) 
{
  shoppingCart.push('Sugar');
  console.log("Added Sugar to the end of the shopping cart: " + shoppingCart);
}

// remove 'Honey' if you are allergic to honey
const allergicToHoney = true; // set to true if allergic, false otherwise
if (allergicToHoney) 
{
  const index = shoppingCart.indexOf('Honey');
  if (index !== -1) 
  {
    shoppingCart.splice(index, 1);
    console.log("Removed Honey from the shopping cart: " + shoppingCart);
  }
}

// modify Tea to 'Green Tea'
const index = shoppingCart.indexOf('Tea');
if (index !== -1) 
{
  shoppingCart[index] = 'Green Tea';
  console.log("Modified Tea to Green Tea: " + shoppingCart);
}

console.log("Final Shopping Cart: " + shoppingCart);
