import * as promptSync from 'prompt-sync';
import { Discipline } from './Discipline';
import { CourseProps } from '../interfaces/Courses';
import { CoursesMethodsProps } from '../interfaces/Courses';

const prompt = promptSync();

export class Course implements CoursesMethodsProps {
    public name: CourseProps['name'];
    public shift: CourseProps['shift'];
    public disciplines: Discipline[] = [];
    public static courses: Course[] = [];

    constructor(name: string, shift: string) {
        this.shift = shift;
        this.name = name;
        this.disciplines = [];
    }

    public addCourse(name: string, shift: string): void {
        console.log('\n=== Cadastrar Curso ===');

        const course = new Course(name, shift);
        if (Course.courses.find((course) => course.name === name)) {
            console.log('O curso já está cadastrado.');
            return;
        } else {
            Course.courses.push(course);
            console.clear();
            console.log(`\nO curso ${course.name} foi cadastrado.`);
        }

        const addDiscipline = prompt('Deseja adicionar uma disciplina ao curso? (S para Sim, qualquer tecla para Não): ');

        if (addDiscipline.toUpperCase() === 'S') {
            this.addDisciplineToCourse(course);
        }
    }

    public listCourses(): void {
        console.log('\n=== Consultar Cursos ===');

        if (Course.courses.length === 0) {
            console.log('Nenhum curso cadastrado.');
        } else {
            for (let index = 0; index < Course.courses.length; index++) {
                const course = Course.courses[index];
                console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`);
            }
        }
    }

    public removeCourse(name: string): void {
        const index = Course.courses.findIndex((course) => course.name === name);

        if (index === -1) {
            console.log('Curso não encontrado.');
        } else {
            Course.courses.splice(index, 1);
            console.log('O curso foi removido.');
        }
    }

    public updateCourse(): void {
        console.log('\n=== Atualizar Curso ===');

        if (Course.courses.length === 0) {
            console.log('Nenhum curso cadastrado.');
        } else {
            Course.courses.forEach((course, index) => {
                console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`);
            });

            const option = prompt('Escolha o número do curso para atualizar (ou pressione Enter para voltar): ');

