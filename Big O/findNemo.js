//Refers to this website to install node.js in VS code https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
const nemo = ['nemo']; //array thats constains string nemo;

function findNemo(array){
  for(let i = 0;i < array.length;i++){
    if(array[i]==='nemo')
    console.log('FOUND NEMO!');
  }
}
//run the function
findNemo(nemo);