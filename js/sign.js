document.getElementById('btn-login').addEventListener('click', function(){
    const emailField=document.getElementById('email-field');
    const email=emailField.value;

    const passwordField=document.getElementById('password-field');
    const password=passwordField.value;

    if(email==='odvutkabbo@gmail.com' && password==='Nowonline@#1'){
       window.location.href='bank.html';
    }
    else{
        alert('Please enter right ID/Password to Login');
        
    }
})