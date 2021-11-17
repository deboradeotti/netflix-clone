$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,

    /* Controla a quantidade de ítens que aparecem de acordo com o número de pixels da tela */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* O $ indica o uso do jQuery */