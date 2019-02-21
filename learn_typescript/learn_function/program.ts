//函数声明和函数表达式
console.log(greet_one("linmuzhui"))
console.log(greet_two("zhenglingling"))//报错
function greet_one(name:string):string
{
  if(name)
    return "hello,"+name
}
var greet_two=function(name:string):string//变量提升
{
  if(name)
  return "hello,"+name
}
//声明函数变量
var greet_3:(name:string)=>string
//有可选参数的函数
function add(foo:number,bar:number,foobar?:number):number//可选参数必须位于必选参数列表的后面
{
  let result=foo+bar
  if(foobar!==undefined)
    result+=foobar
  return result
}