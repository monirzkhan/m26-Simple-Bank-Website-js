document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputWithdrawAmount = document.getElementById('input-withdraw');
    const inputWithdrawAmountString = inputWithdrawAmount.value;
    const inputWithdrawalAmount = parseFloat(inputWithdrawAmountString);
    inputWithdrawAmount.value = '';

    if (isNaN(inputWithdrawalAmount)) {
        alert('Please provide a Number for Withdraw Amount')
        return;
    }
    console.log(inputWithdrawalAmount);
    

    
    

    const exBalance = document.getElementById('ex-balance');
    const exBalanceString = exBalance.innerText;
    const exBalanceAmount = parseFloat(exBalanceString);

    if (inputWithdrawalAmount > exBalanceAmount) {
        alert('insufficient balance for withdrawal')
        return;
    }
    const exWithdrawAmount = document.getElementById('ex-withdraw');
    const exWithdrawAmountString = exWithdrawAmount.innerText;
    const exWithdrawalAmount = parseFloat(exWithdrawAmountString);
    const exWithdrawalAmountNow = inputWithdrawalAmount + exWithdrawalAmount;

    exWithdrawAmount.innerText = (exWithdrawalAmountNow);

    const exBalanceTotal = exBalanceAmount - inputWithdrawalAmount;
    exBalance.innerText = (exBalanceTotal);
})