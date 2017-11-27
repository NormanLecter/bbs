const BigNumber = require('bignumber.js');

// variables to generate string
let p = 5651;
let q = 5623;
let n = p * q; // 31 775 573
let x = 3234; // TODO: Random + GCD two number, n i x
i = 20000; // length of string
let xi = new BigNumber(x);
xi = xi.pow(2).modulo(n); // in this case is x0, next would be x1, x2, .., xi
let s =""; //TODO: to binary type - result series

// variables to tests
let testSingleBits = 0; //test single bits
let testSeries = new Array(5);  //test series - 1
let testSeriesZeros = new Array(6) //test series - 0
for(let i = 0; i < 6; i++){
  testSeries[i] = 0;
  testSeriesZeros[i] = 0;
}
let testLongSeries = 0; //test long series - 1
let testLongSeriesZeros = 0;
let testLongSeriesCounter =  0; //test long series - 0
let testLongSeriesZerosCounter =  0;
let previous;
let theSameCounter = 0;

let temp;
let newX;
for(let t = 0; t < i; t++){
  temp = xi.toString(2)[(xi.toString(2)).length-1];
  s += temp;
  if(temp == 1){
    testSingleBits++;
    testLongSeriesCounter++;
    testLongSeriesZerosCounter = 0;
    if(testLongSeriesCounter == 26){
      testLongSeries = 1;
    }
    if(t >= 1 && previous == 1){
    theSameCounter++;
    }
    if(t >= 1 && previous == 0){
      if(theSameCounter == 1){testSeriesZeros[0]++;}
      else if(theSameCounter == 2){testSeriesZeros[1]++;}
      else if(theSameCounter == 3){testSeriesZeros[2]++;}
      else if(theSameCounter == 4){testSeriesZeros[3]++;}
      else if(theSameCounter == 5){testSeriesZeros[4]++;}
      else if(theSameCounter >= 6){testSeriesZeros[5]++;}
      theSameCounter = 1;
    }
    previous = 1;
  } else{
      testLongSeriesZerosCounter++;
      testLongSeriesCounter = 0;
      if(testLongSeriesZerosCounter ==  26){
        testLongSeriesZeros = 1;
      }
      if(t >= 1 && previous == 0){
        theSameCounter++;
      }
      if(t >= 1 && previous == 1){
        if(theSameCounter == 1){testSeries[0]++;}
        else if(theSameCounter == 2){testSeries[1]++;}
        else if(theSameCounter == 3){testSeries[2]++;}
        else if(theSameCounter==4){testSeries[3]++;}
        else if(theSameCounter==5){testSeries[4]++;}
        else if(theSameCounter>=6){testSeries[5]++;}
        theSameCounter = 1;
      }
      previous = 0;
  }
  newX = new BigNumber(xi);
  newX = xi.pow(2).modulo(n);
  xi = newX;
}


//tests
if(testSingleBits > 9725 && testSingleBits < 10275){
  console.log("\ntest single bits : pass -> " + testSingleBits);
}
else{
  console.log("\ntest single bits : not pass -> " + testSingleBits);
}
console.log("\n\ntest series for 1, 2, 3, 4, 5, and 6 string for 1: \n")
if(testSeries[0]>=2315 && testSeries[0]<=2685){
  console.log("\ntest series for 1 string : pass -> " + testSeries[0]);
}
else{
  console.log("\ntest series for 1 string : not pass -> " + testSeries[0]);
}
if(testSeries[1]>=1114 && testSeries[1]<=1386){
  console.log("\ntest series for 2 string : pass -> " + testSeries[1]);
}
else{
  console.log("\ntest series for 2 string : not pass -> " + testSeries[1]);
}
if(testSeries[2]>=527 && testSeries[2]<=723){
  console.log("\ntest series for 3 string : pass -> " + testSeries[2]);
}
else{
  console.log("\ntest series for 3 string : not pass -> " + testSeries[2]);
}
if(testSeries[3]>=240 && testSeries[3]<=384){
  console.log("\ntest series for 4 string : pass -> " + testSeries[3]);
}
else{
  console.log("\ntest series for 4 string : not pass -> " + testSeries[2]);
}
if(testSeries[4]>=103 && testSeries[4]<=209){
  console.log("\ntest series for 5 string : pass -> " + testSeries[4]);
}
else{
  console.log("\ntest series for 5 string : not pass -> " + testSeries[4]);
}
if(testSeries[5]>=103 && testSeries[5]<=209){
  console.log("\ntest series for 6 string : pass -> " + testSeries[5]);
}
else{
  console.log("\ntest series for 6 string : not pass -> " + testSeries[5]);
}
console.log("\n\ntest series for 1, 2, 3, 4, 5, and 6 string for 0: \n")
if(testSeriesZeros[0]>=2315 && testSeriesZeros[0]<=2685){
  console.log("\ntest series for 1 string : pass -> " + testSeriesZeros[0]);
}
else{
  console.log("\ntest series for 1 string : not pass -> " + testSeriesZeros[0]);
}
if(testSeriesZeros[1]>=1114 && testSeriesZeros[1]<=1386){
  console.log("\ntest series for 2 string : pass -> " + testSeriesZeros[1]);
}
else{
  console.log("\ntest series for 2 string : not pass -> " + testSeriesZeros[1]);
}
if(testSeriesZeros[2]>=527 && testSeriesZeros[2]<=723){
  console.log("\ntest series for 3 string : pass -> " + testSeriesZeros[2]);
}
else{
  console.log("\ntest series for 3 string : not pass -> "  + testSeriesZeros[2]);
}
if(testSeriesZeros[3]>=240 && testSeriesZeros[3]<=384){
  console.log("\ntest series for 4 string : pass -> " + testSeriesZeros[3]);
}
else{
  console.log("\ntest series for 4 string : not pass -> " + testSeriesZeros[3]);
}
if(testSeriesZeros[4]>=103 && testSeriesZeros[4]<=209){
  console.log("\ntest series for 5 string : pass -> " + testSeriesZeros[4]);
}
else{
  console.log("\ntest series for 5 string : not pass -> " + testSeriesZeros[4]);
}
if(testSeriesZeros[5]>=103 && testSeriesZeros[5]<=209){
  console.log("\ntest series for 6 string : pass -> " + testSeriesZeros[5]);
}
else{
  console.log("\ntest series for 6 string : not pass -> " + testSeriesZeros[5]);
}
if(testLongSeries == 1){
  console.log("\n\ntest long series for 1 : not pass");
}
else{
  console.log("\n\ntest long series for 1 : pass");
}
if(testLongSeriesZeros == 1){
  console.log("\ntest long series for 0 : not pass");
}
else{
  console.log("\ntest long series for 0 : pass");
}

// poker test
let arr = new Array(16);

for(let i = 0; i < 16; i++){
  arr[i] = 0;
}

let decValue;
let partClone;
for(let part = 0; (part + 4) < (s.length - 1); part += 4)
  {
    partClone = part + 4;
    decValue = parseInt((s.substring(part, partClone)), 2);
    arr[decValue]++;
  }

let sum = 0;

for (let x = 0; x < 16; x++)
{
  console.log(arr[x]);
  sum += arr[x] * arr[x];
}

let r = (((16/5000) * sum) - 5000);

if(r > 2.16 && r < 46.17){
  console.log("\n\nPoker test: pass -> " + r);
} else{
  console.log("\n\nPoker test: not pass -> " + r);
}

// TODO: NIST test  + XOR with some texts
