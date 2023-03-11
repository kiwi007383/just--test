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

let userfeedback = confirm("Are you sure want to delete this post");

if(userfeedback){
    console.log("Your post is deleted!");
}else{
    console.log("Your post is not deleted!");
};

let password = prompt("Your password?");
console.log(password);