//#1 -- For loop in Javascript.
const nemo = ['nemo'];

function findNemo1(array) {
  let t0 = performance.now(); //check how much time application take to run
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break; //when find nemo loop stop
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

findNemo1(nemo);