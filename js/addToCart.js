document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    const cartCountElement = document.getElementById('cart-count');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        let currentCount = parseInt(cartCountElement.textContent);
        cartCountElement.textContent = currentCount + 1;
    
      });
    });
  });

  
  
// Users can view a real-time update of their cart's contents when clicking "Add to Cart" buttons on a webpage.

// A document is added as an event listener by adding a method called document.addEventListener('DOMContentLoaded', ...) to listen for the entire HTML document to load and be parsed by the browser before it runs any code.

// The document.querySelectorAll('.product button') function is used inside the callback function to select all the "Add to Cart" buttons. All buttons within ".product" class are returned by this method. 

// Document.getElementById('cart-count'), the script can find the element showing the cart count. Using this element, you can display the number of items in your cart.

// Each "Add to Cart" button is looped through with forEach and a click event listener is added. Clicking a button executes a function.

// A callback function for the click event gets the cart count from the cartCountElement's text content, converts it to an integer using parseInt(), and then increments it by 1. It then updates the cartCountElement's text with the new count.

