const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // get all price cells
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    total += parseInt(cell.textContent); // convert text to number and add
  });

  // create a new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // span across both columns
  newCell.colSpan = 2;
  newCell.style.fontWeight = "bold";
  newCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
