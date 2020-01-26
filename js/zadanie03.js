function bigestSumOfTwoElements(array) {
    const sortedArr = array.sort();

    if(sortedArr.length == 0) return false;
    else if(sortedArr.length == 1) return sortedArr[0]
    else {
        return sortedArr[sortedArr.length - 2] + sortedArr[sortedArr.length - 1]
    }
}

console.log(bigestSumOfTwoElements([23,45,17,12]));