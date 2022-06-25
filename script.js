/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true,
})

sr.reveal(`.journey`)
sr.reveal(`.home__handle`, {delay: 50})
sr.reveal(`.pick`, {delay: 600, origin: 'bottom'})