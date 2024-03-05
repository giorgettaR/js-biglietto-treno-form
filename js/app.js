



// acquisire dati inseriti dall'utente

const inputTripLengthElement = document.getElementById('tripLength'); // element or null
const inputNameElement = document.getElementById('passengerName'); // element or null
const inputSurnameElement = document.getElementById('passengerSurname'); // element or null
const inputDiscountElement = document.getElementById('discount'); // element or null

// output dati nel biglietto
const outputPassengerElement = document.getElementById('outputPassenger'); // element or null
const outputDiscountElement = document.getElementById('outputDiscount'); // element or null
const outputPriceElement = document.getElementById('outputPrice'); // element or null
const outputCodeElement = document.getElementById('outputCode'); // element or null


let km , discount, price, name, surname;

// gestione button 'conferma'

const submitElement = document.getElementById('submit') //element or null

submitElement.addEventListener ('click' , function() {
    
    // salvare i dati acquisiti e formattare

    name = inputNameElement.value; // string
    surname = inputSurnameElement.value; // string
    km = inputTripLengthElement.value; // string
    km = parseFloat(km); //number
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

        // calcolo costo scontato e output

        if (discount  == 'minorenni') {
            price = price * 0.8;
            console.log('Prezzo scontato minorenni (-20%): ' + price.toFixed(2) + ' eur')
            outputDiscountElement.innerHTML = 'Ridotto Minorenni';
        }   else if (discount == 'anziani') {
            price = price * 0.6;
            console.log('Prezzo scontato anziani (-40%): ' + price.toFixed(2) + ' eur')
            outputDiscountElement.innerHTML = 'Ridotto Anziani'
        }   else {
            outputDiscountElement.innerHTML = 'Standard'
        }


        outputPassengerElement.innerHTML = name + ' ' + surname;
        outputPriceElement.innerHTML = price + ' eur';
        const code = new Uint32Array(1);
        self.crypto.getRandomValues(code);
        outputCodeElement.innerHTML = code;


    } else {
        console.log('Inserire i dati correttamente')

    }
    

    
})

// gestione button 'annulla'

const cancelInputElement = document.getElementById('cancel'); //element or null

cancelInputElement.addEventListener('click', function() {
    inputNameElement.value = '';
    inputSurnameElement.value = '';
    inputTripLengthElement.value = '';
    inputDiscountElement.value = '';

    outputPassengerElement.innerHTML = '---';
    outputDiscountElement.innerHTML = '---';
    outputPriceElement.innerHTML = '---';
    outputCodeElement.innerHTML = '---';
})
