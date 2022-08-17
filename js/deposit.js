document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('input-deposit');
    const inputDepositAmountString = depositField.value;
    const inputDepositAmount = parseFloat(inputDepositAmountString);
    depositField.value = '';
    if (isNaN(inputDepositAmount)) {
        alert('Please provide a Number for Deposit Amount')
        return;
    }
    console.log(inputDepositAmount);


    const exDepositAmount = document.getElementById('ex-deposit');
    const exDepositAmountString = exDepositAmount.innerText;
    const currentDepositAmount = parseFloat(exDepositAmountString);
    
    const currentDepositAmountTotal=inputDepositAmount + currentDepositAmount;
    exDepositAmount.innerText = (currentDepositAmountTotal);

    const exBalance = document.getElementById('ex-balance');
    const exBalanceString = exBalance.innerText;
    const exBalanceAmount = parseFloat(exBalanceString);

    const exBalanceTotal = exBalanceAmount + inputDepositAmount;
    exBalance.innerText = (exBalanceTotal);


})