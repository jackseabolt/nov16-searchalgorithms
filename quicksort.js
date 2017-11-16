function quickSort(array, start=0, end=array.length) {
    start = start; 
    end = end; 
    if(start >= end) {
        return array; 
    }
    // does not just find middle, also does sorting
    const middle = partition(array, start, end); 
    arrary = quickSort(array, start, middle); 
    array = quickSort(array, middle + 1, end); 
    return array; 
}

function partition(array, start, end) {
    // set pivot to the VALUE at the end of your array section
    const pivot = array[end - 1];
    let j = start; 
    for(let i=start; i<end -1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j); 
            j++; 
        }
    }
    swap(array, end-1, j); 
    return j; 
}

function swap(array, i, j) {
    let temp = array[i]; 
    array[i] = array[j]; 
    array[j] = temp; 
}


let myArr = [2,1,4,5,3]

console.log(quickSort(myArr)); 