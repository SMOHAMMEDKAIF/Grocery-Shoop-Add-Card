document.querySelector("form").addEventListener("submit", myFunction);
var totalPrice = 0;
var dataArr = [];
function myFunction() {
  event.preventDefault();
  var dataObj = {
    pName: document.querySelector("#name").value,
    pCategory: document.querySelector("#catagory").value,
    pBrand: document.querySelector("#brand").value,
    pPrice: document.querySelector("#price").value,
    pDeliveredBy: document.querySelector("#deliveredBy").value,
  };
  dataArr.push(dataObj);
  //console.log(dataArr)
  displayTable(dataArr);
  totalPrice = totalPrice + Number(dataObj.pPrice);
  document.querySelector("#total-price").innerText = totalPrice;
}

function displayTable(dataArr) {
  document.querySelector("tbody").innerHTML = "";
  dataArr.map(function (elem) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = elem.pName;
    var td2 = document.createElement("td");
    td2.innerText = elem.pCategory;
    var td3 = document.createElement("td");
    td3.innerText = elem.pBrand;
    var td4 = document.createElement("td");
    td4.innerText = elem.pPrice;
    var td5 = document.createElement("td");
    td5.innerText = elem.pDeliveredBy;
    var td6 = document.createElement("td");
    if (elem.pPrice > 100) {
      td6.innerText = "Expensive";
    } else {
      td6.innerText = "Not-Expensive";
    }
    var td7 = document.createElement("td");
    td7.innerText = "Delete";
    td7.addEventListener("click", function () {
      event.target.parentNode.remove();
      totalPrice = totalPrice - Number(elem.pPrice);
      document.querySelector("#total-price").innerText = totalPrice;
    });
    tr.append(td1, td2, td3, td4, td5, td6, td7);
    document.querySelector("tbody").append(tr);
  });
}
