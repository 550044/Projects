//1.Person.prototype 直接使用prototype属性来访问原型
//2.Person.getPrototypeOf(person) 使用getPrototypeOf函数来访问一个实例对象的原型
//3.person.__proto__ 这个属性暴露对象内部可访问的原型属性，访问它的效率十分低，考虑到应用性能的方面要避免使用它