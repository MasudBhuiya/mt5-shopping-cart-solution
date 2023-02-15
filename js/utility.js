function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value ;
}

function calculateSubTotal(){
    // calculete total 
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    
    setTextElementValueById('sub-total', currentSubTotal )

    // calculete tax 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    
    setTextElementValueById('final-total', finalAmount)
}




// -------------------------
// optional 
// ---------------------------

// function updateCaseNumber(isIncrease){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value ;
//     const previousCasenumber = parseInt(caseNumberString);

//     let newPhoneNumber ; 
//     if(isIncrease === true){
//         newPhoneNumber = previousCasenumber + 1;
//     }
//     else{
//         newPhoneNumber = previousCasenumber - 1;
//     }
//     caseNumberField.value = newPhoneNumber;
//     return newPhoneNumber;
// }

// function updateCaseTotalPrice(newPhoneNumber){
//     const caseTotalPrice = newPhoneNumber * 59 ;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// }