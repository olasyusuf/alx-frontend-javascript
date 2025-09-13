// // Cpp.ts
// /// <reference path="Subject.ts" />
// import Subject from './Subject'

// namespace Subjects {
//   // Declaration merging: add optional attribute
//   export interface Teacher {
//     experienceTeachingC?: number;
//   }

//   export class Cpp extends Subject.Subject {
//     getRequirements(): string {
//       return "Here is the list of requirements for Cpp";
//     }

//     getAvailableTeacher(): string {
//       if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
//         return "No available teacher";
//       }
//       return `Available Teacher: ${this.teacher.firstName}`;
//     }
//   }
// }

// export default Subjects

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}