export class Discipline {
    public disciplineName: string;
    public workload: number;
    public grade: number;

    constructor(disciplineName: string, workload: number) {
      this.disciplineName = disciplineName;
      this.workload = workload;
      this.grade = 0;
  }
}
  