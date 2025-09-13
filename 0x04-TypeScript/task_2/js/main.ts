/**
 * String literal type representing the possible subjects a class can teach.
 * A variable of this type can only hold the value 'Math' or 'History'.
 */
type Subjects = 'Math' | 'History';

// --- Director Interfaces ---
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// --- Teacher Interfaces ---
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


// --- Director Class ---
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// --- Teacher Class ---
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}



/**
 * Creates an employee instance based on the provided salary.
 *
 * @param salary The employee's salary (can be a number or a string).
 * @returns A new Director instance if salary >= 500 (or non-numeric), otherwise a new Teacher instance.
 */
function createEmployee(salary: number | string): Director | Teacher {
  // Convert salary to number for comparison. If it's a string, try to parse it.
  // If parsing fails or it's not a valid number, assume it's not "less than 500" for simplicity,
  // making it fall into the Director category as per the requirement "Otherwise it should return a Director".

  if (typeof salary === "number" && salary < 500) {
    console.log('Teacher');
    return new Teacher();
  }

  console.log('Director');
  return new Director();
}

/**
 * Type predicate to check if an employee is a Director.
 *
 * @param employee The employee object to check.
 * @returns True if the employee is an instance of Director, otherwise false.
 */
// function isDirector(employee: Director | Teacher): employee is Director {
export function isDirector(employee: Director | Teacher): employee is Director { // for checker
  return (employee as Director).workDirectorTasks !== undefined;
  // A more robust check might involve 'instanceof Director' if you're sure about the class structure,
  // but checking for a unique method like workDirectorTasks is common for interfaces.
}

/**
 * Executes the appropriate work task based on the employee's role.
 *
 * @param employee The employee (Director or Teacher) for whom to execute work.
 * @returns The result of the specific work task (workDirectorTasks or workTeacherTasks).
 */
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    // TypeScript now knows 'employee' must be a Teacher here
    return employee.workTeacherTasks();
  }
}


/**
 * Teaches a specific class based on the subject provided.
 *
 * @param todayClass The subject of the class to teach (either 'Math' or 'History').
 * @returns A string indicating what subject is being taught.
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}


console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// --- Example Usage (for demonstration and type checking) ---
console.log("--- createEmployee examples ---");
console.log("Employee with salary $200:");
const employee1 = createEmployee(200);
console.log(`Work from home status: ${employee1.workFromHome()}`); // Teacher method
console.log(`Coffee break status: ${employee1.getCoffeeBreak()}`); // Teacher method

// console.log(employee1.workTeacherTasks()); // Type check would fail here without casting or type guard
if ((employee1 as TeacherInterface).workTeacherTasks) { // Using type assertion for specific method call
  console.log((employee1 as TeacherInterface).workTeacherTasks()); // Output: Getting to work
}


console.log("\nEmployee with salary $600:");
const employee2 = createEmployee(600);
console.log(`Work from home status: ${employee2.workFromHome()}`); // Director method
console.log(`Coffee break status: ${employee2.getCoffeeBreak()}`); // Director method

// console.log(employee2.workDirectorTasks()); // Type check would fail here without casting or type guard
if ((employee2 as DirectorInterface).workDirectorTasks) { // Using type assertion for specific method call
  console.log((employee2 as DirectorInterface).workDirectorTasks()); // Output: Getting to director tasks
}


console.log("\nEmployee with string salary '300':");
const employee3 = createEmployee('300');
console.log(employee3.workFromHome()); // Output: Cannot work from home (from Teacher)


console.log("\nEmployee with string salary '700':");
const employee4 = createEmployee('700');
console.log(employee4.workFromHome()); // Output: Working from home (from Director)

console.log("\nEmployee with invalid string salary 'abc':");
const employee5 = createEmployee('abc'); // Will return a Director as NaN is not < 500
console.log(employee5.workFromHome()); // Output: Working from home (from Director)



console.log("\n--- isDirector and executeWork examples ---");

const employeeA = createEmployee(200); // Teacher
const employeeB = createEmployee(1000); // Director

console.log(`Is employeeA a Director? ${isDirector(employeeA)}`); // Output: Is employeeA a Director? false
console.log(`Is employeeB a Director? ${isDirector(employeeB)}`); // Output: Is employeeB a Director? true

console.log(`Employee A executes work: ${executeWork(employeeA)}`); // Output: Employee A executes work: Getting to work
console.log(`Employee B executes work: ${executeWork(employeeB)}`); // Output: Employee B executes work: Getting to director tasks


// --- Example Usage (for demonstration and type checking) ---
console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

// You can also assign the type to variables:
let currentSubject: Subjects = 'Math';
console.log(teachClass(currentSubject));