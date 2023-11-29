import { disciplineProps } from "../interfaces/Discipline";
import { disciplineMethodsProps } from "../interfaces/Discipline";

export class Discipline implements disciplineMethodsProps{
    public disciplineName: disciplineProps['disciplineName'];
    private workload: disciplineProps['workload'];
    private grade: disciplineProps['grade'];

    constructor(disciplineName: string, workload: number, grade: number) {
      this.disciplineName = disciplineName;
      this.workload = workload;
      this.grade = grade;
  }
  getName(){
    return this.disciplineName;
  }

  getWorkload(){
    return this.workload;
  }

  getGrade(){
    return this.grade;
  }

  setName(newName: string): string{
    return this.disciplineName = newName;
  }

  setWorkload(newWorkload: number): number{
    return this.workload = newWorkload
  }

  setGrade(newGrade: number): number{
    return this.grade = newGrade
  }
}
