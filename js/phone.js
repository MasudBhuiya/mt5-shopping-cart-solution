function updatePhoneNumber(isIncrease){
    const PhoneNumberField = document.getElementById('phone-number-field');
        const previousPhoneNumberString = PhoneNumberField.value ;
        const previousPhoneNumber = parseInt(previousPhoneNumberString);

        let newPhoneNumber ;
        if(isIncrease === true){
            newPhoneNumber = previousPhoneNumber + 1 ;
        }
        else{
            newPhoneNumber = previousPhoneNumber - 1 ;
        }
        PhoneNumberField.value = newPhoneNumber ;
        return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219 ;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice ;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true)
    updatePhoneTotalPrice(newPhoneNumber);

    // calculate total 
    calculateSubTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber);
    // calculate total 
    calculateSubTotal();
})


// sub total +++++++++++++++++++++++++++++++++
// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const newPhoneNumber = updatePhoneNumber(true)
//     updatePhoneTotalPrice(newPhoneNumber);
//     // calculate total 
//     const currentPhoneTotal = getTextElementValueById('phone-total')
//     const currentCaseTotal = getTextElementValueById('case-total');
//     const currentSubTotal = currentCaseTotal + currentPhoneTotal;
//     const subtotalElement = document.getElementById('sub-total');
//     subtotalElement.innerText = currentSubTotal ;
// })

// sub total -------------------------------
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber);
    // calculate total 
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    const subtotalElement = document.getElementById('sub-total');
    subtotalElement.innerText = currentSubTotal ;
})






// phone number ++++++++++++++++++++++++++++++
// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const PhoneNumberField = document.getElementById('phone-number-field');
//     const previousPhoneNumberString = PhoneNumberField.value ;
//     const previousPhoneNumber = parseInt(previousPhoneNumberString);
    
//     const newPhoneNumber = previousPhoneNumber + 1 ;
//     PhoneNumberField.value = newPhoneNumber ;

//     const phoneTotalPrice = newPhoneNumber * 1219;
//     const phoneTotalElement = document.getElementById('phone-total');
//     phoneTotalElement.innerText = phoneTotalPrice;
// })

// phone number -----------------------------------------------------------
// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const PhoneNumberField = document.getElementById('phone-number-field');
//     const previousPhoneNumberString = PhoneNumberField.value ;
//     const previousPhoneNumber = parseInt(previousPhoneNumberString);
    
//     const newPhoneNumber = previousPhoneNumber - 1 ;
//     PhoneNumberField.value = newPhoneNumber ;

//     const phoneTotalPrice = newPhoneNumber * 1219;
//     const phoneTotalElement = document.getElementById('phone-total');
//     phoneTotalElement.innerText = phoneTotalPrice;
// })