import Teacher = Subjects.Teacher;


const { Cpp, Java, React } = Subjects;

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();


// Create and export a Teacher object with experience in C++
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// --- C++ Subject ---
console.log('C++');
// Set the teacher for the C++ subject
cpp.setTeacher(cTeacher);
// Log the requirements and available teacher
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('');

// --- Java Subject ---
console.log('Java');
// Set the teacher for the Java subject
java.setTeacher(cTeacher);
// Log the requirements and available teacher
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('');

// --- React Subject ---
console.log('React');
// Set the teacher for the React subject
react.setTeacher(cTeacher);
// Log the requirements and available teacher
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
console.log('');