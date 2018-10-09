export var Triangle = function(one, two, three) {
    this.one = one;
    this.two = two;
    this.three = three;
};

Triangle.prototype.triangleChecker = function() {
    var max = Math.max(this.one, this.two, this.three);
    var sum = this.one + this.two + this.three;
    if (sum-max <= max)
        return false;
    else
        return true;
};

Triangle.prototype.triangleIdentifier = function() {
    if (this.triangleChecker(this.one, this.two, this.three) === true) {
        if (this.one === this.two && this.one === this.three)
        return "a equilateral triangle";
        else if (this.one === this.two || this.one === this.three || this.two === this.three)
        return "a isosceles triangle";
        else
        return "a scalene triangle";
    }
    else
        return "not a triangle";
};