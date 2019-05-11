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