function compressBoxesTwice(boxes,boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  boxes2.forEach(function(boxes){
    console.log(boxes);
  });
}

//BIG 0 = O(a + b) => a is first input and b is 2nd input ___ we drop the constants 
//rember boxes and boxes2 are two different inputs