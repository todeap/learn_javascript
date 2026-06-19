 let user1 = {
    "name": "Harry Potter",
    "age": 12,
    "address": {
        "details": ["4", "Privet Drive"],
        "area": "Little Whinging",
        "city": "Surrey",
        "state": "England"
    }
};

let user2 = structuredClone(user1);
user2.address.details[0] = "5";
console.log("Updated User: ", user2);
console.log("Existing user: ", user1);


let obj = {
    "a": "Apple",
    "b": ["Basketball", "Baseball"],
    "c": {
        "call": "cellphone"
    },
    "d": "Dog"
};

console.log(filterObject(obj));

function filterObject(obj) {
    let map = {};
	Object.entries(obj).forEach(([key, value]) => {
        if(!Array.isArray(value) && ! (typeof value === 'object')) {
            map[key] = value;
        }
    });
    return map;
}