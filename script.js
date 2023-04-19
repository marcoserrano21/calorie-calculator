$(document).ready(function() {
    var age = $('#calc-age').val();
    var height = $('#calc-height').val();
    var weight = $('#calc-weight').val();
    var walking = $('#calc-walking').val();
    var cardio = $('#calc-cardio').val();
    var gender = $('input[name=gender]:checked').val();
  
    function calculateCalories() {
      var bmr;
      if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
      } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
      }
  
      var totalCalories = bmr + (walking * 200) + (cardio * 500);
  
      $('.calc-target-gain span').text(Math.round(totalCalories + 500) + ' calories');
      $('.calc-target-maintain span').text(Math.round(totalCalories) + ' calories');
      $('.calc-target-lose span').text(Math.round(totalCalories - 500) + ' calories');
    }
  
    $('input[type="range"]').on('input', function() {
      if ($(this).attr('id') === 'calc-age') {
        $('#calc-age_value').text('Age: ' + $(this).val());
        age = $(this).val();
      } else if ($(this).attr('id') === 'calc-height') {
        $('#calc-height_value').text('Height: ' + $(this).val());
        height = $(this).val();
      } else if ($(this).attr('id') === 'calc-weight') {
        $('#calc-weight_value').text('Weight: ' + $(this).val() + 'kg');
        weight = $(this).val();
      } else if ($(this).attr('id') === 'calc-walking') {
        $('#calc-walking_value').text('Walking: ' + $(this).val() + ' hour(s) per week');
        walking = $(this).val();
      } else if ($(this).attr('id') === 'calc-cardio') {
        $('#calc-cardio_value').text('Cardio: ' + $(this).val() + ' hour(s) per week');
        cardio = $(this).val();
      }
      calculateCalories();
    });
  
    $('input[type="radio"]').on('change', function() {
      gender = $(this).val();
      calculateCalories();
    });
  
    calculateCalories();
  });
  

// pound to kilogram conversion
document.getElementById("lbs-btn").addEventListener("click", function() {
    const lbsInput = document.getElementById("lbs-input").value;
    const lbsResult = lbsInput / 2.20462;
    document.getElementById("lbs-result").innerHTML = lbsInput + " lbs = " + lbsResult.toFixed(2) + " kg";
});

// feet and inches to centimeter conversion
document.getElementById("ft-btn").addEventListener("click", function() {
    const ftInput = document.getElementById("ft-input").value;
    const [feet, inches] = ftInput.split(" ");
    const inchesValue = inches ? inches : 0; // add this line
    if (feet && inchesValue) {
        const ftResult = (feet * 30.48) + (inchesValue * 2.54);
        document.getElementById("ft-result").innerHTML = ftInput + " = " + ftResult.toFixed(2) + " cm";
    } else {
        document.getElementById("ft-result").innerHTML = "Please enter both feet and inches.";
    }
});
