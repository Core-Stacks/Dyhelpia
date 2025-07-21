function downloadApp() {
  const downloadLink = "https://drive.google.com/file/d/1-ItdKWZcaVXWBKSpujCx1qwswj4sEBXr/view?usp=sharing"; // Replace with real link
  window.open(downloadLink, "_blank");
}


let cartCount = 0;

function addToCart() {
  cartCount += 1;
  document.getElementById('cart-status').innerText = `Items in Cart: ${cartCount}`;
  document.getElementById('buy-btn').disabled = false;
}

function buyNow() {
  alert('Thank you for your purchase!');
  cartCount = 0;
  document.getElementById('cart-status').innerText = 'Cart is empty';
  document.getElementById('buy-btn').disabled = true;
}
