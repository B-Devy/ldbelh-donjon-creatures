import { scenario } from './scenario.js'
import { Monstre } from './monstresheet.js'
import { Joueur } from './joueursheet.js'

let player = {};
let paraCourantObj = scenario[0];  
let marqueurOnglet = false;
let monstreCourant = {};
let d6num1;
let d6num2;  

const ecran = document.getElementById('ecran');
const paragraphe = document.getElementById('paragraphe');
const btnLanceur = document.getElementById('lanceur-des');
btnLanceur.addEventListener('click', lanceur);
const d6num1cont = document.getElementById('d6num1');
const d6num2cont = document.getElementById('d6num2');
const boutonCreation = document.getElementById('create-heros')
boutonCreation.addEventListener('click', createPlayer);

const creatureContainer = document.getElementById('creature-sheet');
const creatureHab = document.getElementById('hab-creature');
const creatureEnd = document.getElementById('end-creature');
const h3 = document.querySelector('h3')

/*-----------AFFICHAGE DE LA FICHE PERSO--------------*/

const opener = document.getElementById('opener');
opener.addEventListener('click', ouvreFerme);

function ouvreFerme() {
    let onglet = document.getElementById('onglet');
    if (!marqueurOnglet) {
        onglet.style.right = "0";
        marqueurOnglet = true;
    } else {
        onglet.style.right = "-380px";
        marqueurOnglet = false;
    }
}

/*-----------AFFICHAGE DU PARAGRAPHE--------------*/

function affichePara() {
    console.log({paraCourantObj})
    h3.innerHTML = paraCourantObj.numero;
    paragraphe.innerHTML = paraCourantObj.texte;
    

    if (paraCourantObj.numero != 0) {
        boutonCreation.style.display = "none"
    } else {
        boutonCreation.style.display = "initial"
    }

    if (paraCourantObj.illustration) {
        ecran.style.backgroundImage = 'url("' + paraCourantObj.src + '")'
    } else {
        ecran.style.backgroundImage = ""
        console.log("pas d'image")
    }

    if (paraCourantObj.combat) {
        monstreCourant = new Monstre(paraCourantObj.creature.nom, paraCourantObj.creature.hab, paraCourantObj.creature.end)
        creatureHab.innerHTML = monstreCourant.hab;
        creatureEnd.innerHTML = monstreCourant.end;
        console.log(monstreCourant)
        creatureContainer.style.display = "flex";
        const ennScore = document.getElementById('ennscore');
        
        
        function lanceurCombat() {
            d6num1 = null;
            d6num2 = null;
            btnLanceur.addEventListener('click', round)

            function round() {
                let resEnnemi = Math.floor(Math.random() * (12 - 2 + 2)) + 2;
                ennScore.innerText = resEnnemi;
                lanceur();
                if (player.hab + d6num1 + d6num2 > monstreCourant.hab + resEnnemi) {
                    console.log('Héros touche !' +  (player.hab + d6num1 + d6num2 ) )
                    monstreCourant.end -= 2;
                    creatureEnd.innerHTML = monstreCourant.end;
                    if (monstreCourant.end <= 0) {
                        console.log('Monstre battu !');
                        mettrePara()
                        paraCourantObj.combat = false
                    }
                } else if (player.hab + d6num1 + d6num2 < monstreCourant.hab + resEnnemi) {
                    console.log('Créature touche !')
                } else {
                    console.log('match nul !' + {resEnnemi})
                }
            }
        }
        lanceurCombat();

    } else {
        creatureContainer.style.display = "none";
        let span = document.getElementsByTagName('span');
        let span2 = Array.from(span)
        console.log(span2)
        span2.map((s) => s.addEventListener('click', () => {
            let currentPara = s.getAttribute('name')
            let currentObject = scenario.find(e => e.numero == currentPara)
            paraCourantObj = currentObject;
            mettrePara();
            affichePara();
        }))
    }

    function mettrePara() {
        console.log('Mettre les para ok')
    }
    
    

    
}

affichePara()

/*-----------LANCEUR DE DES--------------*/

function lanceur() {
    d6num1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    d6num2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    d6num1cont.innerHTML = d6num1;
    d6num2cont.innerHTML = d6num2;

    function diceImager(variable, container) {
        switch(variable) {
            case 1: container.style.backgroundImage = "url('dice/face1.png')";
            break;
            case 2: container.style.backgroundImage = "url('dice/face2.png')";
            break;
            case 3: container.style.backgroundImage = "url('dice/face3.png')";
            break;
            case 4: container.style.backgroundImage = "url('dice/face4.png')";
            break;
            case 5: container.style.backgroundImage = "url('dice/face5.png')";
            break;
            case 6: container.style.backgroundImage = "url('dice/face6.png')";
            break;
        }
    }
    
    diceImager(d6num1, d6num1cont);
    diceImager(d6num2, d6num2cont);
    //console.log(d6num1 + ' ' + d6num2)
}

/*-----------CREATION DE PERSO--------------*/

const joueurHab = document.getElementById('hab-score');
const joueurEnd = document.getElementById('end-score');
const joueurCha = document.getElementById('cha-score');
const arme1Nom = document.getElementById('case-arme-nom-1');
const arme1Dgt = document.getElementById('case-arme-dgt-1');
const arme2Nom = document.getElementById('case-arme-nom-2');
const arme2Dgt = document.getElementById('case-arme-dgt-1');
const orScore = document.getElementById('or-score');
const potionScore = document.getElementById('potion-score');
const repasScore = document.getElementById('repas-score');



function createPlayer() {

    
    let hab = (Math.floor(Math.random() * (6 - 1 + 1)) + 1) + 6;
    let end = (Math.floor(Math.random() * (12 - 2 + 2)) + 2) + 12;
    let cha = (Math.floor(Math.random() * (6 - 1 + 1)) + 1) + 6;
    let arme = "Epée";
    let armure = "Armure de cuir";
    let objet = ["néant"];
    let or = 5;
    let potion = "Potion de santé";
    let repas = 2;

    player = new Joueur(hab, end, cha, arme, armure, objet, or, potion, repas)
    console.log(player)
    joueurHab.innerText = player.hab;
    joueurEnd.innerText = player.end;
    joueurCha.innerText = player.cha;
    arme1Nom.innerText = player.arme;
    orScore.innerText = player.or;
    potionScore.innerText = player.armure;
    repasScore.innerText = player.repas

}



