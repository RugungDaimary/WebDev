//function understanding
run();
function run(){
    console.log("Running");
}
//function assignment
let wk=function walk(){
    console.log("walking");
};
wk();
let jmp=wk;
console.log(jmp())//jmp function invoked
console.log(jmp)//reference pass

function SUM(a,b){
    console.log(a);
    console.log(b);
    return a+b;
    
};
// as functions are also dynamic in js we can pass our own parameters
console.log(SUM(1,2));
console.log(SUM(1));//not a number as b is passes as undefined
console.log(SUM());//not a number as b is passes as undefined
console.log(SUM(1,2,5,7));//by default will pick up starting's two values


function sum(a,b){
    console.log(arguments);//these all are objects
}
sum(1,3,4,5,8);//we can't call sum function directly here

//functions are also dynamic
function S(){
    let total=0;
    for(let val of arguments){
        total+=val;
    }
    return total;
}
let ans=S(1,3,5,7,9 );
console.log(ans);
//rest operator
function Su(a,b,...args){
    let total=a+b

    console.log(args);
    for(let val of args){
        total+=val;
    }
    return total;
}
console.log(Su(1,2,3,4,5,6));

function interest(p=100,r=4,y=5){//default parameter
    return p*r*y/100;
}
console.log(interest(undefined,1000))//here value of p is passed


//concept of getter and setter

let person={
    fName:'Rugung',
    lName:'Daimary',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){// Rugung Daimary
        if(typeof value!=String){
            throw new Error("You haven't sent string ");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
       
    }
}
// console.log(person.fName);
console.log(person.fullName);
// person.fullName='Nanita Basumatary';
// try {
//     person.fullName =true;
    
// } catch (e) {
//     alert(e)
    
// }
console.log(person.fullName);

//scope
for(var i=0;i<10;i++){

}
console.log(i);

let arr=[1,2,3,4];
let total=0;
for( let val of arr){
    total+=val;
}
console.log(total);
//reducing an array
let reduced=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(reduced);










