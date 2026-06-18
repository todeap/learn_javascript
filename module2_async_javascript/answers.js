// ---------------------------Question-1-----------------------------------
/* const func = async () => {
    console.log("Printing Before");
    setInterval(function () {
        console.log("Printing After 3 sec...");
    }, 3000);
    console.log("Printing after promise define.");
};

func(); */

// ---------------------------Question-2-----------------------------------
const func = function (request) {
    return fetch("https://reqres.in/api/users", request);
};

const request = {
    method: "GET",
    headers: {
        "x-api-key": "free_user_3FIT5ELoZr1VfNE7G1OmsrbrFEI"
    }
};

func(request).then((value) => {
    console.log("Promise is resolve data: ", value);
}).catch((error) => {
    console.log("Promise is rejected, error: ", value);
});


// --------------------------Question-3----------------------------
// if Math.random() returns number greater than 0.5 then resolve will execute and get output as Response in then block: Test Resolve but if number is <= 0.5 then Promise failed and output is Error caught in testAsyncFunction: Test Rejected

// -----------------------------Question-4----------------------------
// Error in catch block Test Static rejected.

// ------------------------------Question-5-----------------------------
// if Math.random() returns number greater than 0.5 then resolve will execute and get output as Response in then block: Test Resolve but if number is <= 0.5 then Promise failed and output is Error caught in testAsyncFunction: Test Rejected and again new promise is return and catch by outer catch block Error in catch block: Forced Error

//-------------------------------Question-6------------------------------------
function getDataDelay(request) {
    return fetch("https://reqres.in/api/users?page=2", request).then(response => response.json()).then(data => {
        return new Promise((resolve, reject) => {
            setInterval(() => resolve(data), 2000);
        })

    }).catch(error => console.log("Error while fetching data"));
}

getDataDelay(request).then(data => console.log("Delay data from fetch :", data));

//----------------------------------Question-7------------------------------------
/* async function getData(request) {
    try {
        const response = await fetch(
            "https://reqres.in/api/users", request
        );
        const data = await response.text();

        console.log("Data:", data);
    } catch (error) {
        console.log("Problem with fetching data:", error);
    }
}

getData(request); */