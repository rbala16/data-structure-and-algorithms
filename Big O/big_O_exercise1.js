// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;  //0(1)
  a = 50 + 3;   //0(2)

  for (let i = 0; i < input.length; i++) {   //O(n)
    anotherFunction();  //O(n)
    let stranger = true;   //O(n)
    a++;   //O(n)
  }
  return a;  //O(1)
}

funChallenge();

//BIG 0 = 3 + 4n