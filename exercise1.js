// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.

function sortArr(arr, highest, lowest) {
    let myArr = new Array(highest); 
    let resultArr = []; 
    for (let i=0; i < arr.length; i++ ){
        myArr[arr[i]] = 1; 
    }
    for(let i=0; i < myArr.length; i++) {
        if(myArr[i]===1) {
            resultArr.push(i); 
        }
    }
    return resultArr; 
}

let myArr = [2,3,1,7];
console.log(sortArr(myArr, 7, 1)); 