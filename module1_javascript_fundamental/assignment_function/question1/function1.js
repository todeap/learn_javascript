function demo(type) {

    console.log("Function Started");

    if (type === "if") {
        console.log("Inside IF");
        return "Returned from IF";
        console.log("This never executes");
    }

    if (type === "for") {
        for (let i = 1; i <= 5; i++) {
            console.log("FOR:", i);

            if (i === 3) {
                return `Returned from FOR at ${i}`;
            }
        }

        console.log("This never executes");
    }

    if (type === "while") {
        let count = 1;

        while (count <= 5) {
            console.log("WHILE:", count);

            if (count === 3) {
                return `Returned from WHILE at ${count}`;
            }

            count++;
        }

        console.log("This never executes");
    }

    if (type === "switch") {

        switch (2) {

            case 1:
                return "Case 1";

            case 2:
                return "Case 2";

            default:
                return "Default";
        }

        console.log("This never executes");
    }

    console.log("Function End");
    return "Normal Return";
}

// Test Cases
console.log(demo("if"));
console.log("----------------");

console.log(demo("for"));
console.log("----------------");

console.log(demo("while"));
console.log("----------------");

console.log(demo("switch"));
console.log("----------------");

console.log(demo("atul"));