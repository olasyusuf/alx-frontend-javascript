/**
 * Interface representing a student's basic information.
 */
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * An array containing predefined student data.
 */
export const studentsList: Student[] = [
  {
    firstName: "Abike",
    lastName: "Dawud",
    age: 20,
    location: "Lagos"
  },
  {
    firstName: "Obi",
    lastName: "Jonathan",
    age: 22,
    location: "Abuja"
  }
];