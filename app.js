
function updateNumber(product, price, increase) {
    const productNumber = document.getElementById(product + '-number');
    let productTextValue = productNumber.value;

    if (increase === true) {
        productTextValue = parseInt(productTextValue) + 1;

    } else if (productTextValue > 0) {
        productTextValue = parseInt(productTextValue) - 1;;
    }
    productNumber.value = productTextValue;

    const productValue = document.getElementById(product + '-price');
    productValue.innerText = productTextValue * price;


    // calculateTotal 
    const subTotal = calculateTotal();

    // update on html 
    const tax = subTotal / 10;
    const sub = document.getElementById('sub-total').innerText = subTotal;
    const total = document.getElementById('total-tax').innerText = tax;



    document.getElementById('total-price').innerText = parseInt(sub) + parseInt(total);

}
function productInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productValue = parseInt(productInput.value);
    return productValue;
}
function calculateTotal() {
    const phoneTotal = productInput('product') * 1219;
    const caseTotal = productInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    return subTotal;
}

// mobile product

// increase product number
document.getElementById('increase-button').addEventListener('click', function () {
    updateNumber('product', 1219, true);
})

// decrease mobile product Number
document.getElementById('decrease-button').addEventListener('click', function () {
    updateNumber('product', 1219, false);

})

// CASE NUMBER 

// increase case number 
document.getElementById('increase-case').addEventListener('click', function () {
    updateNumber('case', 59, true);
})
// decrese case number 
document.getElementById('decrease-case').addEventListener('click', function () {
    updateNumber('case', 59, false);
})