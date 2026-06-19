'use strict';

function deepClone(sourceObj, destinationObj = {}) {
	Object.entries(sourceObj).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			destinationObj[key] = {...value};
		} else if (value != null && typeof value === 'object') {
			destinationObj[key] = {};
			deepClone(value, destinationObj[key]);
		} else {
			destinationObj[key] = value
		}
	});

}

let sourceObj = {
	"id" : 1,
	"name" : "Atul Tony",
	"email" : "atultony@heal.com",
	"address" : {
		"city": "Pune",
		"diff_current_locations": {
			"first_changed_location": "baner",
			"Second_changes_location": "Kharadi",
			"Third_changed_location": "Hijewadi"
		}
	},
	"skills": ['java', 'JavaScript', 'Docker']
};

let destinationObj = {};
deepClone(sourceObj, destinationObj);
console.log("Source object: ", sourceObj);
console.log("Destination Object: ", destinationObj);


// Write a function to check deep equality of two nested objects/arrays
function deepEquality(obj1, obj2) {
	if (obj1 === obj2) return true;
	if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
		return false;
	}

	let keys1 = Object.keys(obj1);
	let keys2 = Object.keys(obj2);

	if(keys1.length !== keys2.length) return false;

	for (let key of keys1) {
		return deepEquality(obj1[key], obj2[key]);
	}

	return false;
}

const obj1 = {
    name: "Atul",
    address: {
        city: "Pune"
    }
};

const obj2 = {
    name: "Atul",
    address: {
        city: "Pune"
    }
};

console.log(obj1 === obj2); 
console.log(deepEquality(obj1, obj2));

const cloneObj1 = {...obj1};
cloneObj1.name = 'Yash';
// console.log("Shallo Copy change by another Object", obj1);
// console.log("Shallo Copy Check", cloneObj1.address === obj1.address);


// Write a recursive function to create a deep clone of a nested object
function deepClone(obj1) {
	if(obj1 === null || typeof obj1 !== 'object') return obj1;

	if(Array.isArray(obj1)) return obj1.map(deepClone);

	const clone = {};

	Object.entries(obj1).forEach(([key, value]) => {
		clone[key] = deepClone(value);
	});
	return clone;
}

let clone = deepClone(obj1);
console.log("Clone Obj1", clone);

// Write a function that returns a nested key within an object:
let nestedObj = {
	"name":"Harry Potter",
	"age": 12,
	"address": {
		"details": ["4", "Privet Drive"],
		"area":"Little Whinging",
		"city": "Surrey",
		"state": "England"
	} 
};

function nestedObject(obj, field) {
	const keys = field.split(".");

	let current = obj;
	for( const key of keys) {
		current  = current[key]; 
	}
	return current;
}

console.log(nestedObject(nestedObj, "address.details.1"));