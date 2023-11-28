export class Discipline {
    disciplineName: string;
    workload: number;
    grade: number;
  
    constructor(disciplineName: string, workload: number) {
      this.disciplineName = disciplineName;
      this.workload = workload;
      this.grade = 0;
  }
}
  