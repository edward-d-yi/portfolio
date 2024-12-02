document.querySelector('.fa-bars').addEventListener('click', () => {
    const nav =  document.querySelector('.nav_links');
    nav.classList.toggle('hide');
})

const backToTop = document.getElementById('back-to-top')

window.addEventListener('scroll', () => {
    if(window.scrollY > 700) {
        backToTop.classList.remove('hidden')
    } else {
        backToTop.classList.add('hidden')
    }
})

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
})