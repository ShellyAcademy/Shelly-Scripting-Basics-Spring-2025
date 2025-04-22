// for (let h = 0; h <= 23; h++) {
//     for (let m = 0; m <= 59; m++) {
//         console.log(h + ":" + m);
//     }
// }

for (let h = 0; h <= 23; h++) {
    for (let m = 0; m <= 59; m++) {
        let minutes;

        if (m < 10){
            minutes = "0" + m;
        } else {
            minutes = m;
        }
        console.log(h + ":" + minutes);
    }
}