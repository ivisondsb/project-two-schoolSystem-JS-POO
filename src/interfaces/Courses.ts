import { Discipline } from "../entities/Discipline";
import { Course } from "../entities/Course";

export interface CourseProps {
  name: string;
  shift: string;
  disciplines: Discipline[];
  courses: Course[];
  id: number;
}

export interface CoursesMethodsProps {
  addCourse(name: string, shift: string): void;
  removeCourse(): void;
  listCourses(): void;
  updateCourse(name: string): void;
  removeDisciplineByIndex(): void;
  consultDisciplines(): void;
  addDisciplineToCourseManually(): void;
  addDisciplineToCourse(course: Course): void;
}
