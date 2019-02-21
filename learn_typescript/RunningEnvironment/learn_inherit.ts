//编译ts代码后，所有的类和对象都会变成js对象，运行时的继承系统使用的是原型继承模型。在一个原型继承模型中，并没有类，对象直接继承自对象。在运行时，几乎所有的js对象都有一个内部名为prototype的属性，这个属性的值是一个对象，包含了一些属性（数据）和方法（行为）。
//ts代码
class Person
{
  name:string
  surname:string
  age:number=0
  constructor(name:string,surname:string)
  {
    this.name=name
    this.surname=surname
  }
  greet()
  {
    var msg='Hi! my name is ${this.name} ${this.surname}'
    msg+="I'm ${this.age}"
  }
}

//编译完成的js
/*var Person=(function()
{
  function Person(name,surname)
  {
    this.age=0
    this.name=name
    this.surname=surname
  }
  Person.prototype.greet=function()
  {
    var msg="Hi! my name is "+this.name+" "+this.surname
    mag+="I'm"+this.age
  }
  return Person;
})();
*/