'use strict';

let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09"
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05"
}];

function mapBy(users, first_name) {
	const result = {};
	for (const user of users) {
		result[user[first_name]] = user;
	}
	return result;
}

console.log(mapBy(users, "first_name"));


let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09",
  "gender":"Male"
}, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
  "gender":"Female"
},  {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
  "gender":"Male"
}, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
  "gender":"Female"
}];

function groupByGender() {
	return users.reduce((resultGroup, user) => {
		
		const value = user.gender;
		if (!resultGroup[value]) {
			resultGroup[value] = [];
		}
		resultGroup[value].push(user);
		return resultGroup;
	}, {});
}
console.log(groupByGender());

function sortUsersBy(key, order = 'asc') {
    return users.sort((user1, user2) => {
        const factor = order.toLowerCase() === 'desc' ? -1 : 1;

        if (typeof user1[key] === 'string') {
            return factor * user1[key].localeCompare(user2[key]);
        }

        return factor * (user1[key] - user2[key]);
    });
}

console.log(sortUsersBy("gender", "desc"));


let userNames = [{
  "id": 1,
  "first_name": "Nicki",
 }, {
  "id": 2,
  "first_name": "Raychel",
 },  {
  "id": 3,
  "first_name": "Demetris",
 }, {
  "id": 4,
  "first_name": "Amata",
 }];

let userEmails = [{
  "id": 2,
  "email": "rmcgrady1@cpanel.net",
}, {
  "id": 1,
  "email": "ncrozier0@squarespace.com",
}, {
  "id": 4,
  "email": "abraiden3@canalblog.com",
}, {
  "id": 3,
  "email": "dkilshall2@elpais.com",
}];


function merged(userNames, userEmails) {
	let result = {};
	userNames.map( item => {
		result[item.id] = item;
	});
	userEmails.forEach(item => {
		Object.assign(result[item.id], item);
	});
	return Object.values(result);
}

// let merge = [userNames, userEmails];

console.log(merged(userNames, userEmails));

let fruits = ["Apple", "Orange", "Banana", "Apple", "Chicoo", "Mango"];
let distict_fruits = [...new Set(fruits)];
console.log(distict_fruits);










