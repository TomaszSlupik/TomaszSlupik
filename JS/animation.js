const question = document.querySelector('.question')
const questiontwo = document.querySelector('.questiontwo')
const questionthree = document.querySelector('.questionthree')
const shadowwrap = document.querySelector('.shadowwrap')
const shadowwrapTwo = document.querySelector('.shadowwrapTwo')
const shadowwrapThree = document.querySelector('.shadowwrapThree')
const shadowwrapnone = document.querySelector('.shadowwrapnone')
const shadowwrapnoneTwo = document.querySelector('.shadowwrapnoneTwo')
const shadowwrapnoneThree = document.querySelector('.shadowwrapnoneThree')
const questionqhite = document.querySelector('.questionqhite')
const wrapptext = document.querySelector('.wrapptext')
const wrapptextTwo = document.querySelector('.wrapptextTwo')
const wrapptextThree = document.querySelector('.wrapptextThree')

const showtextwrap = () => {
    shadowwrap.classList.toggle('shadowwrapnone')
    question.classList.toggle ('questionqhite')
    wrapptext.classList.toggle('wrapptextblock')
}



const showtextwrapTwo = () => {
    shadowwrapTwo.classList.toggle("shadowwrapnoneTwo")
    questiontwo.classList.toggle ('questionqhitetwo')
    wrapptextTwo.classList.toggle('wrapptextblock')
}


const showtextwrapThree = () => {
    shadowwrapThree.classList.toggle("shadowwrapnoneThree")
    questionthree.classList.toggle ('questionqhitethree')
    wrapptextThree.classList.toggle('wrapptextblock')
}


question.addEventListener('click', showtextwrap)
questiontwo.addEventListener('click', showtextwrapTwo)
questionthree.addEventListener('click', showtextwrapThree)