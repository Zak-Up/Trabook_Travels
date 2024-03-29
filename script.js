/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
    // reset: true,
})

sr.reveal(`.journey, .seccion_1, .container-explorer, .vacation-container, .section2J, .deals, .updates`)
sr.reveal(`.home__handle`, {delay: 50})
sr.reveal(`.pick, .subscribe-container`, {delay: 600, origin: 'bottom'})