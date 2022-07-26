/* # -> Commenti seguiti da asterisco sono i passaggi necessari per il corretto funzionamento app */

/* #1 - Prendo il mio span con classe count  */
const count = document.querySelector(".count")
console.log(count); /* Lo verifico in console */

/* #1.1 - Prendo il mio button con classe substract  */
const substract = document.querySelector(".substract")
console.log(substract); /* Lo verifico in console */

/* #1.2 - Prendo il mio button con classe add  */
const add = document.querySelector(".add")
console.log(add); /* Lo verifico in console */

/* #1.3 - Prendo il mio button con classe reset  */
const resetCount = document.querySelector(".reset")
console.log(resetCount); /* Lo verifico in console */

/* #1.4 - Scateno un evento sul pulsante Add che, al click dovrà cambiare valore (in positivo) allo span .count */
add.addEventListener("click", () => {
    /* console.log("Stai cliccando su Add"); */ // Verifico in console
    count.innerHTML++; // Questo incrementa lo span di 1
})

/* #1.5 - Scateno un evento sul pulsante substract che, al click dovrà cambiare valore (in negativo) allo span .count */
substract.addEventListener("click", () => {
    /* console.log("Stai cliccando su substract"); */ // Verifico in console
    count.innerHTML--; // Questo decrementa lo span di 1
})

/* #1.6 - Scateno un evento sul pulsante reset che, al click dovrà cambiare resettare il valore allo span .count */
resetCount.addEventListener("click", () => {
    /* console.log("Stai cliccando su reset"); */ // Verifico in console
    count.innerHTML = 0; // Questo riporta il valore a 0
})

