// Get DOM elements
const temperatureInput = document.getElementById('temperature');
const celsiusResult = document.getElementById('celsius');
const fahrenheitResult = document.getElementById('fahrenheit');
const kelvinResult = document.getElementById('kelvin');
const unitButtons = document.querySelectorAll('.unit-btn');

let selectedFromUnit = 'celsius';

// Unit button click handlers
unitButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        unitButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        // Update selected unit
        selectedFromUnit = this.dataset.from;
        // Recalculate conversions
        convertTemperature();
    });
});

// Input event listener for real-time conversion
temperatureInput.addEventListener('input', convertTemperature);

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Main conversion handler
function convertTemperature() {
    const inputValue = parseFloat(temperatureInput.value);

    // If input is empty or not a number, show dashes
    if (isNaN(inputValue) || temperatureInput.value === '') {
        celsiusResult.textContent = '-';
        fahrenheitResult.textContent = '-';
        kelvinResult.textContent = '-';
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert input to Celsius first, then to other units
    switch(selectedFromUnit) {
        case 'celsius':
            celsius = inputValue;
            fahrenheit = celsiusToFahrenheit(celsius);
            kelvin = celsiusToKelvin(celsius);
            break;
        case 'fahrenheit':
            fahrenheit = inputValue;
            celsius = fahrenheitToCelsius(fahrenheit);
            kelvin = fahrenheitToKelvin(fahrenheit);
            break;
        case 'kelvin':
            kelvin = inputValue;
            celsius = kelvinToCelsius(kelvin);
            fahrenheit = kelvinToFahrenheit(kelvin);
            break;
    }

    // Display results rounded to 2 decimal places
    celsiusResult.textContent = celsius.toFixed(2);
    fahrenheitResult.textContent = fahrenheit.toFixed(2);
    kelvinResult.textContent = kelvin.toFixed(2);
}
