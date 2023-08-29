//objects
//js-object
//let object={name:"js",price:500,college:"BIT"}
//by using
// let obj1=new Object();

//access the object values
//. notation
//[] notation

// let obj=
// {
//     name:"rose",
//     category:"flower",
//     price:100
// }
// console.log(obj['name']);

//create object by using new keyword

// let obj=new Object()
// obj.name="BIT"
// obj.deptName="AI"
// console.log(obj.name+" "+obj.deptName);

//syntax of for-in loop
// for(variable variableName in object)
// {

// }
// let obj=
// {
//     name:"BIT",
//     dept:"AI",
//     location:"Blore"
// }
// for(const i in obj) //i-temporary
// {
//     console.log(obj[i]);
// }
// console.log(obj);




// let bit={
//     book:"javascript",
//     course:"MERN",
//     price:50000,
//     address:{
//         name:"MERN",
//         location:"blore"
//     },

//     greeting()  //obj method
//     {
//    let msg= this. book+this. course+this.price;
//    console.log(msg);
//     }
// }
// bit.greeting()

// class Js
// {

//     constructor(length,breadth) //local variable
//     {
// this.l1=length;                        //l1=instance variable
// this.b1=breadth;
//     }
// }

//nested ds in js
//1){{}}
//2)[[]]
//3)[{}]
//4){[]}


//[{}]

// let array=
// [
// {name:"bit",course:"mern"}
// ]

//{[]}
// let object=
// {
//   language:["c",10,"js"],
//   name:"js",
//   course:"mern",

//  showAll()
//  {
// this.language.forEach(function(value)  //value -reference variable
// {

// console.log(value); 
// let msg=this.name+this.course
// console.log(msg);
//         //value=c,10cjs
// })

//  }
// }
// object.showAll()

//non-blocking

setTimeout(()=>{
        console.log('js');
},5000)
console.log('hello')
console.log('hi');