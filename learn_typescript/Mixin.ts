class WingedAnimal
{
  fly():string
  {
    return "I'm flying!"
  }
  greet():string
  {
    return "hello,I'm wingedAniaml"
  }
}
class Mammal
{
  breath(): string
   {
    return "I'm breathing!"
  }
  greet():string
  {
    return "hello,I'm Mammal"
  }
}
class Bat implements WingedAnimal,Mammal
{
  fly:()=>string
  breath:()=>string
  greet:()=>string
}

function applyMixins(derivedCtor:any,baseCtors:any[])
{
  baseCtors.forEach(baseCtor=>
  {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name=>
    {
      if(name!=="constructor")
      {
        derivedCtor.prototype[name]=baseCtor.prototype[name]
      }
    })
  })
}

applyMixins(Bat,[WingedAnimal,Mammal])
let bat=new Bat()
console.log(bat.breath())
console.log(bat.fly())
console.log(bat.greet())

//限制：1.只能在继承树上继承一级的方法和属性
//2.如果两个或更多的父类包含了同名的方法，那么继承的的方法中应用的是bastCtors数组中的最后一个类的方法