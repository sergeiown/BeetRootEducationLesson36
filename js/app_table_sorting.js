"use strict";

const { floor, random } = Math;

function createRandomTable() {
  const numberOfRows = floor(random() * 3) + 8; /* rnd from 8 to 10 */
  const numberOfColls = floor(random() * 3) + 8;

  const table = document.createElement("table");

  /* table header */
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  for (let i = 0; i < numberOfColls; i++) {
    let th = document.createElement("th");
    th.textContent = `Header ${i + 1}`;

    /* Add event listener to the header */
    th.addEventListener("click", () => sortTable(i));
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);

  /* table body */
  for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < numberOfColls; j++) {
      const cell = document.createElement("td");
      /* random cells content: digits or symbols */
      if (random() < 0.5) {
        cell.textContent = floor(random() * 10);
      } else {
        cell.textContent = String.fromCharCode(
          floor(random() * 26 + 65) /* ASCII 65 to 90: A to Z */
        );
      }
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}

function sortTable(col) {
  /*  access the first tag <table> of the document */
  const table = document.getElementsByTagName("table")[0];
  //   console.log(table);
  let rows = table.rows;
  //   console.log(rows);
  let switching = true;
  let shouldSwitch = true;
  let x = ""; /* current row */
  let y = ""; /* next row */
  let i = 0;

  while (switching) {
    switching = false;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[col];
      //   console.log(x);
      y = rows[i + 1].getElementsByTagName("td")[col];
      //   console.log(y);

      //   console.log(Number(x.textContent));
      if (x.textContent > y.textContent) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      /* switch rows position */
      switching = true;
    }
  }
}

const table = createRandomTable();
const button = document.querySelector("a");
/* because <a> is a button wrapper (parent) */

button.parentNode.insertBefore(table, button);
