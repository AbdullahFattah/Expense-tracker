var table = document.querySelector(".i-table");
var inputItem = document.querySelector("#input-item");
var inputPrice = document.querySelector("#input-amount");
var button = document.querySelector("#add-button");
var totalSpan = document.querySelector(".total");
var totalArray = [];

// Date
var currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let cDate = cDay + " " + cMonth;

button.addEventListener("click", () => {
  if (inputItem.value !== "" && inputPrice.value !== "") {
    var tr = document.createElement("tr");
    var tdN = document.createElement("td");
    var tdP = document.createElement("td");
    var tdDate = document.createElement("td");

    table.appendChild(tr);
    tr.appendChild(tdN);
    tr.appendChild(tdP);
    tr.appendChild(tdDate);

    var itemName = inputItem.value;
    tdN.innerText = itemName;
    var itemPrice = inputPrice.value;
    tdP.innerText = "$" + itemPrice;

    tdDate.innerText = cDate;
    // Reset values
    inputItem.value = "";
    inputPrice.value = "";

    // Total
    function sums(e) {
      return e.reduce((a, b) => {
        // return parseInt(a) + parseInt(b);
        return +a + +b;
      }, itemPrice);
    }
    let sum = parseInt(sums(totalArray));

    totalSpan.innerText = `Total:${sum}`;

    totalArray.push(itemPrice);
  } else {
    //   Empty field error
    console.log("Error: Enter something");
  }
});

// tdName.appendChild(itemName);

// button.addEventListener("click", () => {
//   //   if (inputItem.value !== "" && inputPrice !== "") {
//   //     inputItem.value = "";
//   //     inputPrice.value = "";
//   var tr = document.createElement("tr");
//   table.appendChild(tr);
//   tr.appendChild(tdName);
//   tr.appendChild(tdPrice);

//   addTaskTextToTd();
//   //   }
// });

// function addTaskTextToTd() {
//   var tdName = document.createElement("td");
//   var tdPrice = document.createElement("td");
//   var itemName = document.createTextNode(inputItem.value);
//   var itemPrice = document.createTextNode(inputPrice.value);
//   tdName.innerHTML = "Name";
//   tdPrice.innerHTML = "Amount";
// }
