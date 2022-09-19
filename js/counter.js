import {counterMain, controls, getCounterValue, createCounter, createButton, createInput} from './utils.js'


function updateCounter(counter, action, value){
    switch (action){
        case 'add':
            counter.innerHTML = (getCounterValue(counter) + parseInt(value)).toString()
            break;
        case 'sub':
            counter.innerHTML = (getCounterValue(counter) - value).toString()
            break;
        case 'reset':
            counter.innerHTML = '0'
            break;

        //insert action case below (the case must match a button action attribute)

        //insert above case below (the case must match a button action attribute)

    }
}

document.body.onload = () => {
    let counter = createCounter(counterMain, 0)
    createButton(controls, '-', 'sub')
    createButton(controls, '+', 'add')
    createButton(controls, 'RESET', 'reset')
    let incrementBy = createInput(controls, 'number', 'increment By')

    //Add your buttons Below this line

    //Add your buttons Above this line

    let buttons = [...controls.children]
    buttons.forEach(button => {
        button.onclick = () => {
            updateCounter(counter, button.id, incrementBy.value)
        }
    })


}




