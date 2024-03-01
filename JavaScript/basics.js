console.log(" Hello Guyz this is Rugung  ");
let a=6;
var b=9;
var b=0;
let state=true;
console.log(a);
console.log(state);
if(true){
    var x=10;
    var x=9
    console.log(x);
}
console.log(x);

const num=10;//this can't be changed
let n;//this is undefined
console.log(n);
let p=null;//this is null value
console.log(p);

//dynamic typing
let z=1;
console.log(z);
z="rugung";
console.log(z);

//array creation
let arr=["rugung","daimary"];
console.log(arr[0]);
console.log(arr[1]);
arr[2]="Nanita";
console.log(arr[5]);//undefined value


//object creation 
let person = {
  firstName: 'Rugung',
  lastName: 'Daimary',
  age: 30,
  
};

//operators
console.log(3**3);//exponential operator
console.log(3===7);
console.log(3!==3);

//== is used for loose quality
//=== is used for strict equality 
let value=1;
let val='1';
console.log(value==val);
console.log(value===val);//as string

//ternary operator
let age=21;
let str=(age>=18)?"I can vote":"I can't vote";
console.log(str);

//with non boolean value
console.log(true||5||1);
console.log(false && 5 && 1);

//bitwise AND(&) ,OR(|)


//loops
for (let i = 0; i < 10; i++) {
 console.log(i+" Rugung");
}


//object creation
let rectangle={
  //key-value pair
  length:1,
  breadth:2,

  //behaviour
  draw: function(){//call method
    console.log("Drawing rectangle");
  },
  Draw(){//call method
    console.log("Drawing rectangle");
  }

};


//Object Creation
//1)Factory function
//2)constructior function

function createObject(l,b){//factory function
  return rectangle = {
    //key-value pair
    length: l,
    breadth:b,

    Draw() {
      //call method
      console.log("Drawing rectangle");
    },
  };
}
//create object
let obj1=createObject(5,7);
console.log(obj1.Draw());


//constructor function
function Create(l,b){
  this.breadth=b,
  this.length=l,
  this.draw=function(){
    console.log('Hii');
  }
}
//fuctions are also object
Create.name;




//object create
let obj2=new Create(4,8);
// adding property in object
obj2.color="Blue";
//remove the property
delete obj2.color;


//customed
let Create1 = new Function(
  "length",
  "breadth",
  `this.breadth=breadth,
  this.length=length,
  this.draw=function(){
    console.log('Hii');
  }`
);
let obj3=new Create1(4,8);




//TYPES in JS(Primitive and Reference)

//primitive

let c=10;
let d=c;
c++;
console.log(c);
console.log(d);

//reference
let r={value:10};
let y=r;//address is passed
r.value++;
console.log(r.value);
console.log(y.value);


//for-in loop(to access key-value in an object)
let circle={
  radius:5,
  diameter:10,

  color:"Red",

};
for(let key in circle ){
  console.log(key,circle[key]);
}

//for-of loop is only used in iterable (like array,maps);

//to use for-of in an object
for(let key of Object.entries(circle)){
  console.log(key);
}


//to find that if a specific property exist in an object or not?
if('length' in circle){
  console.log("Present");
}else{
  console.log("Absent");
}


//object cloning -3 steps
/*
//usng iteration
let circle2={};
for(let key in circle){
  circle2[key]=circle[key];
}
console.log(circle2);
*/

//using assign 
let ob={value:80};
let circle2 = Object.assign({},circle,ob);//multiple objects are cloned
console.log(circle2)

//using spread
let circle3={...circle};
console.log(circle3);



//garbage collection(garbage collector automatically deallocates the spaces(memory) of constant(variable) which are not use now)
//and we have to control over garbage collector,run in background





//Math is an inbuilt object
console.log(Math.abs(-2));
console.log(Math.max(1,6,2,9));
console.log(Math.PI);

//In js strings are of two type->one is primitive and another one is object string
let firstName='rugung';//primitive string
let lastName=new String('Daimary');//object string
console.log(typeof(firstName));
console.log(typeof(lastName));
//when we use . (dot) notation with primitive string ,it gets treated as object string by js
console.log(firstName.length);
console.log(typeof(firstName));
console.log((firstName[0]));
console.log((firstName.includes("Rug")));
console.log((firstName.startsWith("Rug")));
console.log((firstName.endsWith("Rug")));
console.log((firstName.endsWith("g")));
console.log((firstName.indexOf("n")));
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
let Naam="  DCE  ";
//trim the spaces
console.log(Naam.trim());
console.log(Naam.replace("DCE","DTU"));

