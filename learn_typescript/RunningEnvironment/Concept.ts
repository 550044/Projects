//环境:typescript的运行环境就是javascript的运行环境，编译完ts代码，可能会被不同的js引擎执行。主要有浏览器，如Chrome,Internet Explor或Firefox,也可能是是在Node.js或RingoJS环境中运行的服务端程序和桌面应用
//DOM:文档对象模型，是用于动态访问和更新页面中视图结构的接口，它独立于平台和语言。模型的数据可以被进一步处理和修改，并且修改会反馈在当前视图中
//BOM:浏览器对象模型,是一个仅在浏览器运行环境下特有的对象集合。包含了导航栏、历史记录、屏幕、地址栏和文档等窗口对象

//帧：一个帧是一个连续的工作单元，当一个js函数被调用的时候，运行环境就会在栈中创建一个帧。帧力美健保存了特殊函数的参数和局部变量。但函数返回时，帧就会被从栈中推出
//栈：栈包含了一个信息在执行时的所有步骤（帧）。栈的数据结构为一个先进后出的对象集合。当一个帧被加入到一个栈中时，它总是被添加到最上面。
//队列：队列中包含了一个待执行信息的列表，每一个信息都与一个函数相互联系。当栈为空时，队列中的一条信息就会被取出并且被处理。处理的过程就是调用该信息所关联的函数，然后将创建的帧添加到栈的顶部。当栈再次为空的时候，本次信息处理就被视为结束
//堆：堆是一个内存存储空间，它不关注内部存储的内容的保存顺序。堆中保存了所有正在被使用的变量和对象。同时也保存了一些当前作用域已经不会被用到，但是还没有被垃圾回收的帧。

//this操作符
//js中的this操作符和其他语言中的略有不同。它的值通常由它所属的函数的调用方式所决定。
//1.全局上下文中的this操作符 再全局上下文中，this操作符总是指向全局对象。在浏览器中，window对象就是全局对象。
//2.函数上下文中的this操作符
/*在简单函数调用下，使用非严格模式，this指向全局对象
  function f()
  {
     return this //this指向全局对象
  }
  在简单函数调用下，使用严格模式，this为undefine
  function f()
  {
    "use strict"
    return this//this为undefine
  }
  函数以实例的方法的形式被调用，this指向该实例
  var p={
    age:16,
    getAge:function ()
    {
      return this.age//this指向p的实例
  }}
  当一个函数被作为构造函数(使用new关键字)调用的时候，this操作符指向正在被构造的对象
  function Person()
  {
    this.age=16
  }
  var p=new Person()
  console.log(p.age)
*/

/*apply,call,bind方法
 所有的函数都从Function.prototype中继承了apply,call,bind方法，可以使用这些方法设置函数内部this操作符的值
 call和apply相似，apply以数组的形式接受传递给函数的参数，call则是以单个分开参数的形式
 class Person
 {
   public name:string
   public surname:string
   constructor(name:string,surname:string)
   {
     this.name=name
     this.surname=surname
   }
   public greet(city:string,country:string)
   {
     var msg='Hi,my name is ${this.name} ${this.surname}.'
     msg+='I'm from ${city} (${country})'
     console.log(msg)
   }
 }
 let person=new Person("muzhui","lin")
 person.greet("fujian","china")
 使用apply和call函数调用该方法
 person.greet.apply(person,["muzhui","lin"])
 person.greet.call(person,"muzhui","lin")
 call和apply方法只在我们的确希望函数内的this操作符指向其他值时才有意义

 bind方法可以设置函数内this操作符的值，但是不会执行它。它返回了一个和原函数具有相同函数体和作用域的新函数，但是函数体内部的this操作符所指向的值已被永久改变为传递给bind方法的第一个参数，不论之后这个函数如何被调用，都不会改变
 let persen2=new Person("lingling","zheng")
 let greet=person.greet.bind(person2)//greet的this操作符不能被改变了
*/