function inputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const newAmount = parseFloat(inputAmountText);

    //clear input value
    inputField.value = "";
    return newAmount;
}

function getPreviousAmount(previousAmountId, newDepositAmount) {
    //debugger;
    const outputField = document.getElementById(previousAmountId);
    const previousAmountText = outputField.innerText;
    const previousAmount = parseFloat(previousAmountText);

    const totalAmount = newDepositAmount + previousAmount;
    outputField.innerText = totalAmount;
}
function currentBalance(){
    const presentBalance = document.getElementById('total-balance');
    const presentBalanceText = presentBalance.innerText;
    const previousAmount = parseFloat(presentBalanceText);
    return previousAmount;
}
function updateBalance(amount, isAdd) {
    const presentBalance = document.getElementById('total-balance');
    /* const presentBalanceText = presentBalance.innerText;
    const previousAmount = parseFloat(presentBalanceText); */
    const previousAmount = currentBalance();
    if (isAdd == true) {
        const newTotalBalance = amount + previousAmount;
        presentBalance.innerText = newTotalBalance;
    }
    else {
        const newTotalBalance = previousAmount - amount;
        presentBalance.innerText = newTotalBalance;
    }
}

//handle delposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
    //get ammount deposit
    const newDepositAmount = inputValue('diposit-input');
    if (newDepositAmount > 0) {
        //set deposite amount
        getPreviousAmount('total-deposit', newDepositAmount);

        //total balance
        updateBalance(newDepositAmount, true);
    }

})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get ammount withDraw
    const newWithdrawBalance = inputValue('withdraw-input');
    const getCurrentBalance = currentBalance();
    if (newWithdrawBalance > 0 && newWithdrawBalance <=getCurrentBalance ) {
        //set withdraw total
        getPreviousAmount('total-withdraw', newWithdrawBalance);

        //update balance
        updateBalance(newWithdrawBalance, false);
    }
    if(newWithdrawBalance > getCurrentBalance){
        alert('you have input higher than the money you have');
    }


})