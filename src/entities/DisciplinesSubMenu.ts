import * as promptSync from 'prompt-sync'

import { Discipline } from './Discipline';
import { Course } from './Course';
import { CoursesSubMenu } from './CoursesSubMenu';

const prompt = promptSync()

export class DisciplinesSubMenu {
  static disciplinas: Discipline[] = [];

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
          console.log('bla bla');
        case '5':
          return;
        default:
          console.log('Opção inválida.');
      }
    }
  }

}