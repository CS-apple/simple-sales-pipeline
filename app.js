const company = "Northwind Traders";
const value = 1200;

console.log(`format string ${company} is worth ${value}`);

const valueInput = document.querySelector("#pipeline-total");

console.log(valueInput.innerText);

valueInput.textContent = value;

console.log(`the value is $${valueInput.textContent}`)