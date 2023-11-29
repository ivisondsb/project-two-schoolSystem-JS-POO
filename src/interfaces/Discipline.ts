export interface disciplineProps{
    disciplineName: string;
    workload: number;
    grade: number;
}

export interface disciplineMethodsProps{
    getName(): string;
    getWorkload(): number;
    getGrade(): number;
    setName(newName: string): string;
}