            if (option && option.trim() !== '') {
                const numberOption = Number(option);

                if (numberOption <= Course.courses.length) {
                    const selectedCourse = Course.courses[numberOption - 1];

                    console.log(`Atualizando curso ${selectedCourse.name}:`);

                    const newName = prompt(`Novo nome (${selectedCourse.name}): `) || selectedCourse.name;
                    const newShift = prompt(`Novo turno (${selectedCourse.shift}): `) || selectedCourse.shift;

                    selectedCourse.name = newName;
                    selectedCourse.shift = newShift;
                    console.log('O curso foi atualizado.');

                    const addDiscipline = prompt('Deseja adicionar uma disciplina ao curso? (S para Sim, qualquer tecla para Não): ');
                    if (addDiscipline.toUpperCase() === 'S') {
                        this.addDisciplineToCourse(selectedCourse);
                    }
                } else {
                    console.log('Curso não encontrado.');
                }
            }
        }
    }

    public addDisciplineToCourse(course: Course): void {
        console.log(`\n=== Adicionar Disciplina a Curso ${course.name} ===`);
        const disciplineName = prompt('Nome da disciplina: ');
        const workload = Number(prompt('Carga horária da disciplina: '));
        const grade = Number(prompt('Nota da disciplina: '));

        const discipline = new Discipline(disciplineName, workload, grade);
        course.disciplines.push(discipline);

        console.log(`Disciplina ${disciplineName} adicionada ao curso ${course.name}.`);
    }

    public addDisciplineToCourseManually(): void {
        console.log('\n=== Cadastrar Disciplina ===');

        this.listCourses();

        if (Course.courses.length === 0) {
            console.log('Nenhum curso disponível.');
            return;
        }

        const courseOption = prompt('Escolha o número do curso para adicionar disciplina (ou pressione Enter para voltar): ');

        if (!courseOption || courseOption.trim() === '') {
            return; 
        }

        const courseNumber = Number(courseOption);

        if (courseNumber > 0 && courseNumber <= Course.courses.length) {
            const selectedCourse = Course.courses[courseNumber - 1];

            while (true) {
                const disciplineName = prompt('Nome da disciplina: ');
                const workload = Number(prompt('Carga horária da disciplina: '));
                const grade = Number(prompt('Nota da disciplina: '));

                const discipline = new Discipline(disciplineName, workload, grade);
                selectedCourse.disciplines.push(discipline);

                console.log(`Disciplina ${disciplineName} adicionada ao curso ${selectedCourse.name}.`);

                const addAnotherDiscipline = prompt('Deseja adicionar outra disciplina? (S para Sim, qualquer tecla para Não): ');

                if (addAnotherDiscipline.toUpperCase() !== 'S') {
                    break;
                }
            }

            
            const addInAnotherCourse = prompt('Deseja adicionar em outro curso? (S para Sim, qualquer tecla para Não): ');

            if (addInAnotherCourse.toUpperCase() === 'S') {
                
                this.addDisciplineToCourseManually();
            }
        } else {
            console.log('Opção inválida de curso.');
        }
    }

    public listDisciplines(): void {
        console.log('\n=== Consultar Disciplinas ===');

       
        this.listCourses();

        if (Course.courses.length === 0) {
            console.log('Nenhum curso disponível.');
            return;
        }

        
        const courseOption = prompt('Escolha o número do curso para visualizar disciplinas (ou pressione Enter para voltar): ');

        if (!courseOption || courseOption.trim() === '') {
            return;
        }

        const courseNumber = Number(courseOption);

        if (courseNumber > 0 && courseNumber <= Course.courses.length) {
            const selectedCourse = Course.courses[courseNumber - 1];

            console.log(`\nDisciplinas do curso ${selectedCourse.name}:`);

            if (selectedCourse.disciplines.length === 0) {
                console.log('Nenhuma disciplina cadastrada para este curso.');
            } else {
                for (let index = 0; index < selectedCourse.disciplines.length; index++) {
                    const discipline = selectedCourse.disciplines[index];
                    console.log(`${index + 1}. ${discipline.getName()}, Carga Horária: ${discipline.getWorkload()}, Nota: ${discipline.getGrade()}`);
                }
            }
        } else {
            console.log('Opção inválida de curso.');
        }
    }

    public removeDisciplineByIndex(): void {
        console.log('\n=== Remover Disciplina ===');
        try {

            this.listCourses();

            if (Course.courses.length === 0) {
                console.log('Nenhum curso disponível.');
                return;
            }
            const courseOption = prompt('Escolha o número do curso para remover disciplina (ou pressione Enter para voltar): ');

            if (!courseOption || courseOption.trim() === '') {
                return;
            }

            const courseNumber = Number(courseOption);

            if (courseNumber > 0 && courseNumber <= Course.courses.length) {
                const selectedCourse = Course.courses[courseNumber - 1];

                console.log(`\nDisciplinas do curso ${selectedCourse.name}:`);

                if (selectedCourse.disciplines.length === 0) {
                    console.log('Nenhuma disciplina cadastrada para este curso.');
                } else {
                    selectedCourse.disciplines.forEach((discipline, index) => {
                        console.log(`${index + 1}. ${discipline.getName()}, Carga Horária: ${discipline.getWorkload()}, Nota: ${discipline.getGrade()}`);
                    });

                    const disciplineIndexOption = prompt('Escolha o número da disciplina para remover (ou pressione Enter para voltar): ');

                    if (!disciplineIndexOption || disciplineIndexOption.trim() === '') {
                        return;
                    }

                    const disciplineIndex = Number(disciplineIndexOption);

                    if (disciplineIndex > 0 && disciplineIndex <= selectedCourse.disciplines.length) {
                        selectedCourse.disciplines.splice(disciplineIndex - 1, 1);
                        console.log('A disciplina foi removida.');
                    } else {
                        throw new Error('Opção inválida de disciplina.')
                    }
                }
            } else {
                throw new Error('Opção inválida de curso.');
            }
        }
        catch (error: any) {
            console.log(error.message)
        }
    }
}