import * as promptSync from 'prompt-sync'

import { Menu } from './Menu';
import { Student } from './Student';
import { Course } from './Course';
import { CoursesSubMenu } from './CoursesSubMenu';

const prompt = promptSync()

export class StudentsSubMenu {
  protected static students: Student[] = [];

  public static start(): void {
    while (true) {
      console.log('\n=== Gerenciar Alunos ===');
      console.log('1. Cadastrar Aluno');
      console.log('2. Consultar Aluno');
      console.log('3. Remover Aluno');
      console.log('4. Atualizar Aluno');
      console.log('5. Voltar ao Menu Principal');

      const option = prompt('Escolha uma opção: ');

      switch (option) {
        case '1':
          // this.registerStudent();
          break;
        case '2':
          console.log('bla bla bla')
        case '3':
          console.log('bla bla bla')
        case '4':
          console.log('bla bla bla')
        case '5':
          return;
        default:
          console.log('Opção inválida.');
      }
    }
  }

  // public static registerStudent(): void {
  //   const name: string = prompt('Nome do aluno: ') || '';
  //   const age = Number(prompt('Idade do aluno: '));

  //   console.log('Cursos Disponíveis:');
  //   for (let i = 0; i < CoursesSubMenu.courses.length; i++) {
  //     console.log(`${i + 1}. ${CoursesSubMenu.courses[i].name}`);
  //   }

  //   const courseIndex = Number(prompt('Escolha o número do curso: ')) - 1;
  //   const selectedCourse = CoursesSubMenu.courses[courseIndex];

  //   if (courseIndex > CoursesSubMenu.courses.length) {
  //     throw new Error(`Este curso não existe`)
  //   }

  //   let newStudentId = StudentsSubMenu.students.length + 1

  //   const newStudent = new Student(name, age, selectedCourse, newStudentId);
  //   StudentsSubMenu.students.push(newStudent);

  //   console.log('Aluno cadastrado com sucesso!');
  // }
}