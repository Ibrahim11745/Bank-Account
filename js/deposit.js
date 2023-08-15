//step-1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button click')

    //step-2 : get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    //for input used ar jonno .value bebohar korbo
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step- 7  -- clear Input text   kore dibe nicher ta open korle
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Provide A Valid Number')
        return;
    }
    //typeof diye string value dekha jay
    // console.log(typeof newDepositAmount);

    // console.log(depositAmount) ;


    //step-3: get the current total deposit amount
    //eita kintu input text na / tar por used used korte  hobe innerText 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // console.log(depositTotal)
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //typeof diye string value dekha jay
    // console.log(typeof previousDepositTotal);


    //step-4 : Add numbers set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // depositTotalElement.innerText = newDepositAmount;
    //set the deposit value
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6 -- current total  calculate balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;



})