function getBasketContent() {
    const fruits = [
     "strawberry", "strawberry", "strawberry","apple","apple","limes","limes","peach","pears","pears"

       
    ]

    console.log(fruits.length + " fruit(s) selected");
    
    return fruits;
}

getBasketContent();




// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}
