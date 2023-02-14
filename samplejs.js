const name = 'bola'
const age = 2
const isTall = true
const gender = 'male'

const hobbies = ['reading', 'writting']

function greet(){
console.log('Good morning sir')
}


greet()


function greetByGender(gender){

if(gender == 'male') {
    console.log('Good morning sir')
}else if(gender == 'female'){
    console.log('Good morning ma')
}else{
    console.log('You are not a person')
}

}

greetByGender('fmale')

const person2 = { 
    name: 'bola',
    age: 3,
    gender: 'male',
    isTall: false,
    hobbies: [ 'dancing', 'jumping'],
    sound: function ( ){
        console.log('You are not a person')
    }

}

console.log(person.sound)

const person = {
    firstName: "Peter",
    "current age": 28,
    gender: "Male",
    sleep: function(){
        return 3
    }
};
delete person.firstName
console.log(person)

function myAction(){
    return "I am learning Javascript"
}

let result = myAction()
console.log(result)

function sumTwoNumbers(x,y){
    let total = x + y
    return total
}

let totalSum = sumTwoNumbers(4, 5)

console.log(totalSum)

let car = {
    type: "Toyota",
    model:'Camry',
    colour: 'Gray',
    interior: 'Brown and Cream',
    tyre: 4,
    canStart: true,
    components: ['Windshield', 'tyres', 'brakes'],
    Engine: {
        type:'2aZ'
    }

}
console.log(car.components[2])

class Person {

    age
    name 
    color
    gender

    constructor(name, age, color, gender){
        this.name = name
        this.age = age
        this.color = color
        this.gender = gender

    }

    performanceAtEvent(){
        console.log(`${this.name} got an award`)
    }

    describe(){
        console.log( `${this.name } is a ${this.gender}, and is ${this.age} years old`)
    }


}

const boy1 = new Person('paul', 4,'white', 'male')
console.log(boy1)
console.log(boy1.name)
console.log(boy1['age'])
boy1.describe()
boy1.performanceAtEvent()


//function without parameter
function dance(){
    
}

//function with parameter
function jump(who){
    console.log( who + "is jumping")
}

//function with multiple parameter
function doingSomething(who, action){
    console.log( who + " is " + action)
}

// jump('Taye')
// doingSomething("paul", 'dancing')

//arrow function
const addTwoNumbers = (x, y)=>{
 return x + y
}

const sum = 3 + 4
// addTwoNumbers(3, 5)

const answer = addTwoNumbers(3, 6 )
// \console.log(answer)

let test;
 if(true){
     test = 'test'
 }
console.log(test)



const books = ['adeventure', 'thriller', 1, 2, true, false,  {bookType:"Mill and boons"}]


books[1]
console.log(books.length)
console.log(books)
books.push(24) //add element at the end
//add element at the begining
books.unshift('tayo')
console.log(books)

books.pop()
console.log(books)
//const removed = books.shift()
//console.log(removed)

books[1] = 'adventure'

console.log(books)

books

const age  = 12

const address = '8, ejire bello street'

for(x=2; x < address.length;x++){
console.log(address[x])
    //console.log('hey')
}
let i = 0
while(i < age){
    console.log(books[i])
    i++
    
}

// forEach()
// map()

const operateOnArray = ()=>{

}


