//import JSON file
import cuisine from './cuisine.json' assert { type: 'json' }
//define all HTML elements
const button = document.getElementsByClassName('button')[0]
const title = document.getElementsByClassName('title')[0]
const result = document.getElementsByClassName('result')[0]
const msg = document.getElementsByClassName('msg')[0]
const specific = document.getElementsByClassName('specific')[0]
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


    msg.classList.remove('hide')
    title.innerText = "Try something..."
    title.style.fontSize = "25px"
    title.style.color = "black"
    result.innerText = main
    msg.innerText = "More Specific?"
    specific.innerText = sub[j]

        button.value = "Try Again?"
    result.classList.remove('start')
    title.classList.remove('none')
    msg.classList.remove('none')
    msg.addEventListener('click', () =>{specific.classList.remove('hide'); msg.classList.add('hide')})
    button.addEventListener('click', () => {specific.classList.add('hide')})

})

