function callbackTest(callbackfun) {
    callbackfun();
}

function callbackFunction() {
    console.log("From callbackFunction...");
    return 5;
}

callbackTest(callbackFunction); // This return 5
callbackTest(callbackFunction()); // This will give Error
callbackTest(() => callbackFunction()); // This also work

// What happens when you return callbackfun() from the callbackTest function? --> return output of callbackFunction.
// What happens when you return callbackfun from the callbackTest function? --> No error but callbackFunction will not execute it return callback function itself.