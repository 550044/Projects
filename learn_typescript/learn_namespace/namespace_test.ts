//import关键字可以用在内部模块中，为另外一个模块提供别名
import model_one_class=app.myModel.Model_one
let model_one=new model_one_class()
let myTest_one=new app.myTest.myTest_one()

//tsc --out output.js input.js
//可以使用--out标志将所有输入的文件编译成一个单一的js文件