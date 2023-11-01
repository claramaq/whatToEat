//import JSON file
import cuisine from './cuisine.json' assert { type: 'json' }
//define all HTML elements
const button = document.getElementById('button')
const title = document.getElementById('title')
const result = document.getElementById('result')
const msg = document.getElementById('msg')
const specific = document.getElementById('specific')
const credit = document.getElementsByClassName('footer')[0]

//hide some things from the beginning
title.classList.add('none')
msg.classList.add('none')
specific.classList.add('hide')
result.classList.add('id','start')
button.classList.add('start-min')


button.addEventListener('click', function feedMe() {
    const i = Math.floor(Math.random() * cuisine.length);
    const j = Math.floor(Math.random() * cuisine[i].subType.length);
    const main = cuisine[i].mainType
    const sub = cuisine[i].subType


    
    title.innerText = "Try eating something from..."
    title.style.fontSize = "25px"
    title.style.color = "black"
    result.innerText = main
    msg.innerText = "More Specific?"
    specific.innerText = sub[j]

        button.value = "Try Again?"
    result.classList.remove('start')
    button.classList.remove('start-min')
    credit.classList.remove('start-min')
    title.classList.remove('none')
    msg.classList.remove('none')
    msg.addEventListener('click', () =>{specific.classList.remove('hide')})
    button.addEventListener('click', () => {specific.classList.add('hide')})
})

