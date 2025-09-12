/**
 * Interface representing a teacher's information.
 */
export interface Teacher {
  readonly firstName: string; // First name of the teacher (read-only)
  readonly lastName: string;  // Last name of the teacher (read-only)
  fullTimeEmployee: boolean; // Indicates if the teacher is a full-time employee
  yearsOfExperience?: number; // Optional: Number of years of experience
  location: string;          // Location of the teacher
  [key: string]: any;        // Allow for arbitrary additional properties
}

/**
 * Example teacher data following the Teacher interface.
 */
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Abdul",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "Lagos",
  contract: true, // Example of an arbitrary additional property
};

const teacher2: Teacher = {
  firstName: "Emmanuel",
  lastName: "Johnson",
  fullTimeEmployee: false,
  location: "Abuja",
};

const teacher3: Teacher = {
  firstName: "Bob",
  lastName: "Johnson",
  fullTimeEmployee: false,
  location: "Akra, Ghana",
};

// Example 3: Demonstrating readonly property (will cause a TypeScript error)
// teacher1.lastName = "Abubakar"; // Error: Cannot assign to 'lastName' because it is a read-only property.

console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);
console.log("Teacher 3:", teacher3);

// You can access additional properties directly
console.log("Teacher 1 has contract:", teacher1.contract);
console.log("Teacher 3 has no contract:", teacher3.contact);