import * as promptSync from 'prompt-sync';
import { CourseProps } from '../interfaces/Courses';
import { CoursesMethodsProps } from '../interfaces/Courses';

const prompt = promptSync();
export class Course implements CoursesMethodsProps{
    public name: CourseProps['name'];
    public shift: CourseProps['shift'];
    public disciplines: CourseProps['disciplines'];
    public students: CourseProps['students'];
    public courses: CourseProps['courses'] = [];

    constructor(name: string, shift: string) {
        this.name = name;
        this.shift = shift;
        this.disciplines = [];
        this.students = [];
    }

    public addCourse(name: string, shift: string): void {
        console.log('\n=== Cadastrar Curso ===');

        const course = new Course(name, shift);
        this.courses.push(course);

        console.log('\nO curso foi cadastrado.');
    }

    public listCourses(): void {
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
                    //   selectedCourse.listDisciplines();
                } else {
                    console.log('Opção inválida. Curso não encontrado.');
                }
            }
        }
    }

    public removeCourse(name: string): void {
        const index = this.courses.findIndex((course) => course.name === name);
    
        if (index === -1) {
          console.log('Curso não encontrado.');
        } else {
          this.courses.splice(index, 1);
          console.log('O curso foi removido.');
        }
    }

    public updateCourse(): void {
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
}