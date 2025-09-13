import { RowID, RowElement } from './interface'; // Import types

declare namespace CRUD {
  /**
   * Inserts a new row into the database.
   * @param row The RowElement to insert.
   * @returns The ID of the newly inserted row.
   */
  declare function insertRow(row: RowElement): number;

  /**
   * Deletes a row from the database.
   * @param rowId The ID of the row to delete.
   */
  declare function deleteRow(rowId: RowID): void;

  /**
   * Updates an existing row in the database.
   * @param rowId The ID of the row to update.
   * @param row The updated RowElement data.
   * @returns The ID of the updated row.
   */
  declare function updateRow(rowId: RowID, row: RowElement): RowID;
}

export default CRUD;