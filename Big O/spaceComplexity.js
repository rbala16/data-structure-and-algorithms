//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo");
  }
}

boooo([1,2,3,4,5])

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  let hiArray = []; //create new array
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = "hi";  //create new array with 6 times hi element
  }
  return hiArray;
}

arrayOfHiNTimes(6);  //O(n)

//=>['h1','h1','h1','h1','h1','h1']