/* # -> Commenti seguiti da asterisco sono i passaggi necessari per il corretto funzionamento app */

/* #1 - Prendo il mio span con classe count  */
/* const count = document.querySelector(".count")
console.log(count);  *//* Lo verifico in console */

//#region METODO 1 (Obsoleto)

/* #1.1 - Prendo il mio button con classe substract  */
/* const substract = document.querySelector(".substract")
console.log(substract); */ /* Lo verifico in console */

/* #1.2 - Prendo il mio button con classe add  */
/* const add = document.querySelector(".add")
console.log(add); */ /* Lo verifico in console */

/* #1.3 - Prendo il mio button con classe reset  */
/* const resetCount = document.querySelector(".reset")
console.log(resetCount); */ /* Lo verifico in console */


/* #1.4 - Scateno un evento sul pulsante Add che, al click dovrà cambiare valore (in positivo) allo span .count */
/* add.addEventListener("click", () => { */
/* console.log("Stai cliccando su Add"); */ // Verifico in console
/*     count.innerHTML++; // Questo incrementa lo span di 1
}) */

/* #1.5 - Scateno un evento sul pulsante substract che, al click dovrà cambiare valore (in negativo) allo span .count */
/* substract.addEventListener("click", () => { */
/* console.log("Stai cliccando su substract"); */ // Verifico in console
/*     count.innerHTML--; // Questo decrementa lo span di 1
}) */

/* #1.6 - Scateno un evento sul pulsante reset che, al click dovrà cambiare resettare il valore allo span .count */
/* resetCount.addEventListener("click", () => { */
/* console.log("Stai cliccando su reset"); */ // Verifico in console
/*     count.innerHTML = 0; // Questo riporta il valore a 0
}) */

//#endregion METODO 1


//#region METODO 2 

/* #2 - Prendo il mio span con classe count  */
const count = document.querySelector(".count")
console.log(count); /* Lo verifico in console */

/* #2.1 - Prendo il mio div di bottoni principale  */
const buttons = document.querySelector(".buttons")
console.log(buttons); /* Lo verifico in console */

/* #2.2 - alla mia costante buttons avvio un evento con condizioni per tutti e 3 i buttons */
buttons.addEventListener("click", (e) => {
    /* SE nella lista di classi di buttons trovo un button con classe add */
    if (e.target.classList.contains("add")) {
        console.log("Add");
        count.innerHTML++; // Questo incrementa lo span di 1
        setColor()
    }
    /* SE nella lista di classi di buttons trovo un button con classe reset */
    if (e.target.classList.contains("reset")) {
        console.log("Reset");
        count.innerHTML = 0; // Questo riporta il valore a 0
        setColor()
    }
    /* SE nella lista di classi di buttons trovo un button con classe substract */
    if (e.target.classList.contains("substract")) {
        console.log("Substract");
        count.innerHTML--; // Questo decrementa lo span di 1
        setColor()
    }
})

/* #2.3 - Creo una funzione per modificare il colore dello span in caso di valore positivo o negativo */
/**
 * Funzione necessaria per il cambio del colore testo in caso di numero positivo o negativo
 */
function setColor() {
    /* SE valore è superiore a 0 */
    if (count.innerHTML > 0) {
        /* Il testo diventa verde */
        count.style.color = "green"
    } else if (count.innerHTML < 0) {
        /* Il testo diventa rosso */
        count.style.color = "orangered"
    } else {
        /* Il testo rimane normale */
        count.style.color = "#fff"
    }
}


//#endregion
