
console.log("Hello from app.js")
const companyA = "Northwind Traders";
//const value = 12000;
//const stage = "Lost";
//const isClosed = stage == "Won" || stage === "Lost";

const valueA = 12000;
const stageA = "LEAD";

const companyB = "Umbrella Health";
const valueB = 45000;
const stageB = "Won";

const companyC = "Penny pinchers";
const valueC = 50;
const stageC = "Lead";

const totalEl = document.getElementById("pipeline-total");

function openValue(stage, value) {
    if (stage === "Won" || stage === "Lost") {
        return 0;
    }
    return value;
}

const openTotal = openValue(stageA, valueA) + openValue(stageB, valueB) + openValue(stageC, valueC);


totalEl.textContent = `$${openTotal}`;


function dealSummary(company, value){
    let summary = ` ${company} - ${value} `;
    return summary;
}
console.log(dealSummary(companyA, valueA));

/* Practice 
    add third deal and include it in total 
*/


// console.log(`format string ${company} is worth ${value}`);

// const valueInput = document.querySelector("#pipeline-total");

// console.log(valueInput.innerText);

// valueInput.textContent = value;

// console.log(`the value is $${valueInput.textContent}`)