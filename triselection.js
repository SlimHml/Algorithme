function sort(tab) {
    for (let i = 0; i < tab.length; i++) {
        //stocker l'index de l'élément minimum
        let min = i;
        for (let j = i + 1; j < tab.length; j++) {
            if (tab[j] < tab[min]) {
                // mettre à jour l'index de l'élément minimum
                min = j;
            }
        }
        let tmp = tab[i];
        tab[i] = tab[min];
        tab[min] = tmp;
    }
    return tab;
};
let tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);