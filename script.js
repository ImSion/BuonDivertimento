// alert("codice sconto caffè 10")

const coffeeTypePrices = {
    espresso: 2.50,
    americano: 3.00,
    cappuccino: 3.50
}

let prezzofinale = 0

let caffe = document.getElementById(`caffe`) ;
let zucchero = document.getElementById(`zucchero`).value
let latte = document.getElementById(`latte`).value
let panna = document.getElementById(`panna`).value
let aroma = document.getElementById(`aroma`).value

let button = document.getElementById(`button`)


    button.addEventListener(`click`, function() {
    // console.log(caffe.value);


console.table(coffeeTypePrices)
if (caffe.value === "espresso") {
    prezzofinale = prezzofinale + coffeeTypePrices.espresso
    console.log(prezzofinale);
} else if (caffe.value === "americano" ) {
    prezzofinale += coffeeTypePrices.americano
    console.log(prezzofinale)
} else {
    prezzofinale += coffeeTypePrices.cappuccino
    console.log(prezzofinale)
}
})

