

// gestione button

const submitElement = document.getElementById('submit') //element or null

let km , discount, price;

submitElement.addEventListener ('click' , function() {
    // acquisire dati inseriti dall'utente

    const inputTripLengthoElement = document.getElementById('tripLength'); // element or null
    const inputAgeElement = document.getElementById('age'); // element or null

    // salvare i dati acquisiti e formattare

    km = inputTripLengthoElement.value; // string
    km = parseFloat(km); //number
    console.log('Lunghezza del viaggio: ' + km + ' km');

    const inputDiscountElement = document.getElementById('discount'); // element or null
    discount = inputDiscountElement.value; //string

    // calcolo costo base

    const pricePerKm = 0.21;
    price = km * pricePerKm;
    console.log('Prezzo base: ' + price + ' eur');

    // calcolo costo scontato

    if (discount  == 'minorenni') {
        price = price * 0.8;
        console.log('Prezzo scontato minorenni (-20%): ' + price.toFixed(2) + ' eur')
    }   else if (discount == 'anziani') {
        price = price * 0.6;
        console.log('Prezzo scontato anziani (-40%): ' + price.toFixed(2) + ' eur')
    }
})