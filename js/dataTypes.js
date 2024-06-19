let fruits=["apple","banana","kiwi"]
console.log(fruits)


let course=['php','python','js','java','c#']
console.log(course)


let course1 = ['php', 'python', 'js', 'java', 'c#'];
let course2 = ['html', 'css', 'ruby', 'swift', 'go'];
let course3 = ['sql', 'r', 'scala', 'perl', 'dart'];

let allCourses = [course1, course2, course3];
console.log(allCourses);

let evenNumbers=[2,4,6,8,10,"twelve"]
console.log(evenNumbers[5])
evenNumbers[5]=12
console.log(evenNumbers[5])
console.log(evenNumbers)








// let users=['ram','sita','gita']
// console.log(users)
// users[0]=9858051777
// users[1]=9823643527
// users[2]=9864576393
// console.log(users)
// users[3]=9843979424
// console.log(users)

let users=[
    {
        name:'ram',phoneNumber:'98476474242'
       
    },
    {
        name:'sita',phoneNumber:'9838637467'
    },
    {
        name:'gita',phoneNumber:'9838637467'
    }
]
console.log(users)

function addUser(users, name, phoneNumber) {
    users.push({ name: name, phoneNumber: phoneNumber });
  }
  
addUser(users, 'shyam', '98675354675');

console.log(users);