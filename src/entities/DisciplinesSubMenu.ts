import * as promptSync from 'prompt-sync'

import { Discipline } from './Discipline';
import { Course } from './Course';
import { CoursesSubMenu } from './CoursesSubMenu';

const prompt = promptSync()

export class DisciplinesSubMenu {
  static disciplines: Discipline[] = [];
  private static courseInstance: Course = new Course('', '');

  static start(): void {
    while (true) {
      console.log('\n=== Gerenciar Disciplinas ===');
      console.log('1. Cadastrar Disciplina');
      console.log('2. Consultar Disciplina');
      console.log('3. Remover Disciplina');
      console.log('4. Atualizar Disciplina');
      console.log('5. Voltar ao Menu Principal');

      const option = prompt('Escolha uma opção: ');

      switch (option) {
        case '1':
          DisciplinesSubMenu.courseInstance.addDisciplineToCourseManually();
          break;
        case '2':
          DisciplinesSubMenu.courseInstance.listDisciplines();
          break;
        case '3':
          // Discipline.removeDiscipline();
          break;
        case '4':
          console.log('update discipline');
          break;
        case '5':
          return;
        default:
          console.log('Opção inválida.');
      }
    }
  }

}