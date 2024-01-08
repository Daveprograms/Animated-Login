function toggleForm() {
    var loginBox = document.getElementById('login-box');
    var signupBox = document.getElementById('signup-box');

    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
        loginBox.classList.add('animated'); 
        signupBox.classList.remove('animated'); 
    } else {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
        signupBox.classList.add('animated'); 
        loginBox.classList.remove('animated');
    }
}
