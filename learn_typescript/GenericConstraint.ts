interface IValidable
{
   valid():string
}
class User implements IValidable
{
  valid():string
  {
    return "validing"
  }
  greet()
  {
    console.log("hello,I'm User")
  }
}
class Talk
{
  greet()
  {
    console.log("hello,I'm Talk")
  }
}

class GenericTest<T extends IValidable>
{
   run(entity:T)
   {
    console.log(entity.valid())
   }
}

let user=new User()
let genericTest=new GenericTest<User>()
genericTest.run(user)

//在泛型约束中使用多重类型：不能再定义泛型约束的时候指定多个类型，可以通过将限制约束的接口转换成一个超接口来解决这个问题

//范型中的new操作：type:T 转变成type:{new():T}
function test<T>(myType: { new(): T }):T
{
   //return new T()
   return new myType()
}
test<User>(User).greet()