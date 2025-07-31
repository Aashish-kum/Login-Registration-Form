let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signInBtn');
let nameField = document.querySelector('.namefield');
let Title = document.querySelector('.title');
let underLine = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    Title.innerHTML = 'Sign In';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underLine.style.transform = 'translateX(36px)';
    text.innerHTML = 'Lost Password';
})

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    Title.innerHTML = 'Sign Up'; 
    signInBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
    underLine.style.transform = 'translateX(0px)';
    text.innerHTML = 'Password Suggestions';
})

