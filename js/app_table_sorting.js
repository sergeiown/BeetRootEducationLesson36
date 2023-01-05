"use strict";

const { floor, random } = Math;

const createRandomTable = () => {
  let table = document.createElement("table");

  /* Generate a random number of rows and columns from 8 to 10 */
  let rows = floor(random() * 3) + 8;
  let cols = floor(random() * 3) + 8;

  /* table header */
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (let i = 0; i < cols; i++) {
    let th = document.createElement("th");
    th.textContent = `Header ${i + 1}`;
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);

  /* table body */
  let tbody = document.createElement("tbody");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      td.textContent = floor(random() * 100);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  return table;
};

const table = createRandomTable();
// const button = document.querySelector("button");
// table.insertAdjacentElement("beforebegin", button);

/* Use .prepend to let the button to be the last child of the body */
document.body.prepend(table);
