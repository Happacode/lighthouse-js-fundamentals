const chorus1 = "Let's sleep!";
let repeat1 = 0;
while (repeat1 < 4) {
  console.log(chorus1);
  repeat1++;
}

console.log("Until the sun comes up!");

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");