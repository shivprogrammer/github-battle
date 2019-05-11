/*
Implicit Binding
Explicit Binding
new Binding
window binding
*/

// Implicit Binding
// var me = {
//   name: 'Shiv',
//   age: 25,
//   sayName: function() {
//     console.log(this.name);
//   }
// }

// me.sayName(); // this references me here

// var sayNameMixin = function(obj) {
//   obj.sayName = function() {
//     console.log(this.name)
//   }
// }
//
// var me = {
//   name: 'Shiv',
//   age: 25
// }
//
// var you = {
//   name: 'Joey',
//   age: 19
// }
//
// sayNameMixin(me);
// sayNameMixin(you);
//
// me.sayName();
// you.sayName();

// var Person = function(name, age) {
//   return {
//     name: name,
//     age: age,
//     sayName: function() {
//       console.log(this.name)
//     },
//     mother: {
//       name: 'Stacy',
//       sayName: function() {
//         console.log(this.name)
//       }
//     }
//   }
// }

// var jim = Person('Jim', 42)
// jim.sayName()
// jim.mother.sayName()

// EXPLICIT BINDING //
var sayName = function() {
  console.log('My name is ' + this.name)
}
var stacy = {
  name: 'Stacy',
  age: 40
}

var languages = ['JavaScript', 'Ruby', 'Python']

sayName.call(stacy)
