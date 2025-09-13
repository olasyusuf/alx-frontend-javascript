import { RowID, RowElement } from './interface'; // Import types
import CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`New Row ID: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };
const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated Row ID: ${updatedRowID}`);

CRUD.deleteRow(newRowID);
console.log(`Deleted Row with ID: ${newRowID}`);