// import Subject from './Teacher'

// namespace Subjects {
//   export class Subject {
//     protected teacher: Subject.Teacher;

//     set setTeacher(teacher: Subject.Teacher) {
//       this.teacher = teacher;
//     }
//   }
// }

// export default Subjects

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

