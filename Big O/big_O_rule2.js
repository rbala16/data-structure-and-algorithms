function printFirstItemThenFirstHalfThenSayHi100Times(items){
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex){
    console.log(items[index]);
    index ++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
}
}

//BIG O = n (n/2 + 101=> drop the constants n + 1 drop again => n)