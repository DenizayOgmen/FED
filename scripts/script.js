// JavaScript Document
console.log("hi");

// JE MAAKT EEN DOOSJE, DIE NOEM JE FILM
//  IN HET DOOSJE FILM, STOP JE DE WAARDE DIE JE UIT DE HTML HAALT

// JE MAAKT EEN FUNCTIE, SCHRIJFT HOE DEZE MOET WERKEN EN GEEFT EEN PLACEHOLDER MEE (ITEM)
// JE ROEPT UIT EINDELIJK DE FUNCTIE, MET ALS WAARDE HET DOOSJE.

const film = document.querySelector(".Films > ul > li:nth-of-type(1)");

function klikFilm(item){
    item.addEventListener("click", ()=>{
        item.classList.toggle("grow")        
    })
}

klikFilm(film);

// MAAK DAT DE HEADER WIT WORDT EN OP DE TOP BLIJFT PLAKKEN

const header = document.querySelector('header');

document.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition)
    if (window.scrollY > 600) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
});
