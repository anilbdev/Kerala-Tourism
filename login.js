window.onload = function () {
    const form = document.getElementById('myForm');
    const email = document.getElementById('myEmail');
    const password = document.getElementById('myPassword');
    form.addEventListener('submit', e => {
        e.preventDefault();
        checkInputs();
        console.log('main function')
    })
    function checkInputs() {
        // trim to remove the whitespaces
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        // email check//
        if (emailValue === '') {
            setErrorFor(email, 'email cannot be blank')
            console.log("2 if")
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email')
        }
        else {
            setSuccessFor(email);
        }
        //password check//
        if (passwordValue === '') {
            setErrorFor(password, 'password cannot be blank');
        } else if (isStrongPassword(passwordValue)) {
            setSuccessFor(password);
        }else{
            setErrorFor(password, 'Wrong password') 
        }
    }
    // message functions
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'myForm-controlError';
        small.innerText = message;
    }
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'myForm-controlSuccess';
    }
    // email check function
    function isEmail(email) {
        console.log('is email ')
        let RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return RegExp.test(email);
    }
    // password check function
    function isStrongPassword(password) {
        let phoneRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
        return phoneRegExp.test(password)
    }
}