/* VARIABLE DECLARATION */

/* BUTTONS */

let okBtn = document.getElementById("info-OK");
let calcBtn = document.getElementById("calculate-btn");
let addRowsBtn = document.getElementById("add-btn");
let closeBtn = document.getElementById("close-btn");

/* INPUT FIELDS */

let rows = document.getElementsByClassName("rows");
let itemInp = document.getElementsByClassName("item-name");
let priceInp = document.getElementsByClassName("price");
let qtyInp = document.getElementsByClassName("no-items");
let custInfo = document.getElementsByClassName("info-inp");

/* RESULT FIELDS */

let total = document.getElementsByClassName("total");
let slNo = document.getElementsByClassName("sl-no");
let sheetTotal = document.getElementsByClassName("total");

/* SUMMARY BOX */

let summary = document.querySelector(".summary");
let gross = document.getElementById("gross-dyn");
let net = document.getElementById("net-dyn");
let points = document.getElementById("points-dyn");
let cust_name = document.getElementById("name-dyn");
let phno = document.getElementById("ph-dyn");
let date = document.getElementById("date-dyn");

/* SUMMARY TABLE */

let tbody = document.getElementById("tbody");
let table = document.querySelector(".table-data");

/*---------------------------------------------------------------------*/

for (let n = 0; n < 10; n++) {
  let num = 1;
  slNo[n].innerHTML = num + n;
}

/* ADD-ROWS FUNCTION */

addRowsBtn.addEventListener("click", addRows);

let val = 10;
let html = "";

function addRows() {
  let addedRows = document.getElementById("add-rows");
  for (let i = 0; i < 10; i++) {
    html += `<div class="rows">
    <p class="sl-no">${(val = val + 1)}</p>
    <div class="input-fields">
        <input type="text" class="item-name">
        <input type="text" class="price">
        <input type="text" class="no-items">
    </div>
    <p class="total"></p>
</div>`;
  }
  addedRows.innerHTML = html;
}

/* CALCULATE FUNCTION */

calcBtn.addEventListener("click", calculate);
let count = 0;
let tableRows = "";

function calculate() {
  let grossVar = 0;
  let netVar = 0;
  let pointsVar = 0;
  for (let i = 0; i < 100; i++) {
    // CHECKING IF NUMBER IS PRESENT IN INPUT FIELD
    summary.classList.add("showBox");
    if (isNaN(Number.parseInt(priceInp[i].value))) {
      total[i].innerHTML = "";
      summary.classList.add("showBox");
      break;
    } else {
      count++;
      // DISPLAYING PRICE IN TOTAL COLUMN
      total[i].innerHTML =
        Number.parseInt(priceInp[i].value) * Number.parseInt(qtyInp[i].value);

      // DISPLAYING SUMMARY BOX

      // DISPLAYING CUSTOMER INFO
      cust_name.innerHTML = custInfo[0].value;
      phno.innerHTML = custInfo[1].value;
      date.innerHTML = custInfo[2].value;

      // ADDING TOTAL COLUMN AND DISPLAYING
      grossVar += Number.parseInt(total[i].innerHTML);
      console.log(grossVar);
      gross.innerHTML = "Rs. " + grossVar;

      // CALCULATING DISCOUNT AND DISPLAYING
      if (Number.parseInt(grossVar) > 2000) {
	console.log(netVar);
        netVar = grossVar - (grossVar / 100) * 10;
        net.innerHTML = "Rs. " + netVar;
      } else {
        net.innerHTML = "Rs. " + grossVar;
      }

      // CALCULATING AND DISPLAYING POINTS
      pointsVar = (grossVar / 100) * 10;
      pointsVar = Number.parseInt(pointsVar);
      points.innerHTML = pointsVar;

      // DISPLAYING TABLE ROWS IN SUMMARY BOX
      let row = tbody.insertRow(-1);
      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);
      let c5 = row.insertCell(4);

      c1.innerText = slNo[i].innerHTML;
      c2.innerHTML = itemInp[i].value;
      c3.innerHTML = priceInp[i].value;
      c4.innerHTML = qtyInp[i].value;
      c5.innerHTML = total[i].innerHTML;
    }
  }
}

/* CLOSE BUTTON */

closeBtn.addEventListener("click", close);

function close() {
  summary.classList.remove("showBox");
  // DELETING ROWS SO THAT THEY DON'T REPEAT WHEN CALCULATE IS CLICKED MORE THAN ONCE
  for (let i = 0; i < count; i++) {
    tbody.innerHTML = "";
  }
}
