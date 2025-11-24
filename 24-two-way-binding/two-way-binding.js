// Custom two-way binding implementation in vanilla JavaScript

const inputElement = document.getElementById('inputElement');

// Model object to hold the data
const model = {
    value: 'Hi there!'
}

function modelToView(model, input) {

    // initialize input value with model value
    input.value = model.value;
    console.log('Initial input value set to:', input.value);
    // listen to model changes

    Object.defineProperty(model, 'value', {
        get: function () {
            console.log('Input updated to:', input.value);

            return input.value;
        },
        set: function (newValue) {
            if (input.value !== newValue) {
                input.value = newValue;
                console.log('Input updated to:', input.value);
            }
        }

    })
}

// list to input changes
inputElement.addEventListener('change', function (event) {
    // update model value with input value
    model.value = event.target.value;
    console.log('Model updated to:', model.value);
});




// usage
modelToView(model, inputElement);

// Test cases
inputElement.value = 'Hello World!';
inputElement.dispatchEvent(new Event('change'));
console.log(model.value); // Output: Hello World!

model.value = 'Goodbye!';
console.log(inputElement.value); // Output: Goodbye!