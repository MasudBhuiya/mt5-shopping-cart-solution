function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCasenumber = parseInt(caseNumberString);

    let newCaseNumber ; 
    if(isIncrease === true){
        newCaseNumber = previousCasenumber + 1;
    }
    else{
        newCaseNumber = previousCasenumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59 ;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber =  updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})

// case total +++++++++++++++++++++
// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(true);

//     const caseTotalPrice = newCaseNumber * 59 ;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice ;
    
// })


// case total ----------------------------
// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(false);
//     const caseTotalPrice = newCaseNumber * 59 ;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice ;
// })


// case number +++++++++++++++++++++++++++
// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value ;
//     const previousCasenumber = parseInt(caseNumberString);

//     const newCaseNumber = previousCasenumber + 1 ;
//     caseNumberField.value = newCaseNumber;
// })


// case number --------------------------
// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const casenumberString = caseNumberField.value ;
//     const previousCasenumber = parseInt(casenumberString);

//     const newCaseNumber = previousCasenumber - 1 ;
//     caseNumberField.value = newCaseNumber;
// })