//split method
let message="This is my first Message";
message.replace('first','second');
console.log(message);

let words=message.split(' ');
console.log(words);

//template letral,we use back tick ' ', yaha jis order me string ko likhte ho ussi order pe print ho jata hai
let mess=`
Dear sir,
thanks for contacting me.
regards, 
${firstName} Daimary  `;//here the name is dynamic
console.log(mess);



//date and time
let date=new Date();
let date2=new Date('July 10 2024 08:35');
let date3=new Date(2002,11,10,4);
console.log(date);
console.log(date2);
console.log(date3);
date3.setFullYear(2001);//setting the year(setter)
date3.setMonth(0);
console.log(date3);
console.log(date3.toLocaleDateString());





//Array(Reference),may be the collection of diff data types items in same array

//Array creation
let nums=[1,4,6,8];
console.log(nums);
nums.push(9);//inserting at end
console.log(nums);
nums.unshift(2);//inserting at beginning
console.log(nums);
nums.splice(2,0,'a','b','c');//inserting at middle
console.log(nums);

//searching
console.log(nums.indexOf(9));//index of 9
console.log(nums.indexOf(10));//as 10 is not present ,will print -1
if(nums.indexOf(9)!=-1){
  console.log("Present");
}
//or
console.log(nums.includes(9));

//advance searching
console.log(nums.indexOf(7,2));

//creating array of objects
let courses=[
  {no:1,naam:"Rugung"},
  {no:2,naam:"Daimary"}

];
console.log(courses);

console.log(courses.includes({no:1,naam:"Rugung"}));//address of this argument and object array are different


//using callback function(find()) method to search object in array of objects
let cour=courses.find(function(cour){ return cour.naam ==="Daimary"});
//to shorthern above line of code
let co=courses.find(c=>c.naam=="Daimary");
console.log(cour);
console.log(co);



//Removing elements
let arrs = [1, 4, 6, 8];
//removing from end
arrs.pop();

console.log(arrs);
//removing from beginning
arrs.shift();
console.log(arrs);
//removing from  middle
arrs.splice(0,2);
console.log(arrs);



//Emptying an array
let numbers=[1,3,5,8];
let numbers2=numbers;
numbers.splice(0,numbers.length);
//or
// numbers.length=0;
console.log(numbers);
console.log(numbers2);

//combining of two array
let first=[1,2,3];
let second=[4,5,6];
let combined=first.concat(second);
console.log(combined);
let sliced=combined.slice(3,5);
console.log(sliced);


//spread operator
let f=[1,2,3];
let s=[4,5,6];
let com=[...f,'a','b',...s,'e',true]
console.log(com);
//copying
let another=[...com];

//iterating in array
let marks=[20,30,40,59];
for(let val of marks){//for of loop
  console.log(val);
}

//for each loop
marks.forEach(function(num){
  console.log(num)
})
//using arrow operator
marks.forEach(num=>console.log(num));


//joining array
let arrays=[10,20,50];
const joined=arrays.join(',');
console.log(joined);
//spliting the string 
let messe='This is Rugung Daimary';
let parts=messe.split(' ');
console.log(parts);


//sorting an array
let numb=[53,67,1,20];
numb.sort();
console.log(numb);
//reversing array
numb.reverse();// will sort in decreasing order
console.log(numb);

//sorting array of objects
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
// sort by value
// items.sort(function(a,b){
//   return a.value-b.value;
// })

//or
items.sort((a, b) => a.name > b.name);
console.log(items);

//filtering of an array
let X=[1,3,5,-2,-9];
let filtered=X.filter(function(val){
  return val>=0;
});
console.log(filtered);


//mapping of an array
let numbe=[1,5,9,2];
// let mapped=numbe.map(function(val){
//   return 'student_no '+val;
// });
let mapped = numbe.map( (val)=>"student_no " + val);
console.log(mapped);

// mapping with objects
// let item=numbe.map(function(num){
//   let obj={value:num };
//   return obj;
// });
let item = numbe.map(num=> { value: num });

console.log(item);
console.log(typeof(item));


//chaining concept
let A=[1,9,0,-2,-5];
let Y=A.filter(val=>val>=0).map(num=>{values:num});
console.log(Y);


//sorting uisng custom comparator
// Sorting using a custom comparator
let number = [1, 10000, 2, 4, 9];
let sorted = number.sort(function(a, b) {
  return a - b; // Ascending order
});
console.log(sorted); // Prints the sorted array











