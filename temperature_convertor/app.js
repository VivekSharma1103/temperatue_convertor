function convertTemperature() {
    // Get the temperature input value
    var temperature = parseFloat(document.getElementById("temp").value);

    // Get the selected unit
    var unit = document.querySelector("select").value;

    // Check if the input is a valid number
    if (!isNaN(temperature) && unit!="default") {
        // Perform conversion based on selected unit
        var convertedTemperature;
        var resultUnit;
        if (unit === "Fahrenheit") {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultUnit = "Celsius";
        }
        else {
            convertedTemperature = (temperature * 9 / 5) + 32;
            resultUnit = "Fahrenheit";
        }

        // Display the converted temperature
        document.querySelector(".ans span").textContent = convertedTemperature.toFixed(2) + " "+resultUnit;
    } else {
        if (unit != "default") {
            // If input is not a valid number, display error message
            document.querySelector(".ans span").textContent = "Invalid input";
        }
        else {
            // document.querySelector(".ans span").textContent = "Choose a Unit!!!";
            alert("CHoose a unit first");
        }
    }
}

// Add event listener to the Convert button

// document.getElementById("Convert").addEventListener("click", convertTemperature);
( document.getElementById("Convert")).onclick = convertTemperature;
