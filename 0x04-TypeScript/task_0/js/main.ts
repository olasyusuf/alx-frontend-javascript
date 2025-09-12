// import { studentsList, Student } from "./student"; // Import the interface and data
/**
 * Interface representing a student's basic information.
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * An array containing predefined student data.
 */
const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  }
];

/**
 * Renders a table of students to the HTML body.
 * Each row displays the student's first name and location.
 */
function renderStudentsTable(): void {
  const table: HTMLTableElement = document.createElement('table');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  // Create table header
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  const thFirstName: HTMLTableCellElement = document.createElement('th');
  thFirstName.textContent = 'First Name';
  const thLocation: HTMLTableCellElement = document.createElement('th');
  thLocation.textContent = 'Location';

  headerRow.appendChild(thFirstName);
  headerRow.appendChild(thLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Populate table body with student data
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table); // Append the table to the body
}

// Ensure the DOM is fully loaded before attempting to render the table
document.addEventListener('DOMContentLoaded', renderStudentsTable);