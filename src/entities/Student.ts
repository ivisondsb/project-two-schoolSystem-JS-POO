import { Course } from './Course';
import { Discipline } from './Discipline';

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
    Discipline.listDisciplines();
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
  
  public static listStudents(): void {
    if (Course.students.length === 0) {
        console.log(`No students found in the course ${this.name}.`);
    } else {
        console.log(`Students in the course ${this.name}:`);
        Course.students.forEach(student => {
            student.showInfo();
        });
    }
}

  public static removeStudent(studentId: string): void {
    const studentIndex = Course.students.findIndex(student => student.getId() === studentId);
    if (studentIndex === -1) {
        throw new Error(`Student with ID ${studentId} not found in the course.`);
    }
    Course.students.splice(studentIndex, 1);
}

  public static registerStudent(): void {
    const name: string = prompt('Nome do aluno: ') || '';
    const age = Number(prompt('Idade do aluno: '));

    console.log('Cursos Disponíveis:');
    for (let i = 0; i < Course.courses.length; i++) {
      console.log(`${i + 1}. ${Course.courses[i].name}`);
    }

    const courseIndex = Number(prompt('Escolha o número do curso: ')) - 1;
    const selectedCourse = Course.courses[courseIndex];

    if (courseIndex >= Course.courses.length) {
      throw new Error(`Este curso não existe`)
    }

    let newStudentId = Course.students.length + 1

    const newStudent = new Student(name, age, selectedCourse, newStudentId);
    Course.students.push(newStudent);

    console.log('Aluno cadastrado com sucesso!');
  }
}
