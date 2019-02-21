//当声明一个命名空间时，所有实体部分默认都是私有的，可以使用export关键字导出公共部分
//可以在命名空间中声明另外一个命名空间
//同一个命名空间在不同的文件中，也可以在第三个文件中同时访问到
namespace app
{
  export namespace myModel
  {
    export class Model_one
    {

    }
    class Model_Two
    {

    }
  }

  namespace myTalk
  {
    class Talk_one
    {

    }
    class Talk_two
    {

    }
  }
}
//命名空间可以包含点号
namespace app.myTest
{
  export class myTest_one
  {

  }
}