const tsnone = document.querySelector('.tsnone')
const tsomnie = document.querySelector('.tsomnie')
const insta = document.querySelector('.insta')
const facebook = document.querySelector('.facebook')


let root = document.documentElement;

const scrollBar = () => {
    const scroll = window.scrollY
    

    const lefttoScroll = document.body.getBoundingClientRect().height - window.innerHeight
    
    const scrollWidth = Math.floor((scroll/lefttoScroll) *100)

    root.style.setProperty('--scroll-width', `${scrollWidth}%`)


    if (scrollWidth  > 8 && scrollWidth < 14) {
        tsnone.classList.add('ts')
        tsomnie.style.textAlign = 'left';
    } 
    else if (scrollWidth > 94) {
        insta.classList.add ('instafaceblock')
        facebook.classList.add('instafaceblock')
    
    }
    else  {
        tsnone.classList.remove('ts')
        tsomnie.style.textAlign = 'center';
        insta.classList.remove ('instafaceblock')
        facebook.classList.remove('instafaceblock')
        
    }

  
}

    window.addEventListener('scroll', scrollBar)



