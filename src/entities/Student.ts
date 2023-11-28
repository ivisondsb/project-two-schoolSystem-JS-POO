import { Course } from './Course';

export class Student {
  private name: string;
  private age: number;
  private course: Course;
  private id: number

  constructor(name: string, age: number, course: Course, id: number) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.id = id
  }

  public showData(): void {
    console.log(`Nome: ${this.name}`);
    console.log(`Idade: ${this.age}`);
    console.log(`Curso:`);
    console.log(`Nome: ${this.course.name}`);
    console.log(`Turno: ${this.course.shift}`);
    console.log(`Disciplinas:`);
    this.course.listDisciplines();
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getCourse(): Course {
    return this.course;
  }

  public getId(): number {
    return this.id;
  }
  
}
