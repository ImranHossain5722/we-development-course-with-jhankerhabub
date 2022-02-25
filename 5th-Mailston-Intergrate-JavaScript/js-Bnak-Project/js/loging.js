document.getElementById('log').addEventListener('click', function(){
    // get email
const emailFiled = document.getElementById('userEmail');
const userEmail = emailFiled.value;
//getPassword
const userPasswordFiled = document.getElementById('userPassword')
const passwordUser= userPasswordFiled.value;
    // check email & password
if( userEmail == 'imran@bank.com' && passwordUser == 'web'){
    window.location.href = 'banking.html';
}

});

