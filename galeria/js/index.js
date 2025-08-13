// DOM

const x = document.querySelector('#x')

const neymar = document.querySelector('#neymar')
const cr7 = document.querySelector('#cr7')
const messi = document.querySelector('#messi')

// eventos

neymar.addEventListener('click',neymar2)
cr7.addEventListener('click',cr72)
messi.addEventListener('click',messi2)

// funções

function neymar2(){
    x.src = 'images/Neymar.jpg'
}
function cr72(){
    x.src = 'images/cristiano-ronaldo-al-nassr-e1738614469513.jpg'
}
function messi2(){
    x.src = 'images/lionel-messi-barcelona.jpg'
}

