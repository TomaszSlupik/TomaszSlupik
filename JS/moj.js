const burger = document.querySelector('.burger')
const menunav = document.querySelector('.menunav')
const menunavshow = document.querySelector('.menunavshow')
const burgerTwo = document.querySelector('.burgerTwo')
const colormenuOne = document.querySelector('.colormenuOne')
const colormenuTwo = document.querySelector('.colormenuTwo')
const colormenuThree = document.querySelector('.colormenuThree')
const colormenuFour = document.querySelector('.colormenuFour')
const colormenuFive =document.querySelector('.colormenuFive')

const showMenu = () => {
    menunav.classList.toggle('menunavshow')
    burger.classList.toggle('burgerTwo')
    burgerTwo.style.display = 'block' 
    burger.style.display = 'none'
}


const closeMenu = () => {
    menunav.classList.toggle('menunavshow')
    burger.style.display = 'block'
    burger.style.color = 'dodgerblue'
    burgerTwo.style.display = 'none'
    
}


burger.addEventListener('click', showMenu)
burgerTwo.addEventListener('click', closeMenu)
colormenuOne.addEventListener('click', closeMenu)
colormenuTwo.addEventListener('click', closeMenu)
colormenuThree.addEventListener('click', closeMenu)
colormenuFour.addEventListener('click', closeMenu)
colormenuFive.addEventListener('click', closeMenu)
