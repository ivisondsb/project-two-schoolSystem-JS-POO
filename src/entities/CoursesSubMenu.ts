import * as promptSync from 'prompt-sync'
import { Course } from './Course';

const prompt = promptSync()

export class CoursesSubMenu {
  public static start(): void {
    while (true) {
      console.log('\n=== Gerenciar Cursos ===');
      console.log('1. Cadastrar Curso');
      console.log('2. Consultar Curso');
      console.log('3. Remover Curso');
      console.log('4. Atualizar Curso');
      console.log('5. Voltar ao Menu Principal');

      const opcao = prompt('Escolha uma opção: ');

      switch (opcao) {
        case '1':
          console.log('bla')
          break;
        case '2':
          Course.consultCourse()
          break;
        case '3':
          console.log('bla')
          break;
        case '4':
          Course.updateCourse()
          break;
        case '5':
          return;
        default:
          console.log('Opção inválida.');
      }
    }
  }


}

  
