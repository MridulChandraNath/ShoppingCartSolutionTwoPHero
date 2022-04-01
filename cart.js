// // it's for increasing value of mobile number

// document.getElementById('plusBtnMobile').addEventListener('click', function () {
//     const mobileInput = document.getElementById('countMobile');
//     const mobileNumber = mobileInput.value;
//     mobileInput.value = parseFloat(mobileNumber) + 1;

// })

// // it's all about decreasing the value of mobile number
// document.getElementById('minusBtnMobile').addEventListener('click', function () {
//     const mobileInput = document.getElementById('countMobile');
//     const mobileNumber = mobileInput.value;
//     mobileInput.value = parseFloat(mobileNumber) - 1;
// })


// // It's for the purpose of case number

// document.getElementById('plusBtnCase').addEventListener('click', function () {
//     const caseInput = document.getElementById('countCase');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseFloat(caseNumber) + 1;

// })

// // It's all for the purpose of case decrease number
// document.getElementById('minusBtnCase').addEventListener('click', function () {
//     const caseInput = document.getElementById('countCase');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseFloat(caseNumber) - 1;

// })


// Doing all these Using function

function updateProductNumber(isIncreasing, price, product) {
    const productInput = document.getElementById('count' + product);
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
        const caseTotal = document.getElementById('balance' + product);

    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case Total 
    const productTotal = document.getElementById('balance' + product);
    productTotal.innerText = productNumber * price;

}

document.getElementById('plusBtnMobile').addEventListener('click', function () {
    updateProductNumber(true, 1219, 'Mobile');
})

document.getElementById('minusBtnMobile').addEventListener('click', function () {
    updateProductNumber(false, 1219, 'Mobile');
})

document.getElementById('plusBtnCase').addEventListener('click', function () {
    updateProductNumber(true, 59, 'Case');
})

document.getElementById('minusBtnCase').addEventListener('click', function () {
    updateProductNumber(false, 59, 'Case');
})

