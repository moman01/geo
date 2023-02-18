//Card Hover

var colors = ["#F44336", "#9C27B0", "#3F51B5", "#009688", "#FFEB3B", "#FF5722"];
var cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", function () {
    var randomIndex = Math.floor(Math.random() * colors.length);
    this.style.backgroundColor = colors[randomIndex];
  });
  cards[i].addEventListener("mouseleave", function () {
    this.style.backgroundColor = "";
  });
}



let serial = 0;

document.getElementById("tri-btn").addEventListener("click", function () {
  const shapeName = document.getElementById('shape-name').innerText;
  const value1 = document.getElementById("value1").value;
  const value2 = document.getElementById("value2").value;
  const area = parseFloat(value1) * parseFloat(value2) *0.5;
  
 tableData(shapeName,value1,value2,area);
  // const container = document.getElementById("table-container");
  // const tableRow = document.createElement("tr");
  // tableRow.innerHTML = `
  //  <td>${serial+=1}</td>
  // <td>${shapeName } </td>
  // <td>${area} </td>
  
  // `;

  // container.appendChild(tableRow);
  
});

document.getElementById('rec-btn').addEventListener('click',function(){
 const shapeName = document.getElementById('rec-shape').innerText;
 const value1 = document.getElementById("rvalue1").value;
 const value2 = document.getElementById("rvalue2").value;
 const area = parseFloat(value1) * parseFloat(value2);
  
 tableData(shapeName,value1,value2,area);

});

document.getElementById("par-btn").addEventListener('click',function(){
  const shapeName = document.getElementById("shape-name3").innerText;
  const value1 = document.getElementById('par-value1').innerText;
  const value2 = document.getElementById('par-value2').innerText;
  const area = parseFloat(value1) * parseFloat(value2);

  tableData(shapeName, value1, value2, area);
})


   // Making Function 
function tableData(shapeName, value1, value2, area){
  const container = document.getElementById("table-container");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
   <td>${serial+=1}</td>
  <td>${shapeName } </td>
  <td>${area} </td>
  `;
  container.appendChild(tableRow);
}
