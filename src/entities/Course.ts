import { Student } from './Student';
import { Discipline } from './Discipline';
import { StudentProps } from '../interfaces/Students';
import { StudentsMethodsProps } from '../interfaces/Students';

export class Course {
    public name: string;
    public shift: string;
    public static students: Student[];
    public static courses: Course[] = [];

    constructor(name: string, shift: string) {
        this.name = name;
        this.shift = shift;
    }

    public static removeCourse(courseName: string): void {
        const courseIndex = Course.courses.findIndex(course => course.getName() === courseName);
          if (courseIndex === -1) {
            throw new Error(`Course ${courseName} not found.`);
          }
          Course.courses.splice(courseIndex, 1);
          console.log(`Course ${courseName} removed successfully.`);
      }

    public static registerCourse(course: Course): void {
        const existingCourse = Course.courses.find(c => c.getName() === course.getName());
        if (existingCourse) {
            throw new Error(`Course ${course.getName()} already exists.`);
        }
        Course.courses.push(course);
        console.log(`Course ${course.getName()} registered successfully.`);
    }

    public static consultCourse(): void {
        console.log('\n=== Consultar Cursos ===');
        
        if (this.courses.length === 0) {
          console.log('Nenhum curso cadastrado.');
        } else {
          this.courses.forEach((course, index) => {
            console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`);
          });
    
          const option = prompt('Escolha o número do curso para mais detalhes (ou pressione Enter para voltar): ');
          const numberOption = Number(option)
          if (option && option.trim() !== '') {
            const selectedCourse = this.courses[numberOption - 1];
            if (numberOption > this.courses.length)
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
        
        if (this.courses.length === 0) {
          console.log('Nenhum curso cadastrado.');
        } else {
          this.courses.forEach((course, index) => {
            console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`);
          });
    
          const option = prompt('Escolha o número do curso para atualizar (ou pressione Enter para voltar): ');
    
          if (option && option.trim() !== '') {
            const numberOption = Number(option);
            
            if (numberOption <= this.courses.length) {
              const selectedCourse = this.courses[numberOption - 1];
              
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


    public getName(): string {
        return this.name;
    }

    public getShift(): string {
        return this.shift;
    }

}
