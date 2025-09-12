/**
 * Interface representing a teacher's information.
 */
interface Teacher {
  readonly firstName: string; // First name of the teacher (read-only)
  readonly lastName: string;  // Last name of the teacher (read-only)
  fullTimeEmployee: boolean; // Indicates if the teacher is a full-time employee
  yearsOfExperience?: number; // Optional: Number of years of experience
  location: string;          // Location of the teacher
  [key: string]: any;        // Allow for arbitrary additional properties
}

interface Director extends Teacher {
  numberOfReports: number; // Required attribute specific to Directors
}

/**
 * Interface for the printTeacher function.
 * Defines the expected signature of the function.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
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


// --- Example Usage (for demonstration and type checking) ---

const director1: Director = {
  firstName: "Charles",
  lastName: "David",
  fullTimeEmployee: true,
  yearsOfExperience: 15,
  location: "Lagos",
  numberOfReports: 8,
  bonus: 5000 // Allowed by the index signature inherited from Teacher
};

const director2: Director = {
  firstName: "Diana",
  lastName: "Evans",
  fullTimeEmployee: false, // Directors can also be part-time as per Teacher interface
  location: "Berlin",
  numberOfReports: 3,
};



/**
 * Implements the printTeacherFunction interface.
 * Returns First initial, then full last name.
 *
 * @param firstName The first name of the teacher.
 * @param lastName The last name of the teacher.
 * @returns A formatted string like "J. Doe".
 */
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};




// Example 3: Demonstrating readonly property (will cause a TypeScript error)
// teacher1.lastName = "Abubakar"; // Error: Cannot assign to 'lastName' because it is a read-only property.

console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);
console.log("Teacher 3:", teacher3);

// You can access additional properties directly
console.log("Teacher 1 has contract:", teacher1.contract);
console.log("Teacher 3 has no contract:", teacher3.contact);

console.log("Director 1:", director1);
console.log("Director 2:", director2);

// --- Example Usage (for demonstration and type checking) ---
const formattedTeacherName: string = printTeacher("John", "Doe");
console.log(formattedTeacherName); // Output: J. Doe

const anotherTeacher: string = printTeacher("Abubakar", "Jamil");
console.log(anotherTeacher); // Output: A. Jamil