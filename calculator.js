window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
const values = {amount : 100000, years : 30, rate : 4.25};
  let userAmount = document.querySelector('#loan-amount');
  userAmount.value = values.amount;
  let userYears = document.querySelector('#loan-years');
  userYears.value = values.years;
  let userRate = document.querySelector('#loan-rate');
  userRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
const newValues = getCurrentUIValues()
updateMonthly(calculateMonthlyPayment(newValues));
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12;
  let numberOfPayments = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -numberOfPayments))
  ).toFixed(2)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector("#monthly-payment");
  monthlyPayment.innerText = `$${monthly}`
}
