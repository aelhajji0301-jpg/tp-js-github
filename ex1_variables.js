
function infosEtudiant(nom, note) {
    
    let statut;
    
    if (note >= 10) {
        statut = "Admis";
    } else {
        statut = "Ajourné";
    }

    
    return `${nom} : ${note}/20 → ${statut}`;
}


console.log(infosEtudiant("omar", 17)); 
console.log(infosEtudiant("ali", 9)); 