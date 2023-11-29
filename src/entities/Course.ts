import * as promptSync from 'prompt-sync';
import { CourseProps } from '../interfaces/Courses';
import { CoursesMethodsProps } from '../interfaces/Courses';

const prompt = promptSync();
export class Course implements CoursesMethodsProps{
    public name: CourseProps['name'];
    public shift: CourseProps['shift'];
    public disciplines: CourseProps['disciplines'];
    public courses: Course[] = [];

    constructor(name: string, shift: string) {
        this.shift = shift;
        this.name = name;
        this.disciplines = [];
    }

    public addCourse(name: string, shift: string): void {
        console.log('\n=== Cadastrar Curso ===');

        const course = new Course(name, shift);
        if (this.courses.find((course) => course.name === name)) {
            console.log('O curso já está cadastrado.');
            return;
        }
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