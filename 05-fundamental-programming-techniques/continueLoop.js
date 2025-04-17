let i = 0;
while (i < 10) {
    // number is even, just increate index and continue (skip other part of the script)
    if (i % 2 === 0) {
        i++;
        continue
    }
    // number is odd, show it on the console, and increment the indez
    console.log(i);
    i++;
}