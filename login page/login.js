document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const toggleLink = document.getElementById('toggle-link');
    
    function showLoginForm() {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        toggleLink.textContent = 'Sign up';
    }

    function showSignupForm() {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        toggleLink.textContent = 'Log in';
    }

    showLoginForm(); 
    toggleLink.addEventListener('click', function() {
        if (loginForm.classList.contains('active')) {
            showSignupForm();
        } else {
            showLoginForm();
        }
    });
});
