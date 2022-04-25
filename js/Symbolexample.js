const person = {

    firstName: "John",
  
    lastName: "Doe",
  
    age: 50,
  
    eyeColor: "blue"
  
  };
let id = Symbol('id');

person[id] = 140353;
  
console.log(person[id] + " " + person.id + "" + id);  