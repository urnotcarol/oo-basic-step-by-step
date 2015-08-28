"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Person = require('../../src/practice_5').Person;
var Student = require('../../src/practice_5').Student;
var Worker = require('../../src/practice_5').Worker;

describe("Student", function(){
    it("should introduce himself with name, age and class", function(){
        var theStudent = new Student("Jack", 20, 1);
        expect(theStudent.name).to.equal("Jack");
        expect(theStudent.age).to.equal(20);
        expect(theStudent.klass).to.equal(1);
        expect(theStudent.introduce()).to.equal("My name is Jack. I am 20 years old. I am a student. I am at class 1.");
    });
});

describe("Worker", function() {
    it("should introduce himself with name, age and job", function(){
        var theWorker = new Worker("Ron", 30);
        expect(theWorker.name).to.equal("Ron");
        expect(theWorker.age).to.equal(30);
        expect(theWorker.introduce()).to.equal("My name is Ron. I am 30 years old. I am a worker. I have a job.");
    });
});