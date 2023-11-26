export class Joueur {
    constructor(hab, end, cha, arme, armure, objet, or, potion, repas) {
        this.hab = hab;
        this.end = end;
        this.cha = cha;

        this.habdep = hab;
        this.enddep = end + 5;
        this.chadep = cha;

        this.arme = arme;
        this.armure = armure;
        this.objet = objet;
        this.or = or;
        this.potion = potion;
        this.repas = repas;
    }
}