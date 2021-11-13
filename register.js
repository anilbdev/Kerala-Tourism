
window.onload = function () {
    const myPhone = document.getElementById('myPhone')
    var message = document.getElementById('phoneMessage')
    myPhone.addEventListener('input', updateValue)
    function updateValue(e) {
        message.innerHTML = e.target.value
        
    }
}