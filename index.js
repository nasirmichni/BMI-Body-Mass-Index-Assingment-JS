function calculateBMI() {
    // Get input values
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Check if both weight and height are provided
    if (weight && height) {
        // Convert height to meters
        var heightInMeters = height / 100;

        // Calculate BMI
        var bmi = weight / (heightInMeters * heightInMeters);

        // Interpret BMI result
        var interpretation = getBMICategory(bmi);

        // Display the result
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)} - ${interpretation}`;
    } else {
        alert('Please enter both weight and height.');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal Weight';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}