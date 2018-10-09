import { Triangle } from '../src/triangle-tracker.js';

describe('Triangle', function() {
    var scaleneTriangle;
    var equalTriangle;
    var isoTriangle;
    var notTriangle;

    beforeEach(function() {
        scaleneTriangle = new Triangle(3, 4, 5);
        equalTriangle = new Triangle(3, 3, 3);
        isoTriangle = new Triangle(3, 3, 4);
        notTriangle = new Triangle(3, 4, 8);
    });
    it('should test whether a triangle has three sides.', function(){
        expect (scaleneTriangle.one).toEqual(3);
        expect (scaleneTriangle.two).toEqual(4);
        expect (scaleneTriangle.three).not.toEqual(6);
    });
    it('should correctly determine whether three lengths can be made into a triangle.', function() {
        var triangleCheckerResult = notTriangle.triangleChecker();
        expect(triangleCheckerResult).toEqual(false);
        var triangleCheckerResult2 = scaleneTriangle.triangleChecker();
        expect(triangleCheckerResult2).toEqual(true);
    });
    it('should check if the triangle is an equilateral, isosceles, scalene triangle', function(){
        var trianglecheck = equalTriangle.triangleIdentifier();
        expect(trianglecheck).toEqual("a equilateral triangle");
        var trianglecheckTwo = isoTriangle.triangleIdentifier();
        expect(trianglecheckTwo).toEqual("a isosceles triangle")
        var trianglecheckThree = scaleneTriangle.triangleIdentifier();
        expect(trianglecheckThree).toEqual("a scalene triangle");
    });
});