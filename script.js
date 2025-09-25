const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // get all price cells
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    total += parseInt(cell.textContent) || 0; // handle editable values
  });

  // check if #ans already exists
  let ansCell = document.querySelector("#ans");
  if (!ansCell) {
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");

    newCell.colSpan = 2;
    newCell.id = "ans"; // required by Cypress test
    newCell.style.fontWeight = "bold";

    newRow.appendChild(newCell);
    table.appendChild(newRow);

    ansCell = newCell;
  }

  // update total
  ansCell.textContent = total;
};

getSumBtn.addEventListener("click", getSum);
