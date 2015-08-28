"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function(){
    it("should introduce himself with name and age", function(){
        var thePerson = new Person("Jack", 18);
        expect(thePerson.introduce()).to.equal("My name is Jack. I am 18 years old.");
    });
});

describe("Student", function() {
    var theStudent = new Student("Ron", 19, 101);
    id("should have field name, age and class", function() {
        expect(theStudent.name).to.equal("Ron");
        expect(theStudent.age).to.equal(19);
        expect(theStudent.class).to.equal(101);
    });

    it("should introduce himself with class", function() {
        expect(theStudent.introduce()).to.equal("I am a Student. I am at Class 101.")
    })
});