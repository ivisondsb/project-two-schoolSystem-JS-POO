export class Discipline {
    disciplineName: string;
    workload: number;
    grade: number;
    public disciplines: Discipline[];
  
    constructor(disciplineName: string, workload: number) {
      this.disciplineName = disciplineName;
      this.workload = workload;
      this.grade = 0;
      this.disciplines = [];
  }

  public static addDiscipline(discipline: Discipline): void {
    const existingDiscipline = this.disciplines.find(d => d.getName() === discipline.getName());
    if (existingDiscipline) {
        throw new Error(`Discipline ${discipline.getName()} already exists in the course.`);
    }
    this.disciplines.push(discipline);
}
  public static removeDiscipline(disciplineName: string): void {
    const disciplineIndex = this.disciplines.findIndex(discipline => discipline.getName() === disciplineName);
    if (disciplineIndex === -1) {
        throw new Error(`Discipline ${disciplineName} not found in the course.`);
    }
    this.disciplines.splice(disciplineIndex, 1);
  }

  public static listDisciplines(): void {
    if (this.disciplines.length === 0) {
        console.log(`No disciplines found in the course ${this.name}.`);
    } else {
        console.log(`Disciplines in the course ${this.name}:`);
        this.disciplines.forEach(discipline => {
            console.log(discipline.getName());
        });
    }
  }
}
  