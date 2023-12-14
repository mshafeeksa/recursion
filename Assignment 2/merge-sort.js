const random8 = [26, 18, 956, 25, 78, 54, 22, 36];
const random11 = [65, 25, 16, 96, 1, 98, 789, 2, 129, 485, 547];
const repeating8 = [26, 36, 89, 25, 69, 78, 36, 89, 88];
const allSame15 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const just1 = [2];


function mergeSort(sortArray = []) {
    if (sortArray.length < 2)
        return sortArray;
    else {
        let middle = Math.floor(sortArray.length / 2);
        let newLeftArray = mergeSort(sortArray.slice(0,middle));
        let newRightArray = mergeSort(sortArray.slice(middle));
        let finalArray = [];
        let i = 0;
        let j = 0;
        while (i < newLeftArray.length || j < newRightArray.length) {
            if ((j >= newRightArray.length) || newLeftArray[i] < newRightArray[j])
                finalArray.push(newLeftArray[i++]);
            else
                finalArray.push(newRightArray[j++]);
        }
        return finalArray;
    }
}

console.log(`Even random elements = ${mergeSort(random8)}`);
console.log(`Odd random elements = ${mergeSort(random11)}`);
console.log(`Elements repeating = ${mergeSort(repeating8)}`);
console.log(`All same elements = ${mergeSort(allSame15)}`);
console.log(`Just one element = ${mergeSort(just1)}`);