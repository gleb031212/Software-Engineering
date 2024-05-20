var card = document.getElementById('card');
card.addEventListener('click', function() {
    console.log("Card Clicked")
    let checkout = document.getElementById('checkout-card');
    checkout.style.display = 'flex';
    checkout.scrollIntoView(  ); /*https://stackoverflow.com/questions/8773921/how-to-automatically-scroll-down-a-html-page*/
    
});

/*There will be a function that displays the price of the purchase in #price ,
maybe using a value stored in the database that stores a user's cart?*/

