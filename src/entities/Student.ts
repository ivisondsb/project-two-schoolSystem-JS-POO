import { Course } from './Course';

export class Student {
  name: string;
  age: number;
  course: Course;

  constructor(name: string, age: number, course: Course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  showData(): void {
    console.log(`Nome: ${this.name}`);
    console.log(`Idade: ${this.age}`);
    console.log(`Curso:`);
    console.log(`Nome: ${this.course.name}`);
    console.log(`Turno: ${this.course.shift}`);
    console.log(`Disciplinas:`);
    this.course.listDisciplines();
  }
}