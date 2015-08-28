function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.basic_introduce = function() {
  return "My name is " + this.name + "." + " I am " + this.age + " years old. ";
}

function Student(name, age, klass) {
  Person.call(this, name, age);
  this.klass = klass;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
  return this.basic_introduce() + "I am a student. I am at class " + this.klass + ".";
}

function Worker(name, age) {
  Person.call(this, name, age);
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function() {
  return this.basic_introduce() + "I am a worker. I have a job.";
}

module.exports = {
  Person: Person,
  Student: Student,
  Worker: Worker
};