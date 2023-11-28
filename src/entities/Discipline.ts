export class Discipline {

  private _disciplineName: string;
  private _workload: number;
  private _grade: number;

  constructor(disciplineName: string, workload: number) {
    this._disciplineName = disciplineName;
    this._workload = workload;
    this._grade = 0;
  }

  getName(): string {
    return this._disciplineName;
  }

  getWorkload(): number {
    return this._workload;
  }

  getGrade(): number {
    return this._grade;
  }
}