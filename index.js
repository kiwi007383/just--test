console.log("Hello, World!");

let people = ['cloey', 'rose', 'james', 'cloud'];
const persons = people.map(person =>{
    return person;
});

console.log(persons);

const newPersons = [
    {name: 'kiwi', age: 30, gender: 'male'},
    {name: 'josh', age: 34, gender: 'male'},
    {name: 'gray', age: 18, gender: 'female'}
];

const newPersonsArray = newPersons.filter(newPerson =>{
    return newPerson.gender == 'male';
});

console.log(newPersonsArray);