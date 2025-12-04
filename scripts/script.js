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