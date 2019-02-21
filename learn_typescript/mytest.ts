function validEmail(email:string) :boolean
{
  let re=/\S+@\S+\.\S+/
  return re.test(email)
}

class Person
{
  name:string
  surname:string
  email:string
  constructor(name:string,surname:string,email:string)
  {
    this.name=name
    this.surname=name
    this.email=email
  }
  greet() :string
  {
    return this.name+" say:hello!!"
  }
}

class Teacher extends Person
{
  subject:string

  constructor(name:string,surname:string,email:string,subject:string)
  {
    super(name,surname,email)
    this.subject=subject
  }
  teach():string
  {
    return this.name+" teach!!"
  }
}

let teacher=new Teacher("muzhui","lin","1032654927@qq.com","math")
console.log(teacher.teach())