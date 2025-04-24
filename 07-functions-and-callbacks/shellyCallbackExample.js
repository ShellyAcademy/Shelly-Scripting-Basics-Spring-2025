Shelly.call("Switch.GetStatus", { 'id': 0 }, function (result) {
    console.log("Switch output:", result.output);
});

console.log("The end");