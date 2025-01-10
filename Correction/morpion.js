// On gère le tour X ou O, au début forcément X
let tourX = true

// On attrappe les 9 cases du plateau
const case1 = document.querySelector('.case1')
const case2 = document.querySelector('.case2')
const case3 = document.querySelector('.case3')
const case4 = document.querySelector('.case4')
const case5 = document.querySelector('.case5')
const case6 = document.querySelector('.case6')
const case7 = document.querySelector('.case7')
const case8 = document.querySelector('.case8')
const case9 = document.querySelector('.case9')

// gestion du click sur la case 1 (pareil sur les 9 autres fonctions)
function clickCase1() {
    // on change le tour X -> O ou O -> X
    tourX = !tourX
    // On attrape le titre
    const h2 = document.querySelector('h2')
    // On vérifie que la case est vide, ni X, ni O
    if (case1.innerHTML == "") {
        // Si c'est au tour de X
        if (tourX == true) {
            // On modifie le titre pour dire que c'est à X de jouer
            h2.innerHTML = "Tour du joueur X"
            // Si c'est à X de jouer c'est que O vient de clicker
            case1.innerHTML = "O"
        }
        // Sinon c'est forcément au tour de O 
        else {
            // On modifie le titre pour dire que c'est à O de jouer
            h2.innerHTML = "Tour du joueur O"
            // Si c'est à O de jouer c'est que X vient de clicker
            case1.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase2() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case2.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case2.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case2.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase3() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case3.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case3.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case3.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase4() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case4.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case4.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case4.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase5() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case5.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case5.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case5.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase6() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case6.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case6.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case6.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase7() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case7.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case7.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case7.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase8() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case8.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case8.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case8.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function clickCase9() {
    tourX = !tourX
    const h2 = document.querySelector('h2')
    if (case9.innerHTML == "") {
        if (tourX == true) {
            h2.innerHTML = "Tour du joueur X"
            case9.innerHTML = "O"
        } else {
            h2.innerHTML = "Tour du joueur O"
            case9.innerHTML = "X"
        }
        const gain = testVictoire()
        const result = document.querySelector('.result')
        // X à gagné
        if (gain == "X") {
            result.innerHTML = "Le joueur X à gagné"
        }
        // O à gagné
        else if (gain == "O") {
            result.innerHTML = "Le joueur O à gagné"
        }
        // personne n'à gagné
        else {
            result.innerHTML = ""
        }
    }
}
function testVictoire() {
    // test première ligne
    if (case1.innerHTML == case2.innerHTML && case2.innerHTML == case3.innerHTML && (case3.innerHTML == "X" || case3.innerHTML == "O")) {
        return case3.innerHTML
    }
    // test deuxième ligne
    else if (case4.innerHTML == case5.innerHTML && case5.innerHTML == case6.innerHTML && (case6.innerHTML == "X" || case6.innerHTML == "O")) {
        return case6.innerHTML
    }
    // test troisième ligne
    else if (case7.innerHTML == case8.innerHTML && case8.innerHTML == case9.innerHTML && (case9.innerHTML == "X" || case9.innerHTML == "O")) {
        return case9.innerHTML
    }
    // test première colonne
    else if (case1.innerHTML == case4.innerHTML && case4.innerHTML == case7.innerHTML && (case7.innerHTML == "X" || case7.innerHTML == "O")) {
        return case7.innerHTML
    }
    // test deuxième colonne
    else if (case2.innerHTML == case5.innerHTML && case5.innerHTML == case8.innerHTML && (case8.innerHTML == "X" || case8.innerHTML == "O")) {
        return case8.innerHTML
    }
    // test troisième colonne
    else if (case3.innerHTML == case6.innerHTML && case6.innerHTML == case9.innerHTML && (case9.innerHTML == "X" || case9.innerHTML == "O")) {
        return case9.innerHTML
    }
    // test première diagonale
    else if (case1.innerHTML == case5.innerHTML && case5.innerHTML == case9.innerHTML && (case9.innerHTML == "X" || case9.innerHTML == "O")) {
        return case9.innerHTML
    }
    // test deuxième diagonale
    else if (case3.innerHTML == case5.innerHTML && case5.innerHTML == case7.innerHTML && (case7.innerHTML == "X" || case7.innerHTML == "O")) {
        return case7.innerHTML
    }
    // si pas gagné
    else {
        return ""
    }
}

// on ajoute l'évènement de click sur chaque case
case1.addEventListener("click", clickCase1)
case2.addEventListener("click", clickCase2)
case3.addEventListener("click", clickCase3)
case4.addEventListener("click", clickCase4)
case5.addEventListener("click", clickCase5)
case6.addEventListener("click", clickCase6)
case7.addEventListener("click", clickCase7)
case8.addEventListener("click", clickCase8)
case9.addEventListener("click", clickCase9)