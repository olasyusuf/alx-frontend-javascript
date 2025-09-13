
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

  if (typeof salary === "number" && salary < 500) {
    console.log('Teacher');
    return new Teacher();
  }
  
  console.log('Director');
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// --- Example Usage (for demonstration and type checking) ---
console.log("Employee with salary $200:");
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Output: Cannot work from home (from Teacher)
console.log(employee1.getCoffeeBreak()); // Output: Cannot have a break (from Teacher)

// console.log(employee1.workTeacherTasks()); // Type check would fail here without casting or type guard
if ((employee1 as TeacherInterface).workTeacherTasks) { // Using type assertion for specific method call
    console.log((employee1 as TeacherInterface).workTeacherTasks()); // Output: Getting to work
}


console.log("\nEmployee with salary $600:");
const employee2 = createEmployee(600);
console.log(employee2.workFromHome()); // Output: Working from home (from Director)
console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break (from Director)

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