import { Course } from "./Course";
import { Discipline } from "./Discipline";

export class Student {
  private name: string;
  private age: number;
  private course: Course;
  private id: number;
  private static students: Student[] = [];
  private static studentInstance: Course = new Course("", "");

  constructor(name: string, age: number, course: Course, id: number) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.id = id;
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

  //   public static listStudents(): void {
  //     if (this.students.length === 0) {
  //         console.log(`No students found in the course ${this.name}.`);
  //     } else {
  //         console.log(`Students in the course ${this.name}:`);
  //         this.students.forEach(student => {
  //             student.showInfo();
  //         });
  //     }
  // }

  //   public static removeStudent(studentId: string): void {
  //     const studentIndex = this.students.findIndex(student => student.getId() === studentId);
  //     if (studentIndex === -1) {
  //         throw new Error(`Student with ID ${studentId} not found in the course.`);
  //     }
  //     Student.students.splice(studentIndex, 1);
  // }

  public static registerStudent(): void {
    const name: string = prompt("Nome do aluno: ") || "";
    const age = Number(prompt("Idade do aluno: "));

    console.log("Cursos Disponíveis:");
    for (let i = 0; i < this.studentInstance.courses.length; i++) {
      console.log(`${i + 1}. ${this.studentInstance.courses[i].name}`);
    }

    const courseIndex = Number(prompt("Escolha o número do curso: ")) - 1;
    const selectedCourse = this.studentInstance.courses[courseIndex];

    if (courseIndex >= this.studentInstance.courses.length) {
      throw new Error(`Este curso não existe`);
    }

    let newStudentId = this.students.length + 1;

    const newStudent = new Student(name, age, selectedCourse, newStudentId);
    Student.students.push(newStudent);

    console.log("Aluno cadastrado com sucesso!");
  }

  public static removeStudent() {
    try {
      if (this.students.length === 0) {
        throw new Error("Não existem estudantes cadastrados");
      }
      const studentId = Number(prompt("Informe o id do aluno: "));
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === studentId) {
          this.students.splice(i, 1);
          return "Aluno removido com sucesso.";
        }
      }
      return "Aluno não encontrado.";
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public static checkStudent() {
    try {
      if (this.students.length === 0) {
        throw new Error("Não existem estudantes cadastrados");
      }
      const studentId = Number(prompt("Informe o id do aluno: "));
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === studentId) {
          return this.students[studentId].showData();
        }
      }
      return "Aluno não encontrado";
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public static updateStudent() {
    try {
      if (this.students.length === 0) {
        throw new Error("Não existem estudantes cadastrados");
      }
      const studentId = Number(prompt("Informe o id do aluno: "));
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === studentId) {
          const student = this.students[i];
          const newName = prompt("Insira o nome do aluno: ") || student.name;
          const newAge = Number(
            prompt("Insira a idade do aluno: ") || student.age
          );
          const newCourse = String(
            prompt("Insira o curso do aluno: ") || student.course.name
          );

          this.students[i].name = newName;
          this.students[i].age = newAge;
          this.students[i].course.name = newCourse;

          return "As informações do aluno foram atualizadas.";
        }
      }
      return "Aluno não encontrado.";
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
