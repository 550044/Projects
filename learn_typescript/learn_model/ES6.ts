//ES6模块支持程序设计时和运行时
class UserModel
{

}
interface UserModel
{

}
class TalkModel
{

}

//export方式
//1. export {UserModel} 输出所有的同名定义，会输出类和接口
//2. export class UserModel{}
//3. export { UserModel as User} 别名输出
//4. export {UserModel,TalkModel} 从一个模块中导出多个实体


//import方式
//1. import {UserModel} from "./models" 
//import关键字给每个导入的组件创建一个变量，值为对应文件中的对应类或接口的一个引用
//2. import {UserModel,TalkModel} from "./models" 从一个模块中导出多个实体