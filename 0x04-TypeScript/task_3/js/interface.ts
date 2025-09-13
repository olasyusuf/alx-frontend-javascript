/**
 * Type alias for a Row ID, which is a number.
 */
export type RowID = number;

/**
 * Interface representing a row element in a data table.
 * Contains first name, last name, and an optional age.
 */
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional age field
}