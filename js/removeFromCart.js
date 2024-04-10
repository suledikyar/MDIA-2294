document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.cart-item button').forEach(button => {
        button.addEventListener('click', function() {
    
            this.closest('.cart-item').remove();
            
            updateTotalPrice();
        });
    });

    function updateTotalPrice() {
        
        let total = 0;
        document.querySelectorAll('.cart-item p:last-child').forEach(priceElement => {
            
            let priceText = priceElement.textContent;
            let price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            total += price;
        });

        document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
    }
});

// document.addEventListener('DOMContentLoaded', () => {...});: This line ensures that the code inside the function will only run after the entire HTML document has been fully loaded.

// The document.querySelectorAll('.cart-item button').forEach(button => {...}); part selects all buttons within elements with the class '.cart-item' and iterates over them. For each button, it adds a click event listener. This means that when any of these buttons are clicked, the specified function will be executed.

// The click event listener calls this.closest('.cart-item').remove();. Clicked buttons are referenced by the "this" keyword. closest('.cart-item') finds the nearest ancestor which matches the selector in this case, the cart item container. remove() then removes the element.

// After an item is removed, updateTotalPrice(); is called to recalculate and update the total price displayed on the page.

// Inside updateTotalPrice(), document.querySelectorAll('.cart-item p:last-child') selects the last <p> element within each .cart-item, assumed to contain the price of the item. Using these values, it calculates the total price.

// parseFloat(priceText.replace(/[^0-9.]/g, '')) is used to convert the price text into a floating-point number, ignoring any non-numeric characters. 

// document.getElementById('total').textContent = \Total: $${total.toFixed(2)}`;` updates the total price on the page, formatting the total to two decimal places.

