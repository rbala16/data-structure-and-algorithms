//Refers to this website to install node.js in VS code https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
//run node findNemo2.js to run the application

const nemo = ['nemo']; //array thats constains string nemo;
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10).fill('nemo');  //create an array that has nemo 100 times(100 items/elements)
//i is the index of array

function findNemo(array){
  let t0 = performance.now();  //check how much time application take to run
  for(let i = 0;i < array.length;i++){
    if(array[i]==='nemo')
    console.log('FOUND NEMO!');
  }

let t1 = performance.now();
console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

//run the function
findNemo(large);



