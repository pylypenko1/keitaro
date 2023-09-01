let investitionInput = document.getElementById("investition");

let twitterIncome = document.getElementById("twitterIncome")
let amcxIncome = document.getElementById("amcxIncome")
let starbucksIncome = document.getElementById("starbucksIncome")
let qualcommIncome = document.getElementById("qualcommIncome")
let nikeIncome = document.getElementById("nikeIncome")
let paypalIncome = document.getElementById("paypalIncome")


    twitterIncome.textContent = (500 / 100 * 102.70).toFixed(2)
    amcxIncome.textContent =  (500 / 100 * 71.54).toFixed(2)
    starbucksIncome.textContent =  (500 / 100 * 119.25).toFixed(2)
    qualcommIncome.textContent =  (500 / 100 * 138.10).toFixed(2)
    nikeIncome.textContent =  (500 / 100 * 160.41).toFixed(2)
    paypalIncome.textContent =  (500 / 100 * 138).toFixed(2)


investitionInput.oninput=function( event ){

    investitionInputNumber = parseInt(investitionInput.value, 10)

  
   
    twitterIncome.textContent = (investitionInputNumber / 100 * 102.70).toFixed(2)
    amcxIncome.textContent =  (investitionInputNumber / 100 * 71.54).toFixed(2)
    starbucksIncome.textContent =  (investitionInputNumber / 100 * 119.25).toFixed(2)
    qualcommIncome.textContent =  (investitionInputNumber / 100 * 138.10).toFixed(2)
    nikeIncome.textContent =  (investitionInputNumber / 100 * 160.41).toFixed(2)
    paypalIncome.textContent =  (investitionInputNumber / 100 * 138).toFixed(2)

    if(investitionInput.value == "" || investitionInput.value == " " ){
        twitterIncome.textContent = (500 / 100 * 102.70).toFixed(2)
        amcxIncome.textContent =  (500 / 100 * 71.54).toFixed(2)
        starbucksIncome.textContent =  (500 / 100 * 119.25).toFixed(2)
        qualcommIncome.textContent =  (500 / 100 * 138.10).toFixed(2)
        nikeIncome.textContent =  (500 / 100 * 160.41).toFixed(2)
        paypalIncome.textContent =  (500 / 100 * 138).toFixed(2)
    }
};

