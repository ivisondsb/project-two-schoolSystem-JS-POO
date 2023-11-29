export class Discipline {
    private _disciplineName: string;
    private _workload: number;
    private _grade: number;

    constructor(disciplineName: string, workload: number, grade: number) {
      this._disciplineName = disciplineName;
      this._workload = workload;
      this._grade = grade;
  }
  getName(){
    return this._disciplineName;
  }

  getWorkload(){
    return this._workload;
  }

  getGrade(){
    return this._grade;
  }
}