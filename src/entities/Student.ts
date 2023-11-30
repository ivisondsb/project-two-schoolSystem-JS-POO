import * as promptSync from "prompt-sync";
import { StudentProps, StudentsMethodsProps } from "../interfaces/Students";
import { Course } from "./Course";

const prompt = promptSync();

export class Student implements StudentsMethodsProps {
  private name: StudentProps["name"];
  private age: StudentProps["age"];
  private course: StudentProps["course"];
  private id: StudentProps["id"];
  private students: StudentProps["students"] = [];

  constructor(name: string, age: number, course: Course, id: number) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.id = id;
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

  public registerStudent(name: string, age: number): void {
    try {
      if (!this.isOnlyLetters(name)) {
        throw new Error("Nome inválido. Por favor, insira apenas letras.");
      }

      if (isNaN(Number(age))) {
        throw new Error("Idade inválida. Por favor, insira apenas números.");
      }
      console.log("Cursos Disponíveis:");
      for (let i = 0; i < Course.courses.length; i++) {
        console.log(`${i + 1}. ${Course.courses[i].name}`);
      }

      const courseInput = Number(prompt("Escolha o número do curso: "));

      if (isNaN(Number(courseInput))) {
        throw new Error("Curso inválido. Por favor, insira apenas números.");
      }

      const courseIndex = courseInput - 1;
      const selectedCourse = Course.courses[courseIndex];
      if (courseIndex >= Course.courses.length) {
        throw new Error(`Este curso não existe`);
      }

      let newStudentId = this.students.length + 1;
      const newStudent = new Student(name, age, selectedCourse, newStudentId);
      this.students.push(newStudent);

      console.log("Aluno cadastrado com sucesso!");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public removeStudent() {
    try {
      if (this.students.length === 0) {
        console.log("Não existem estudantes cadastrados");
      }
      console.log("\n----------LISTA DE ALUNOS----------\n");
      for (let i = 0; i < this.students.length; i++) {
        console.log(`${this.students[i].id}. ${this.students[i].name}`);
      }
      const studentId = Number(prompt("Informe o id do aluno: "));
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === studentId) {
          this.students.splice(i, 1);
          console.log("Aluno removido com sucesso.");
        }
      }
      return console.log("Aluno não encontrado.");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public checkStudent() {
    try {
      if (this.students.length === 0) {
        console.log("Não existem estudantes cadastrados");
      }
      console.log("\n----------LISTA DE ALUNOS----------\n");
      for (let i = 0; i < this.students.length; i++) {
        console.log(`${this.students[i].id}. ${this.students[i].name}`);
      }
      const studentId = prompt("Informe o id do aluno: ");
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id == Number(studentId)) {
          const student = this.students[i];
          const disciplinesName = student.course.disciplines.map((discipline) =>
            discipline.getName()
          );
          const disciplineArray = disciplinesName.join(", ");

          console.log(
            `Nome: ${student.name}\nIdade: ${student.age}\nCurso: ${student.course.name}\nTurno: ${student.course.shift}\nDisciplinas: ${disciplineArray}`
          );
        }
      }
      return console.log("Aluno não encontrado");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public updateStudent() {
    try {
      if (this.students.length === 0) {
        console.log("Não existem estudantes cadastrados");
      }
      console.log("\n----------LISTA DE ALUNOS----------\n");
      for (let i = 0; i < this.students.length; i++) {
        console.log(`${this.students[i].id}. ${this.students[i].name}`);
      }
      const studentId = Number(prompt("Informe o id do aluno: "));
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id === studentId) {
          const student = this.students[i];
          const newName = prompt("Insira o nome do aluno: ") || student.name;
          const newAge = Number(
            prompt("Insira a idade do aluno: ") || student.age
          );

          const newShift = String(
            prompt("Insira o turno do aluno: ") || student.course.shift
          );

          this.students[i].name = newName;
          this.students[i].age = newAge;
          this.students[i].course.shift = newShift;

          console.log("As informações do aluno foram atualizadas.");
        }
      }
      return console.log("Aluno não encontrado.");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  private isOnlyLetters(input: string): boolean {
    return /^[a-zA-Z\s]+$/.test(input);
  }
}
