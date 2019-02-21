//外部模块语法，只能在程序设计阶段使用，一旦被编译成js,就会转换成AMD,CommonJS,UMD,或SystemJS模块来执行

//export方式
//1. export class UserModel{} 可以在类或接口上直接使用export
//2. export=UserModel 直接使用export关键字自身，只需要将输出的值赋给export

//import方式
//1. import User=require("./user_class") 声明一个新的变量User,User变量将使用user_class模块输出的内容作为自身的值