let users = [
    {
        name: 'sita',
        phone: '98686228258',
        address: 'patan',
        ward: '-10',
        gender:'female'
    },
    {
        name: 'ram',
        phone: '98686228258',
        address: 'patan',
        ward: '-10',
        gender:'male'
    },
    {
        name: 'ravan',
        phone: '98686228258',
        address: 'patan',
        ward: '-10',
        gender:'male'
    }
];


let religions=["buddhist","hindu","muslim"]

users[0].religion = religions[Math.floor(Math.random()*religions.length)]
users[1].religion = religions[Math.floor(Math.random()*religions.length)]
users[2].religion = religions[Math.floor(Math.random()*religions.length)]

users[0].age = Math.floor(Math.random()*100)
users[1].age = Math.floor(Math.random()*100)
users[2].age = Math.floor(Math.random()*100)

function addAge(index){
    users[index].age = Math.floor(Math.random()*100)
}
addAge(0);
addAge(1);
addAge(2);



function addReligion(index){
    users[index].religion = religions[Math.floor(Math.random()*religions.length)]
}
addReligion(0);
addReligion(1);
addReligion(2);
console.log(users)

function addAgeAndReligion(index) {
    users[index].age = Math.floor(Math.random() * 100);
    users[index].religion = religions[Math.floor(Math.random() * religions.length)];
}

addAgeAndReligion(0);
addAgeAndReligion(1);
addAgeAndReligion(2);


function double(input){
    let output = input * 2
    return output
}

let doubledValue = double(11)
console.log(doubledValue)
console.log(double(12))

console.log(sum(12,12))

function double(sum(num1,num2)){
    let output = sum(num1,num2) * 2
    return output
}

console.log(output)