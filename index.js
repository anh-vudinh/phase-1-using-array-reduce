const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// // const totalBatteries = batteryBatches.reduce(function(x, y){
// //     return x +y;
// // })

// function calcTotalBatteries(array){
//     const totalBatteries = array.reduce()
//     return totalBatteries;
// }

// calcTotalBatteries(batteryBatches);
// console.log(totalBatteries);

const totalBatteries = batteryBatches.reduce(myFunc);

function myFunc(total, num) {
  return total + num;
}

console.log(batteryBatches.reduce(myFunc));