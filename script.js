const submit = document.getElementById("submit")
const form = document.getElementsByName("form")
const warning = document.querySelector(".warning")
const succes = document.querySelector(".succes")

const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

const textarea = document.querySelector("#textarea")

const select = document.querySelector("#select")
let textArray = [firstName, lastName, email, password, textarea, select]

const radioUnemployed = document.querySelector("#unemployed")
const radioPart = document.querySelector("#part-time")
const radioFull = document.querySelector("#full-time")
let radioArray = [radioUnemployed, radioPart, radioFull]

function sendToAPI() {
    console.log("The API call is represented by this console.log")
    //this repesents an api call (we send the data to the api)
    //api call-t reprezentál ez a funkció (adatokat elküldjük az api-nak)
}

function checkForFilled() {
    let validValue = textArray.every((item)=> { return item.value !== ""})
    let validChecked = radioArray.some((item)=> {return item.checked === true})
    if (validChecked && validValue) {throwSucces();return true} else {throwError();return false}
}

function throwSucces() {
    warning.setAttribute("data-show","false")
    succes.setAttribute("data-show","true")
}

function throwError() {
    warning.setAttribute("data-show","true")
    succes.setAttribute("data-show","false")
}

submit.addEventListener("click",(event)=> {
    event.preventDefault()
    checkForFilled() && sendToAPI()
})