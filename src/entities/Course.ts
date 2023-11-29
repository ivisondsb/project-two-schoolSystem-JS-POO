import * as promptSync from 'prompt-sync';
import { Discipline } from './Discipline';
import { CourseProps } from '../interfaces/Courses';
import { CoursesMethodsProps } from '../interfaces/Courses';

const prompt = promptSync();

export class Course implements CoursesMethodsProps {
    public name: CourseProps['name'];
    public shift: CourseProps['shift'];
    public disciplines: CourseProps['disciplines'] = [];
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
        } else{
            Course.courses.push(course);
            console.log('\nO curso foi cadastrado.');
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
                let courseInfo = `${index + 1}. Nome: ${course.name}, Turno: ${course.shift}`
                const disciplineNames = course.disciplines.map(discipline => discipline.getName());
                courseInfo += `, Disciplinas: ${disciplineNames.join(', ')};`
                console.log(courseInfo)
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
        try {
            if (Course.courses.length === 0) {
                console.log('Nenhum curso cadastrado.');
            } else {
                Course.courses.forEach((course, index) => {
                    const disciplineNames = course.disciplines.map(discipline => discipline.getName());
                    const disciplineArray = `${disciplineNames.join(', ')};`
                    console.log(`${index + 1}. Nome: ${course.name}, Turno: ${course.shift}, Disciplina(s): ${disciplineArray}`);
                });
    
                const option = prompt('Escolha o número do curso para atualizar (ou pressione Enter para voltar): ');
                if (isNaN(Number(option))) {
                    throw new Error('opção inválida. Por favor, insira apenas números.')
                }

                if (option && option.trim() !== '') {
                    const numberOption = Number(option);
    
                    if (numberOption <= Course.courses.length) {
                        const selectedCourse = Course.courses[numberOption - 1];
    
                        console.log(`Atualizando curso ${selectedCourse.name}:`);
    
                        const newName = prompt(`Novo nome (${selectedCourse.name}): `) ||selectedCourse.name;
                        
                        if(!Course.isOnlyLetters(newName)) {
                            throw new Error('Nome inválido. Por favor, insira apenas letras.')
                        }

                        const newShift = prompt(`Novo turno (${selectedCourse.shift}): `) || selectedCourse.shift;

                        if(!Course.isOnlyLetters(newShift)) {
                            throw new Error('Turno inválido. Por favor, insira apenas letras.')
                        }

                        const course = Course.courses[numberOption - 1]
                        for (let index = 0; index < course.disciplines.length; index++) {
                          console.log(`${index + 1}. Disciplina: ${course.disciplines[index].getName()}`);                
                        }
                        const DisciplineInput = prompt(`Escolha o número da disciplina para atualizar: '`);
                        if (!isNaN(Number(DisciplineInput))) {
                            throw new Error('opção inválida. Por favor, insira apenas números.')
                        }
                        
                        const disciplineIndex = Number(DisciplineInput);
                        const newDiscipline = prompt(`Novo nome da disciplina: `);

                        if(!Course.isOnlyLetters(newDiscipline)) {
                            throw new Error('Turno inválido. Por favor, insira apenas letras.')
                        }
                        
                        const selectedDiscipline = course.disciplines[disciplineIndex - 1];
                        console.log(selectedDiscipline.setName(newDiscipline));
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
        } catch (error: any) {
            console.log(error.message)
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
    
        // Exibir a lista de cursos disponíveis
        this.listCourses();
    
        if (Course.courses.length === 0) {
            console.log('Nenhum curso disponível.');
            return;
        }
    
        // Solicitar ao usuário que escolha um curso
        const courseOption = prompt('Escolha o número do curso para adicionar disciplina (ou pressione Enter para voltar): ');
    
        if (!courseOption || courseOption.trim() === '') {
            return; // Usuário optou por voltar
        }
    
        const courseNumber = Number(courseOption);
    
        if (courseNumber > 0 && courseNumber <= Course.courses.length) {
            const selectedCourse = Course.courses[courseNumber - 1];
    
            // Iniciar o loop de adição de disciplinas
            while (true) {
                // Solicitar informações da disciplina
                const disciplineName = prompt('Nome da disciplina: ');
                const workload = Number(prompt('Carga horária da disciplina: '));
                const grade = Number(prompt('Nota da disciplina: '));
    
                // Criar a disciplina e adicioná-la ao curso
                const discipline = new Discipline(disciplineName, workload, grade);
                selectedCourse.disciplines.push(discipline);
    
                console.log(`Disciplina ${disciplineName} adicionada ao curso ${selectedCourse.name}.`);
    
                // Perguntar se deseja adicionar outra disciplina
                const addAnotherDiscipline = prompt('Deseja adicionar outra disciplina? (S para Sim, qualquer tecla para Não): ');
    
                if (addAnotherDiscipline.toUpperCase() !== 'S') {
                    // Se não quiser adicionar outra disciplina, sair do loop
                    break;
                }
            }
    
            // Perguntar se deseja adicionar em outro curso
            const addInAnotherCourse = prompt('Deseja adicionar em outro curso? (S para Sim, qualquer tecla para Não): ');
    
            if (addInAnotherCourse.toUpperCase() === 'S') {
                // Se quiser adicionar em outro curso, chamar novamente o método
                this.addDisciplineToCourseManually();
            }
        } else {
            console.log('Opção inválida de curso.');
        }
    }

    public listDisciplines(): void {
        console.log('\n=== Consultar Disciplinas ===');
    
        // Exibir a lista de cursos disponíveis
        this.listCourses();
    
        if (Course.courses.length === 0) {
            console.log('Nenhum curso disponível.');
            return;
        }
    
        // Solicitar ao usuário que escolha um curso
        const courseOption = prompt('Escolha o número do curso para visualizar disciplinas (ou pressione Enter para voltar): ');
    
        if (!courseOption || courseOption.trim() === '') {
            return; // Usuário optou por voltar
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
    private static isOnlyLetters(input: string): boolean {
        return /^[a-zA-Z\s]+$/.test(input);
    }
}
