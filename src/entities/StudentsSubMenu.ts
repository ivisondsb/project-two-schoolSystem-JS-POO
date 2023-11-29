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
          break;
        case '2':
          Student.listStudents();
          break;
        case '3':
          Student.removeStudent();
          break;
        case '4':
          console.log('update aluno');
          break;
        case '5':
          return;
        default:
          console.log('Opção inválida.');
      }
    }
  }
}