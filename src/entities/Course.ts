import { Student } from './Student';
import { Discipline } from './Discipline';
import { StudentProps } from '../interfaces/Students';
import { StudentsMethodsProps } from '../interfaces/Students';

export class Course {
    private name: string;
    private shift: string;
    private disciplines: Discipline[];
    private students: Student[];
    private static courses: Course[] = [];
    private enrollment: number;

    constructor(name: string, shift: string) {
        this.name = name;
        this.shift = shift;
        this.disciplines = [];
        this.students = [];
        this.enrollment = 0;
    }

    public static registerCourse(course: Course): void {
        const existingCourse = Course.courses.find(c => c.getName() === course.getName());
        if (existingCourse) {
            throw new Error(`Course ${course.getName()} already exists.`);
        }
        Course.courses.push(course);
        console.log(`Course ${course.getName()} registered successfully.`);
    }

    public static removeCourse(courseName: string): void {
        const courseIndex = Course.courses.findIndex(course => course.getName() === courseName);
        if (courseIndex === -1) {
            throw new Error(`Course ${courseName} not found.`);
        }
        Course.courses.splice(courseIndex, 1);
        console.log(`Course ${courseName} removed successfully.`);
    }

    public addDiscipline(discipline: Discipline): void {
        const existingDiscipline = this.disciplines.find(d => d.getName() === discipline.getName());
        if (existingDiscipline) {
            throw new Error(`Discipline ${discipline.getName()} already exists in the course.`);
        }
        this.disciplines.push(discipline);
    }

    public removeDiscipline(disciplineName: string): void {
        const disciplineIndex = this.disciplines.findIndex(discipline => discipline.getName() === disciplineName);
        if (disciplineIndex === -1) {
            throw new Error(`Discipline ${disciplineName} not found in the course.`);
        }
        this.disciplines.splice(disciplineIndex, 1);
    }

    public listDisciplines(): void {
        if (this.disciplines.length === 0) {
            console.log(`No disciplines found in the course ${this.name}.`);
        } else {
            console.log(`Disciplines in the course ${this.name}:`);
            this.disciplines.forEach(discipline => {
                console.log(discipline.getName());
            });
        }
    }

    public addStudent(student: Student): void {
        const existingStudent = this.students.find(s => s.getId() === student.getId());
        if (existingStudent) {
            throw new Error(`Student ${student.getId()} is already enrolled in the course.`);
        }
        this.students.push(student);
        this.enrollment++;
    }

    public removeStudent(studentId: string): void {
        const studentIndex = this.students.findIndex(student => student.getId() === studentId);
        if (studentIndex === -1) {
            throw new Error(`Student with ID ${studentId} not found in the course.`);
        }
        this.students.splice(studentIndex, 1);
        this.enrollment--;
    }

    public listStudents(): void {
        if (this.students.length === 0) {
            console.log(`No students found in the course ${this.name}.`);
        } else {
            console.log(`Students in the course ${this.name}:`);
            this.students.forEach(student => {
                student.showInfo();
            });
        }
    }

    public getName(): string {
        return this.name;
    }

    public getShift(): string {
        return this.shift;
    }

    public getEnrollment(): number {
        return this.enrollment;
    }
}
