import * as promptSync from 'prompt-sync'
import { Course } from './Course';

const prompt = promptSync()

export class CoursesSubMenu {
  public static courses: Course[] = [];

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
          this.consultCourse()
          break;
        case '3':
          console.log('bla')
          break;
        case '4':
          this.updateCourse()
          break;
        case '5':
          return;
        default:
          console.log('Opção inválida.');
      }
    }
  }

  public static consultCourse(): void {
    console.log('\n=== Consultar Cursos ===');
    
    if (CoursesSubMenu.courses.length === 0) {
      console.log('Nenhum curso cadastrado.');
    } else {
      CoursesSubMenu.courses.forEach((course, index) => {
        console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`);
      });

      const option = prompt('Escolha o número do curso para mais detalhes (ou pressione Enter para voltar): ');
      const numberOption = Number(option)
      if (option && option.trim() !== '') {
        const selectedCourse = CoursesSubMenu.courses[numberOption - 1];
        if (numberOption > CoursesSubMenu.courses.length)
        if (selectedCourse) {
          console.log(`Detalhes do Curso ${selectedCourse.name}:`);
          console.log(`Turno: ${selectedCourse.shift}`);
          console.log('Disciplinas:');
          selectedCourse.listDisciplines();
        } else {
          console.log('Opção inválida. Curso não encontrado.');
        }
      }
    }
  }
  public static updateCourse(): void {
    console.log('\n=== Atualizar Curso ===');
    
    if (CoursesSubMenu.courses.length === 0) {
      console.log('Nenhum curso cadastrado.');
    } else {
      CoursesSubMenu.courses.forEach((course, index) => {
        console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`);
      });

      const option = prompt('Escolha o número do curso para atualizar (ou pressione Enter para voltar): ');

      if (option && option.trim() !== '') {
        const numberOption = Number(option);
        
        if (numberOption <= CoursesSubMenu.courses.length) {
          const selectedCourse = CoursesSubMenu.courses[numberOption - 1];
          
          console.log(`Atualizando curso ${selectedCourse.name}:`);
          
          const newName = prompt(`Novo nome (${selectedCourse.name}): `) || selectedCourse.name;
          const newShift = prompt(`Novo turno (${selectedCourse.shift}): `) || selectedCourse.shift;

          selectedCourse.name = newName;
          selectedCourse.shift = newShift;
          console.log('O curso foi atualizado.');
        } else {
          console.log('Curso não encontrado.');
        }
      }
    }
  }
}

  
