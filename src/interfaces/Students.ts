import { Student } from "../entities/Student";
import { Course } from "../entities/Course";

export interface StudentProps {
  name: string;
  age: number;
  course: Course;
  id: number;
  students: Student[];
}

export interface StudentsMethodsProps {
  registerStudent(student: string, age: number): void;
  removeStudent(): void;
  checkStudent(): void;
  updateStudent(): void;
  getName(): string;
  getAge(): number;
  getId(): number;
  getCourse(): Course;
}
