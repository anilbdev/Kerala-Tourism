

window.onload = function () {

    const form = document.getElementById('myForm');
    const userName = document.getElementById('myName');
    const email = document.getElementById('myEmail');
    const phone = document.getElementById('myPhone');
    const password = document.getElementById('myPassword');

    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
        console.log('main function')

    })

    function checkInputs() {
        // trim to remove the whitespaces
        const userNameValue = userName.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const passwordValue = password.value.trim();


        if (userNameValue === '') {
            console.log("1 if")
            setErrorFor(userName, 'Username cannot be blank');
        }
        else {
            setSuccessFor(userName);
            console.log("else condition")
        }
        //phone number//
        if (phoneValue === '') {
            setErrorFor(phone, 'Phone Number cannot be blank')
        } 
        else if(!isValidPhone(phoneValue)){
            console.log('isphonenumenr fin?? ',isValidPhone(phoneValue) )
            setErrorFor(phone, 'Not a valid Phone number')
        }
        else {
            setSuccessFor(phone);
        }

        // email check//
        if (emailValue === '') {
            setErrorFor(email, 'email cannot be blank')
            console.log("2 if")
        } else if (!isEmail(emailValue)) {
            
            setErrorFor(email, 'Not a valid email')
        }
        else {
            setSuccessFor(email);
            console.log("2 else condition")
        }

        //password check//
        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }
    }

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
    function isEmail(email) {
        console.log('is email ')
        let RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return RegExp.test(email);
    }
    function isValidPhone(phone){
        let phoneRegExp=  /^\d{3}[\s.-]?\d{3}[\s.-]?\d{4}$/
        return phoneRegExp.test(phone)
    }

}

   
