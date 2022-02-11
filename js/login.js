 document.getElementById('login-button').addEventListener('click',function(){
    //get user email
    const getMail = document.getElementById('input-mail');
    const userEmail = getMail.value;

    //get user password
    const getPassword = document.getElementById('input-password');
    const userPassword = getPassword.value;

    //check mail and password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
    
})