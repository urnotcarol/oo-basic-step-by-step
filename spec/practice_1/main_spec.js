"use strict";
var Person = require('../../src/practice_1.js');
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe("Person", function(){
    var thePerson = new Person("Jack", 17);
    it("should have field name and age", function() {
        expect(thePerson.name).to.exist;
        expect(thePerson.age).to.exist;
    })
    it("should have a method introduce", function() {
        var result = thePerson.introduce();
        expect(result).to.equal("My name is Jack. I am 17 years old.")
    })
});