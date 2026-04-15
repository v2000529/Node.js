const user = {
    name:"Vishwas",
    age: 25
};

const jsondata = JSON.stringify(user);
console.log(jsondata);

const parsed = JSON.parse(jsondata);
console.log(parsed.name);
console.log(parsed.age);