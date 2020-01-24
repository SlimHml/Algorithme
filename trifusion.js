const mergeSort = array => {
    // Checker si le tableau peut être split
    if (array.length < 2) return array;

    // Vérifier si un index du milieu est trouvable
    const milieu = Math.floor(array.length / 2);

    // Split le tableau en deux
    const cotéGauche = array.slice(0, milieu);
    const cotéDroit = array.slice(milieu, array.length)

    // Récursion: Continuer à split jusqu'à n'avoir qu'un digit par tableau
    return merge(mergeSort(cotéGauche), mergeSort(cotéDroit));
}

const merge = (gauche, droite) => {
    // Créer un tableau
    const resultat = [];

    //vérifie si le tableau de gauche et de droite sont vides
    while (gauche.length && droite.length) {

        // Trouve la valeur la plus basse
        if (gauche[0] < droite[0]) {
            // Insère la valeur de gauche
            resultat.push(left.shift)
        } else {
            // insère la valeur de droite
            resultat.push(right.shift)
        }
    }

    // Fusionne le tableau de gauche
    while (gauche.length) resultat.push(gauche.shift());

    // Fusionne le tableau de droite
    while (droite.length) resultat.push(droite.shift());

    return resultat;

}

console.log(mergeSort([18, 293, 11, 2, 12, 89, 115]));


const mergeSort = array => {
    // Vérifie la longueur du tableau
    if (array.length < 2) return array;
    // Vérifie si le tableau a un index milieu
    const milieu = Math.floor(array.length / 2);
    // Split le tableau en deux
    const gauche = array.slice(0, milieu);
    const droite = array.slice(milieu, array.length)
    // Récursion du split
    return Fusion(mergeSort(gauche), mergeSort(droite));
}

const Fusion = (gauche, droite) => {
    // Créer le tableau
    const Resultat = [];
    // vérifie si les tableaux de gauche et droite sont vides
    while (gauche.length && droite.length) {
        // vérifie la valeur du premier index la plus basse
        if (gauche[0] < droite[0]) {
            // Insère la valeur de gauche
            Resultat.push(gauche.shift)
        } else {
            // insère la valeur de droite
            Resultat.push(droite.shift)
        }
    }
    return Resultat;

}


const triFusion = tableau => {
    if (tableau.length < 2) return tableau;
    const milieu = Math.floor(tableau.length / 2);
    const gauche = tableau.slice(0, milieu);
    const droite = tableau.slice(milieu, tableau.length);
    return fusion(triFusion(gauche), triFusion(droite));
}

const fusion = (gauche, droite) => {
    const resultat = []
    while (gauche.length && droite.length) {
        if (gauche[0] <= droite[0]) {
            resultat.push(gauche.shift)
        } else {
            resultat.push(droite.shift);
        }
    }
    while (gauche.length) resultat.push(gauche.shift);
    while (droite.length) resultat.push(droite.shift);

    return resultat
}

fusion = (gauche, droite) => {
    const resultat = [];
    while (gauche.length && droite.length) {
        if (gauche[0] <= droite[0]) {
            resultat.push(gauche.shift)
        } else {
            resultat.push(droite.shift)
        }
    }
    while (gauche.length) resultat.push(gauche.shift())
    while (droite.length) resultat.push(droite.shift())
}

triFusion = tableau => {
    if (tableau.length < 2) return tableau;
    const milieu = Math.floor(tableau.length / 2);
    const gauche = tableau.slice(0, milieu);
    const droite = tableau.slice(milieu, tableau.length);
    return fusion(triFusion(gauche), triFusion(droite));
}


fusion = (gauche, droite) => {
    const resultat = [];
    while (gauche.length && droite.length) {
        if (gauche[0] <= droite[0]) {
            resultat.push(gauche.shift)
        } else {
            resultat.push(droite.shift)
        }
    }
    while (gauche.length) resultat.push(gauche.shift());
    while (droite.length) resultat.push(droite.shift());

    return resultat;
}

trifusion = tableau => {
    if (tableau.length < 2) return tableau;
    const milieu = Math.floor(tableau.length / 2);
    const gauche = tableau.slice(0, milieu);
    const droite = tableau.slice(milieu, tableau.length)
    return fusion(trifusion(gauche), trifusion(droite))
}