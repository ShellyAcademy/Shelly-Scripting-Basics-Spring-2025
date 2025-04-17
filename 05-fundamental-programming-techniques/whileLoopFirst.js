let a = 5;

// same as for (let a = 5; a <= 10; a++) {...}
while (a <= 10) {
  console.log("a =", a);
  a++;
}

console.log("------------------------");

for (let a = 5; a <= 10; a++) {
  console.log("a = ", a);
}