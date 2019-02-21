class Base
{
  method1(){return 1}
  mtehod2(){return 2}
}
class Derived extends Base
{
  mtehod2(){return 3}//子类实例对象调用该函数时会返回3，称为原型遮蔽
  method3(){return 4}
}

/*对应的生成js代码
var Base=(function()
{
  function Base()
  {

  }
  Base.prototype.method1=function(){return 1}
  Base.prototype.method2=function(){retunr 2}
  return Base
})()
var Derived=(function(_super)
{
  __extends(Derived,_super)
  Derived()
  {
   _super.apply(this,arguments)
  }
  Derived.prototype.method2=function(){return 3}
  Derived.prototype.method3=function(){return 4}
  return Derived
})(Base)
 */

