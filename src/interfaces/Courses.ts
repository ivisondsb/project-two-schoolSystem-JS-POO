import { Discipline } from '../entities/Discipline';
import { Course } from '../entities/Course';

export interface CourseProps {
    name: string;
    shift: string;
    disciplines: Discipline[];
    courses: Course[];
}

export interface CoursesMethodsProps {
    addCourse(name: string, shift: string): void;
    removeCourse(name: string): void;
    listCourses(): void;
    updateCourse(name: string): void;
}