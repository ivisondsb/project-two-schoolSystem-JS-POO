import { Student } from '../entities/Student';
import { Discipline } from '../entities/Discipline';

export interface StudentProps {
     name: string;
     shift: string;
     disciplines: Discipline;
     students: Student;
     enrollment: number;
}

export interface StudentsMethodsProps {
    addDiscipline(discipline: Discipline): void;
    removeDiscipline(disciplineName: string): void;
    listDisciplines(): void;
    addStudent(student: Student): void;
    removeStudent(studentId: string): void;
    listStudents(): void;
    getName(): string;
    getShift(): string;
    getEnrollment(): number;
}



