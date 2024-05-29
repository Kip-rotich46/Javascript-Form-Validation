// Utility functions (if needed)

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');

let successIcon = document.getElementsByClassName('success-icon');
let failureIcon = document.getElementsByClassName('failure-icon');

let errorMsg = document.getElementsByClassName('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let userFunc = function () {
        if (username.value.trim() === "") {
            errorMsg[0].innerHTML = 'Username cannot be blank';
            failureIcon[0].style.opacity ='1';
            successIcon[0].style.opacity = '0';
            
        } else {
            errorMsg[0].innerHTML = '';
            failureIcon[0].style.opacity ='0';
            successIcon[0].style.opacity = '1';
            
        }
    }

    let userEmail = function () {
        if (email.value.trim() === "") {
            errorMsg[1].innerHTML = 'Email cannot be blank';
            failureIcon[1].style.opacity ='1';
            successIcon[1].style.opacity = '0';
            
        } else {
            errorMsg[1].innerHTML = '';
            failureIcon[1].style.opacity ='0';
            successIcon[1].style.opacity = '1';
            
        }
    }

    let userPass = function () {
        if (password.value.trim() === "") {
            errorMsg[2].innerHTML = 'Password cannot be blank';
            failureIcon[2].style.opacity ='1';
            successIcon[2].style.opacity = '0';
            
        } else {
            errorMsg[2].innerHTML = '';
            failureIcon[2].style.opacity ='0';
            successIcon[2].style.opacity = '1';
            
        }
    }
    userFunc()
    userEmail()
    userPass()


    
});

