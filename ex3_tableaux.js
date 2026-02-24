
const notes = [12, 8, 15, 10, 7];
let somme = 0;
let meilleureNote = notes[0];
let nombreAdmis = 0;

for (let i = 0; i < notes.length; i++) {
    
    somme += notes[i];
    if (notes[i] > meilleureNote) {
        meilleureNote = notes[i];
    }

    if (notes[i] >= 10) {
        nombreAdmis++;
    }
}
const moyenne = somme / notes.length;

console.log("--- Résumé des notes ---");
console.log(`Moyenne de la classe : ${moyenne}/20`);
console.log(`Meilleure note : ${meilleureNote}/20`);
console.log(`Nombre d'élèves ayant la moyenne : ${nombreAdmis}`);