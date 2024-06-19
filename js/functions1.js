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


// function printUserInfo(index){
//     console.log(`${users[index].name}'s phone is ${users[index].phone} `)
// }

// printUserInfo(0)
// printUserInfo(1)
// printUserInfo(2)

// function displayUserInfo (users[index]) {
//     console.log(`${users[index]}'s phone is ${users[index].phone}`)
//  }
 
//  displayUserInfo (users[0])
//  displayUserInfo (users[1])
//  displayUserInfo (users[2])
//  displayUserInfo ({name:"ram",phone:"987637263"})



function displayUserInfo(user) {
    console.log(`${user.name}'s phone is ${user.phone}`);
}


displayUserInfo(users[0]); 
displayUserInfo(users[1]);
displayUserInfo(users[2]);
displayUserInfo({name: "ram", phone: "987637263"}); 




let genders = ["male", "female", "others"];



function getRandomGender() {
    
    let randomIndex = Math.floor(Math.random() * genders.length);
    return genders[randomIndex];
}

console.log(getRandomGender());


// todo: print random gender from above gender
// gender.length //3
// Math.random()//0 to 1 eg. 0.1, 0.9
// Math.floor()//1.2=>1


