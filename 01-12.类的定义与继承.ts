// 类的定义
class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}
// 类的继承
class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  getName() {
    return super.getName() + 'lee';
  }
}

// 实例化一个类
const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
