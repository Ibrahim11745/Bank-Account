
//step-1: click the withdraw button  event handler used kora hoyese
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('click withdraw');

    //step-2: input field ar value add korar jonno eita used korbo
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //    console.log(newWithdrawAmount);
    // console.log(newWithdrawAmount);

    //step- 7  -- clear the Input text kore dibe nicher ta open korle
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide A Valid Number');
        return;
    }
    //step-3-- get withdraw previous total

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);



    //step-5: get the previous balance-total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bap Er Ban Ato Balance Nay');
        return;
    }

    //step-4-- calculate withdraw total amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //step-4-5: set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6: calculate New balance total 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


});
