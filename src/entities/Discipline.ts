export class Discipline {

  private _disciplineName: string;
  private _workload: number;
  private _grade: number;

  constructor(disciplineName: string, workload: number) {
    this._disciplineName = disciplineName;
    this._workload = workload;
    this._grade = 0;
  }

  get name(): string {
    return this._disciplineName;
  }

  get workload(): number {
    return this._workload;
  }

  get grade(): number {
    return this._grade;
  }
}