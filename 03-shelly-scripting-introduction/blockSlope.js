function testBlockScope() {
    if (true) {
        let x = 10;
        let y = 20;
        console.log(x);
        console.log(y);
    }

    // After exiting the if-block, x an y are no longer available
    console.log(x); // Will throw an Error: ReferenceError: x is not defined
    console.log(y); // Will throw an Error: ReferenceError: x is not defined
}

testBlockScope();

// function testVarScope() {
//     if (true) {
//         var x = 10;
//         var y = 20;
//         console.log(x);
//         console.log(y);
//     }

//     console.log(x); // will print 10
//     console.log(y); // will print 20
// }

// testVarScope();