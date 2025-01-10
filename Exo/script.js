const Case1 = document.getElementById('case1')
const Case2 = document.getElementById('case2')
const Case3 = document.getElementById('case3')
const Case4 = document.getElementById('case4')
const Case5 = document.getElementById('case5')
const Case6 = document.getElementById('case6')
const Case7 = document.getElementById('case7')
const Case8 = document.getElementById('case8')
const Case9 = document.getElementById('case9')
const Nomjoueur = document.getElementById('nom-joueur')
const victoire = document.getElementById('v-joueur')
const animation = document.querySelector('animation')
const bouton = document.querySelector('bouton')

let tourX = false;

let scoreX = 0;

let scoreO = 0;

let tours=1;

Nomjoueur.innerHTML = "Tour du joueur X"


/* INITIALISATION*/


function TourJoueur() {
    
    if (tourX == true) {
        Nomjoueur.innerHTML = "Tour du joueur X"
    }

    else {
        Nomjoueur.innerHTML = "Tour du joueur O"
    }
}

/* FONCTION DE CRÉATION DE TOUR DES JOUEURS */

function testCase1(event) {
    if (case1.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX1 = case1.innerHTML = "X"
        }
        else {
            const ContenuO1 = case1.innerHTML = "O"
        }
    }
}

Case1.addEventListener('click', TourJoueur)
Case1.addEventListener('click', testCase1)
Case1.addEventListener('click', Victory)

/* TEST POUR LA CASE 1 */

function testCase2(event) {
    if (case2.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX2 = case2.innerHTML = "X"
        }
        else {
            const ContenuO2 = case2.innerHTML = "O"
        }
    }
}

Case2.addEventListener('click', TourJoueur)
Case2.addEventListener('click', testCase2)
Case2.addEventListener('click', Victory)

/* TEST POUR LA CASE 2 */

function testCase3(event) {
    if (case3.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX3 = case3.innerHTML = "X"
        }
        else {
            const ContenuO3 = case3.innerHTML = "O"
        }
    }
}

Case3.addEventListener('click', TourJoueur)
Case3.addEventListener('click', testCase3)
Case3.addEventListener('click', Victory)

/* TEST POUR LA CASE 3 */

function testCase4(event) {
    if (case4.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX4 = case4.innerHTML = "X"
        }
        else {
            const ContenuO4 = case4.innerHTML = "O"
        }
    }
}

Case4.addEventListener('click', TourJoueur)
Case4.addEventListener('click', testCase4)
Case4.addEventListener('click', Victory)

/* TEST POUR LA CASE 4 */

function testCase5(event) {
    if (case5.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX5 = case5.innerHTML = "X"
        }
        else {
            const ContenuO5 = case5.innerHTML = "O"
        }
    }
}

Case5.addEventListener('click', TourJoueur)
Case5.addEventListener('click', testCase5)
Case5.addEventListener('click', Victory)

/* TEST POUR LA CASE 5 */

function testCase6(event) {
    if (case6.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX6 = case6.innerHTML = "X"
        }
        else {
            const ContenuO6 = case6.innerHTML = "O"
        }
    }
}

Case6.addEventListener('click', TourJoueur)
Case6.addEventListener('click', testCase6)
Case6.addEventListener('click', Victory)

/* TEST POUR LA CASE 6 */

function testCase7(event) {
    if (case7.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX7 = case7.innerHTML = "X"
        }
        else {
            const ContenuO7 = case7.innerHTML = "O"
        }
    }
}

Case7.addEventListener('click', TourJoueur)
Case7.addEventListener('click', testCase7)
Case7.addEventListener('click', Victory)

/* TEST POUR LA CASE 7 */

function testCase8(event) {
    if (case8.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX8 = case8.innerHTML = "X"
        }
        else {
            const ContenuO8 = case8.innerHTML = "O"
        }
    }
}

Case8.addEventListener('click', TourJoueur)
Case8.addEventListener('click', testCase8)
Case8.addEventListener('click', Victory)

/* TEST POUR LA CASE 8 */

