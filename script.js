const initalPrice = document.querySelector("#initial-price");

const stockQuantity = document.querySelector("#stocks-quantity");

const currentPrice = document.querySelector("#current-price");

const submitBtn = document.querySelector("#submit-btn");

const outputBox = document.querySelector("#output-box");

const photu = document.querySelector('#imgg');


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initalPrice.value);
  var qty = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = Number.parseFloat((loss / initial) * 100).toFixed(2);

    showOutput(
      `Oh Shit!😦, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
    outputBox.style.backgroundColor = "red";
    outputBox.style.color = "white";
    photu.innerHTML = "<img src='https://media.giphy.com/media/V4YgEDg3OuElrscJTV/giphy.gif' style='display:block;margin:1.5rem auto 1rem;max-width:350px;max-height:250px;border-radius:15px;'>";
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = Number.parseFloat((profit / initial) * 100).toFixed(2);

    showOutput(
      `Congratulations!🥳, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
    outputBox.style.backgroundColor = "green";
    outputBox.style.color = "white";
    photu.innerHTML = "<img src='https://media.giphy.com/media/3ohfFqNgHB0qOisfdu/giphy.gif' style='display:block;margin:1.5rem auto 1rem;max-width:350px;max-height:250px;border-radius:15px;'>";
  } else {
    showOutput(`Koi Baat Nahi!!🙂`);
    outputBox.style.backgroundColor = "yellow";
    photu.innerHTML = "<img src='https://media.giphy.com/media/14cfLnFBT4xDGCgGOm/giphy.gif' style='display:block;margin:1.5rem auto 1rem;max-width:350px;max-height:250px;border-radius:15px;'>";
  }
}
function showOutput(message) {
  outputBox.innerText = message;
}
