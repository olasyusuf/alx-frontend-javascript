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