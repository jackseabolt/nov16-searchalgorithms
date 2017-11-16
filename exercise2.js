'use strict';
const array = [1,2, 3,4, 5,6];

//renadom index i * random(5)
//Math.floor(Math.random()*6);
//if already filled then another random
//

function randomizer(array){
  let middle = Math.floor(Math.random()* array.length);
  console.log(middle);
  let center = Math.floor(array.length/2);
  while (middle === 0 || middle === center){
    middle = Math.floor(Math.random()* array.length);
  }
  for ( let i = 0; i < array.length; i++){
    if (i < middle){
      
      let currentChar = array.shift();
      array.push(currentChar);
    } else {
      let currentChar = array.pop();
      array.unshift(currentChar);
    }
  }
  return array;
}


//console.log(randomizer(array));

const array1 = ['java', 'jaba', 'angular', 'ruby'];

//compare first letter of two
//if different swap
//else same go to recurrsion to next letter
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function sortingBook(array){
  let swaps = 0;
  for (let i = 0; i < array.length; i++){
    console.log(i);
    //console.log(array[i].charAt(0));
    //console.log(array[i+1].charAt(0));
    if(array[i+1]){
      if (array[i] > array[i+1]){
      
        swap (array, i, i+1);
        swaps++;
      } 
    }
  }

  if ( swaps > 0){
    return sortingBook(array);
  }
  return array;
}

console.log(sortingBook(array1));
