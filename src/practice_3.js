function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function() {
  return "My name is " + this.name + "." + " I am " + this.age + " years old.";
}

function Student(name, age, klass) {
  Person.call(this, name, age);
  this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

module.exports = {
  Person: Person,
  Student: Student
};