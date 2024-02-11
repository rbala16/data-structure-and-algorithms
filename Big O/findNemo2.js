//Refers to this website to install node.js in VS code https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
//run node findNemo2.js to run the application

const nemo = ['nemo']; //array thats constains string nemo;
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');  //create an array that has nemo 100 times(100 items/elements)
//i is the index of array

function findNemo(array){

  for(let i = 0;i < array.length;i++){
    if(array[i]==='nemo')
    console.log('FOUND NEMO!');
  }


}

//run the function
findNemo(large); //0(n)--> Linear Time  n=10(size of input)

const boxes = [0,1,2,3,4,5];
function logFirstTwoBoxes(boxes){
  console.log(boxes[0]); //0(1)
  console.log(boxes[1]);  //0(1)
}

logFirstTwoBoxes(boxes); //0(2)-->no of operations are 2

