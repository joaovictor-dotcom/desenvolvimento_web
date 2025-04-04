window.sr = ScrollReveal({ reset: true})

sr.reveal('.revealRight', {
    durantion: 5000,
    origin: 'right',
    distance: '20%',
    delay: 200
})
sr.reveal('.revealLeft', {
    durantion: 5000,
    origin: 'left',
    distance: '20%',
    delay: 200
})
sr.reveal('.revealIn', {
    durantion: 5000,
    rotate: {x: 0, y: 80, z: 0},
    delay: 200
})

// jQuery
$(document).ready(function(){
    $('.fa-bars').on('click', function() {
        $('#mobileMenu').toggleClass('active')
    })
})