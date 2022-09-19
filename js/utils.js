let counterMain = document.getElementById('counter-main')
let controls = document.getElementById('controls')

function createButton(parent, buttonText, action){
    let button = document.createElement('button')
    button.id = action
    button.innerHTML = buttonText
    parent.appendChild(button)
}

function createInput(parent, type, inputId){
    let inputContainer = document.createElement('div')
    inputContainer.classList.add('input-container')

    let label = document.createElement('label')
    label.setAttribute('for', inputId)
    label.innerHTML = inputId

    let input = document.createElement('input')
    input.id = inputId
    input.defaultValue = '1'
    inputContainer.appendChild(label)
    inputContainer.appendChild(input)
    parent.appendChild(inputContainer)
    return input
}

function createCounter(parent, value){
    let counter = document.createElement('h1')
    counter.id = 'counter'
    counter.innerHTML = value.toString()
    parent.appendChild(counter)
    return counter
}

function getCounterValue(counter){
    return parseInt(counter.innerHTML)
}

export {counterMain, controls, getCounterValue, createCounter, createButton, createInput}