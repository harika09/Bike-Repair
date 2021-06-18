// ===== Scroll Reveal Animation ==== //
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});


srtop.reveal(`.article,
    .fees,
    .repair,
    .row,
    .cards`,{
    interval: 100
})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: false
});

srRight.reveal(`
    .about-img`,{
    interval: 100
})