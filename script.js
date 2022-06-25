/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 300,
    // reset: true,
})

sr.reveal(`.journey, .seccion_1, .container-explorer, .vacation-container`)
sr.reveal(`.home__handle`, {delay: 50})
sr.reveal(`.pick`, {delay: 600, origin: 'bottom'})