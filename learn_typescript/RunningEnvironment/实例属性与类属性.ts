//js是动态编程语言，可以在运行时为一个实例添加属性和方法，并且它们不必为对象（类）声明中的一部分
function Person(name: string, surname: string) {
  //实例属性
  this.name = name
  this.surname = surname
}
var person = new Person("muzhui", "lin")
person.email = "1032654927@qq.com"//动态添加属性值
person.greet = function () {
  var msg = "Hello,I'm " + this.name + " " + this.surname
  return msg
}
console.log(person.greet())
//遍历person的属性
for (var property in person) {
  console.log("property:" + property + " value:" + person[property])
}


//类的属性和方法的值是在它的实例间共享的，类的属性和方法有时也被称为静态属性和方法，类的属性经常用来保存一些静态值
//定义类中的属性和方法
function MathHelper() {
}
MathHelper.prototype.PI = 3.1415926;
MathHelper.prototype.areaofCircle = function (radius: number) {
  return radius * radius * this.PI
}
console.log(MathHelper.prototype.areaofCircle(10))
//可以在实例方法中访问类属性，但是不可以在类属性或方法中访问实例属性或方法
let mathHelper = new MathHelper()
console.log(mathHelper.PI)//实例化对象访问类属性
MathHelper.prototype.girthOfCircle = function (radius: number) {
  return 2 * this.PI * radius
  //return 2*radius*this.constructor.PI //NaN
}
console.log(mathHelper.girthOfCircle(10))//调用实例对象中的方法
console.log(MathHelper.prototype.girthOfCircle(10))//调用类中的类方法，也就是静态方法

