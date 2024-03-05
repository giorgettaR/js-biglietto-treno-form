

// gestione button

const submitElement = document.getElementById('submit') //element or null

let km , discount, price, name, surname;

submitElement.addEventListener ('click' , function() {
    // acquisire dati inseriti dall'utente

    const inputTripLengthElement = document.getElementById('tripLength'); // element or null
    const inputNameElement = document.getElementById('passengerName'); // element or null
    const inputSurnameElement = document.getElementById('passengerSurname'); // element or null

    // salvare i dati acquisiti e formattare

    name = inputNameElement.value; // string
    surname = inputSurnameElement.value; // string
    km = inputTripLengthElement.value; // string
    km = parseFloat(km); //number

    const inputDiscountElement = document.getElementById('discount'); // element or null
    discount = inputDiscountElement.value; //string

    // check validità dati

    if 
    (name !== '' &&
    surname !== '' &&
    km > 0 &&
    km!== NaN ) {

        console.log('Nome e cognome passeggero: ' + name + ' ' + surname);
        console.log('Lunghezza viaggio: ' + km + ' km');

        // calcolo costo base

        const pricePerKm = 0.21;
        price = km * pricePerKm;
        console.log('Prezzo base: ' + price.toFixed(2) + ' eur');

        // calcolo costo scontato

        if (discount  == 'minorenni') {
            price = price * 0.8;
            console.log('Prezzo scontato minorenni (-20%): ' + price.toFixed(2) + ' eur')
        }   else if (discount == 'anziani') {
            price = price * 0.6;
            console.log('Prezzo scontato anziani (-40%): ' + price.toFixed(2) + ' eur')
        }

    } else console.log('Inserire i dati correttamente')

    
})