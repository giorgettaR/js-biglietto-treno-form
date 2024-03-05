

// gestione button

const submitElement = document.getElementById('submit') //element

submitElement.addEventListener ('click' , function() {
    // acquisire dati inseriti dall'utente

    const inputLunghezzaViaggioElement = document.getElementById('lunghezzaViaggio'); // element or null
    // console.log(inputLunghezzaViaggioElement); 
    const inputEtaElement = document.getElementById('eta'); // element or null
    // console.log(inputEtaElement);

    // salvare i dati acquisiti e formattare

    let km = inputLunghezzaViaggioElement.value; // string
    km = parseFloat(km); //number
    console.log('lunghezza del viaggio: ' + km + ' km');
    let eta = inputEtaElement.value; //string
    eta = parseInt(eta); //number
    console.log('età del passeggero: ' + eta + ' anni');

    // calcolo costo base

    const pricePerKm = 0.21;
    let price = km * pricePerKm;
    console.log('prezzo base: ' + price + ' eur');

    // calcolo costo scontato

    if (eta < 18) {
        price = price * 0.8;
        console.log('prezzo scontato minorenni: ' + price.toFixed(2) + ' eur')
    }   else if (eta > 64) {
        price = price * 0.6;
        console.log('prezzo scontato anziani: ' + price.toFixed(2) + ' eur')
    }

})