function testCase9(event) {
    if (case9.innerHTML == "") {
        tourX = !tourX
        tours=tours+1
        if (tourX == true) {
            const ContenuX9 = case9.innerHTML = "X"
        }
        else {
            const ContenuO9 = case9.innerHTML = "O"
        }
    }
}

Case9.addEventListener('click', TourJoueur)
Case9.addEventListener('click', testCase9)
Case9.addEventListener('click', Victory)

/* TEST POUR LA CASE 9 */
function init ( ) {
   bouton.className.remove('hidden')
   bouton.className.add('shown')
function MiseEnAttente () {
    case1.innerHTML = ""; case2.innerHTML = ""; case3.innerHTML = ""; case4.innerHTML = ""; case5.innerHTML = ""; case6.innerHTML = ""; case7.innerHTML = ""; case8.innerHTML = ""; case9.innerHTML = "";
    tours=1
}
setTimeout(MiseEnAttente2, 5000)
function MiseEnAttente2 () {
const init2= victoire.innerHTML = ""
let tourX = true;

tours=1;}}




/* FONCTION POUR GAGNER */


function Victory() {
    /* TEST POUR X */
    /* TEST POUR LES LIGNES */
    if (case1.innerHTML == "X" && case2.innerHTML == "X" && case3.innerHTML == "X") {
        const victoryX1 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        setTimeout(init, 2000)
        
    }
    else if (case4.innerHTML == "X" && case5.innerHTML == "X" && case6.innerHTML == "X") {
        const victoryX2 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case9.innerHTML == "X" && case8.innerHTML == "X" && case7.innerHTML == "X") {
        const VictoryX3 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1

        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }

    /* TEST POUR LES COLONES*/

    if (case1.innerHTML == "X" && case4.innerHTML == "X" && case7.innerHTML == "X") {
        const victoryX4 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case2.innerHTML == "X" && case5.innerHTML == "X" && case8.innerHTML == "X") {
        const victoryX5 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case3.innerHTML == "X" && case6.innerHTML == "X" && case9.innerHTML == "X") {
        const VictoryX6 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }

    /* TEST POUR LES DIAGONALES*/

    if (case1.innerHTML == "X" && case5.innerHTML == "X" && case9.innerHTML == "X") {
        const victoryX7 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case3.innerHTML == "X" && case5.innerHTML == "X" && case7.innerHTML == "X") {
        const victoryX8 = victoire.innerHTML = "Le joueur X a gagné !"
        scoreX = scoreX + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }


    /* TEST POUR O */
    /* TEST POUR LES LIGNES */
    if (case1.innerHTML == "O" && case2.innerHTML == "O" && case3.innerHTML == "O") {
        const victoryX1 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case4.innerHTML == "O" && case5.innerHTML == "O" && case6.innerHTML == "O") {
        const victoryX2 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case9.innerHTML == "O" && case8.innerHTML == "O" && case7.innerHTML == "O") {
        const VictoryX3 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreo = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
        
    }

    /* TEST POUR LES COLONES*/

    if (case1.innerHTML == "O" && case4.innerHTML == "O" && case7.innerHTML == "O") {
        const victoryX4 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }
    else if (case2.innerHTML == "O" && case5.innerHTML == "O" && case8.innerHTML == "O") {
        const victoryX5 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)

    }
    else if (case3.innerHTML == "O" && case6.innerHTML == "O" && case9.innerHTML == "O") {
        const VictoryX6 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)
    }

    /* TEST POUR LES DIAGONALES*/

    if (case1.innerHTML == "O" && case5.innerHTML == "O" && case9.innerHTML == "O") {
        const victoryX7 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1 
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)

    }
    else if (case3.innerHTML == "O" && case5.innerHTML == "O" && case7.innerHTML == "O") {
        const victoryX8 = victoire.innerHTML = "Le joueur O a gagné !"
        scoreO = scoreO + 1
        
        
        setTimeout(MiseEnAttente, 2000)
        setTimeout(MiseEnAttente2, 5000)

    }
    else if (tours>=10) {

        const equale = victoire.innerHTML = "Personne n'a gagner "  

    }
}




