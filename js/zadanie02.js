function concatArray(array1, array2) {
    const contacedArray = [];

    array1.forEach( item => contacedArray.push(item));
    array2.forEach( item => contacedArray.push(item));

    return contacedArray;
}

console.log(concatArray( [1,3],[3,5]));