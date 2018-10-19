import {
  uniq,
  compact,
  chunk,
  concat,
  difference,
  drop,
  sortedIndex,
  forEach,
  map,
  filter,
  reduce,
  find,
  every,
  some,
  get
} from "lodash";
export const lodashArray = () => {
  const tab1 = [
    1,
    0,
    3,
    55,
    1,
    null,
    false,
    "",
    44,
    88,
    55,
    1,
    1,
    22,
    55,
    11,
    44,
    88
  ];
  const tab2 = [1, 2, 3, 55, 1, 44, 88, 55, 1, 1, 22, 55, 11, 44, 88];
  // Crée un tableau d'éléments divisés en groupes de la taille suivante.
  const TabChunk = chunk(tab1, 5);
  console.log(TabChunk);
  //Crée un tableau avec toutes les valeurs de Falsey supprimées. Les valeurs false, null, 0, "", indéfini et NaN sont falsey.
  const TabCompactD = compact(tab1);
  console.log(TabCompactD);
  //Crée un nouveau tableau de concaténation avec des tableaux et / ou des valeurs supplémentaires.
  const tabConcat = concat(tab1, tab2, 1, [1, 3], "", null, undefined);
  console.log(tabConcat);
  //Crée un tableau de valeurs de tableau non incluses dans les autres tableaux donnés en utilisant SameValueZero pour les comparaisons d'égalité.
  const tabdifference = difference(tab1, tab2);
  console.log(tabdifference);
  //Crée une tranche de tableau avec n éléments supprimés depuis le début.
  const tabDrop = drop(tab1, 10);
  console.log(tabDrop);
  //
  const tabfindIndex = sortedIndex(tab1, 44);
  console.log("ded", tabfindIndex);
  //

  const uniqNumbers = uniq(tab1);
  console.log(uniqNumbers);
  //
  //foreach
  forEach(tab1, (value, key) => {
   console.log(value)
  });
  //
  forEach(tab1, (value, key) => {
    value = value*2222
    console.log(value)
  });
  //map

  map(tab1, (num,key) => { 
    console.log(num)
    });
  //filtre
  console.log("filtre",
  filter(tab1, (num) => {
     return num >10 
  }))
  //reduce
  console.log("Reduce",
    reduce(tab2, (a,b) => {
      return a+b
    }))
    //find 
  console.log("find",
    find(tab2, (num) => {
      return num > 2
    }))
    //every
  console.log("find",
    every(tab2, (num) => {
      return num > 2
    }))
    //
  console.log("some",
    some(tab2, (num) => {
      return num > 2
    }))

 console.log("some",
  get(tab2, '1', 'default'))

};
