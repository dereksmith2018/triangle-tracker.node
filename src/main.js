import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './triangle-tracker.js';

$(document).ready(function () {
  $("form#input").submit(function (event) {
    event.preventDefault();
    var one = parseInt($("input#one").val());
    var two = parseInt($("input#two").val());
    var three = parseInt($("input#three").val());
    $(".card-body p").show();
    if (isNaN(one) || isNaN(two) || isNaN(three)) {
      $("span.result").text("Please enter three valid numbers");
      $("span.definition").text("N/A");
    }
    else {
      var triangle = new Triangle(one, two, three);
      var triangleResult = triangle.triangleIdentifier();
      $("span.result").text(triangleResult);
      if (triangleResult === "a equilateral triangle") {
        $("span.definition").text("All sides are equal.");
      }
      else if (triangleResult === "a isosceles triangle") {
        $("span.definition").text("Exactly 2 sides are equal.");
      }
      else if (triangleResult === "a scalene triangle") {
        $("span.definition").text("No sides are equal.");
      }
      else {
        $("span.definition").text("The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.");
      }
    }

  });
});