let priceVariationObject = {};
let jsonConvert;

$('#variations').on('change', function () {

    const createCanvasBtn = document.querySelector('#create-canvas-btn');

    let variation = document.getElementById('variations').value;
    Object.assign(priceVariationObject, {'variation': variation})


    if (variation === 'Choose an option') {
        createCanvasBtn.disabled = true;
        $('#result').html('')

    } else {
        createCanvasBtn.disabled = false;
    }

    let priceVariation;
    let option = $(this).find('option:selected');
    priceVariation = (option.data('price'));
    // console.log('output', priceVariation) // output current price based on the variation
    $('#result').html(priceVariation)


    Object.assign(priceVariationObject, {'price': priceVariation})
    jsonConvert = JSON.stringify(priceVariationObject);
    console.log(jsonConvert);


    sessionStorage.setItem('variation', variation);
    sessionStorage.setItem('priceVariation', priceVariation);
    sessionStorage.setItem('jsonOutput', jsonConvert)

});


/* Append the variation and price in the designer web page */

let outputSizeVariation = document.getElementById('sizeVariation');
let cartPageVariation = sessionStorage.getItem('variation');

if (cartPageVariation === "" || cartPageVariation === null) {

    outputSizeVariation.innerHTML = 'Size';

} else {
    outputSizeVariation.innerHTML = 'Size ' + cartPageVariation;
}

let outputPriceVariation = document.getElementById('priceVariation');
let cartPagePriceVariation = sessionStorage.getItem('priceVariation');

if (cartPagePriceVariation === "" || cartPagePriceVariation === null) {

    outputPriceVariation.innerHTML = 'Price ';

} else {

    outputPriceVariation.innerHTML = 'Price ' + cartPagePriceVariation;
}

// Append chosen price and variation in the browser console

console.log(sessionStorage.getItem('jsonOutput'));