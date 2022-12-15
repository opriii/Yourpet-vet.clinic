const button = document.querySelector('.button__popap');
if(button){
    button.addEventListener("click", function () {
        window.scrollTo({
            top:0,
            left:0,

        })
        const popap = document.querySelector('.popap')
        popap.classList.toggle('popap_active')
        const popapWrapper = document.querySelector('.popap__wrapper')
        popapWrapper.classList.toggle('popap__wrapper_active')
        const body = document.querySelector("body")
        body.classList.toggle('body__active')
    })
}
const buttonAnimals = document.querySelector(".left__title_button")
if(buttonAnimals){
    buttonAnimals.addEventListener("click", function () {
        window.scrollTo({
            top:0,
            left:0,

        })
        const popap = document.querySelector('.popap')
        popap.classList.toggle('popap_active')
        const popapWrapper = document.querySelector('.popap__wrapper')
        popapWrapper.classList.toggle('popap__wrapper_active')
        const body = document.querySelector("body")
        body.classList.toggle('body__active')
    })
}

const buttonCall = document.querySelector('.phone__button')
if(buttonCall){
    buttonCall.addEventListener("click", function () {
        window.scrollTo({
            top:0,
            left:0,

        })
        const popap = document.querySelector('.popap')
        popap.classList.toggle('popap_active')
        const popapWrapper = document.querySelector('.popap__wrapper')
        popapWrapper.classList.toggle('popap__wrapper_active')
        const body = document.querySelector("body")
        body.classList.toggle('body__active')
    })
}

const closeButton = document.querySelector('.popap__button');
closeButton.addEventListener("click", function () {
    const popap = document.querySelector('.popap')
    popap.classList.remove('popap_active')
    const popapWrapper = document.querySelector('.popap__wrapper')
    popapWrapper.classList.remove('popap__wrapper_active')
    const body = document.querySelector("body")
    body.classList.remove('body__active')

})
const sendForm = document.querySelector(".form__button")
sendForm.addEventListener("click", function () {
    const popap = document.querySelector('.popap')
    popap.classList.remove('popap_active')
    const popapWrapper = document.querySelector('.popap__wrapper')
    popapWrapper.classList.remove('popap__wrapper_active')
    const body = document.querySelector("body")
    body.classList.remove('body__active')

})