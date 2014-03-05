/*global describe, beforeEach, it */

var java = require("java"),
    assert  = require("assert");

describe("Java module", function () {
    "use strict";

    describe("Arrays", function () {
        it("Should create an ArrayList", function () {
            java.newInstance("java.util.ArrayList", function (err, list) {
                assert.ok(!err);
                list.addSync("item1");
                list.addSync("item2");
                assert.ok(list.sizeSync(), 2);
            });
        });

        it("Should return the first element of the ArrayList", function (done) {
            java.newInstance("java.util.ArrayList", function (err, list) {
                assert.ok(!err);
                list.addSync("item1");
                list.addSync("item2");
                list.get(0, function (err, result){
                    assert.ok(!err);
                    assert.equal("item1", result);
                    done();
                });
            });
        });
    });
    describe("Static Methods", function () {
        it("Should print on console", function () {
            var out = java.getStaticFieldValue("java.lang.System", "out");
            out.printlnSync("this should be printed");
        });
    });
});
