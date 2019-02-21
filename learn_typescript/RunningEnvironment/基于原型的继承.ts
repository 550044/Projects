class Person
{
  name:string
  surname:string
  constructor(name:string,surname:string)
  {
    this.name=name
    this.surname=surname
  }
}
class SuperHero extends Person
{
  superpower:string
  constructor(name:string,surname:string,surperpower:string)
  {
    super(name,surname)
    this.superpower=surperpower
  }
  useSuperPower()
  {
    return `I'm using my ${this.superpower}`
  }
}

/*
var __extends=this.__extends||function(d,b) 匿名函数的参数是子类对象构造函数(d)和父类对象构造函数(b)
{
  for(var p in b) if(b.hasOwnProperty(p)) d[p]=b[p]//子类对象是因变量提升在定义前被传入__extends中的，
  //之后子类对象自身的定义会覆盖重复的父类对象属性的拷贝
  //当使用for...in遍历一个对象的实例时，它将迭代对象的实例属性。
  //当使用for...in遍历一个对象的构造函数时，它将会迭代类属性。
  function __(){this.contructor=d}
  __.prototype=b.portotype
  d.prototype=new __()
}

var SuperHero=(function(_super)
{
  __extends(SuperHero,_super)//因为函数声明会被提升至作用域的顶部，所以可以在SuperHero函数定义前将其作为参数传入__extends中
  function SuperHero(name,surname,superpower)
  {
    _super.call(this,name,surname)//this指向了将被创建的SuperHero实例
    this.superpower=superpower
  }
  SuperHero.prototype.userSuperPower=function()
  {
    return "I'm using my"+superpower
  }
  return SuperHero
})(Person);

函数表达式不会被提升。但将函数赋值给一个变量时，变量名会被提升，但它的值不会被提升
*/