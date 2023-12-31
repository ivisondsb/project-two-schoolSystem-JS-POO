import * as promptSync from "prompt-sync";
import { Discipline } from "./Discipline";
import { CourseProps } from "../interfaces/Courses";
import { CoursesMethodsProps } from "../interfaces/Courses";

const prompt = promptSync();

export class Course implements CoursesMethodsProps {
  public name: CourseProps["name"];
  public shift: CourseProps["shift"];
  public disciplines: CourseProps["disciplines"] = [];
  public static courses: Course[] = [];
  public id: CourseProps["id"];

  constructor(name: string, shift: string, id: number) {
    this.shift = shift;
    this.name = name;
    this.id = id;
    this.disciplines = [];
  }

  public addCourse(name: string, shift: string): void {
    console.log("\n=== Cadastrar Curso ===");

    let newCourseId = Course.courses.length + 1;
    const course = new Course(name, shift, newCourseId);
    if (Course.courses.find((course) => course.name === name)) {
      console.log("O curso já está cadastrado.");
      return;
    } else {
      Course.courses.push(course);
      console.log("\nO curso foi cadastrado.");
    }

    this.addDisciplineToCourse(course);

    const addDiscipline = prompt(
      "Deseja adicionar uma nova disciplina ao curso? (S para Sim, qualquer tecla para Não): "
    );

    if (addDiscipline.toUpperCase() === "S") {
      this.addDisciplineToCourse(course);
    }
  }

  public listCourses(): void {
    console.log("\n=== Consultar Cursos ===");

    if (Course.courses.length === 0) {
      return console.log("Nenhum curso cadastrado.");
    } else {
      for (let index = 0; index < Course.courses.length; index++) {
        const course = Course.courses[index];
        let courseInfo = `${index + 1}. Nome: ${course.name}, Turno: ${
          course.shift
        }`;
        const disciplineNames = course.disciplines.map((discipline) =>
          discipline.getName()
        );
        courseInfo += `, Disciplinas: ${disciplineNames.join(", ")};`;
        console.log(courseInfo);
      }
    }
  }
  public removeCourse(): void {
    try {
      if (Course.courses.length === 0) {
        console.log("nenhum curso cadastrado");
      }

      console.log("\n----------CURSOS----------\n");
      for (let i = 0; i < Course.courses.length; i++) {
        console.log(`${Course.courses[i].id}. ${Course.courses[i].name}`);
      }

      const courseId = Number(prompt("Informe o id do curso: "));
      for (let i = 0; i < Course.courses.length; i++) {
        if (Course.courses[i].id === courseId) {
          Course.courses.splice(i, 1);
          return console.log("Curso removido com sucesso!.");
        }
      }
      return console.log("Curso não encontrado.");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public updateCourse(): void {
    console.log("\n=== Atualizar Curso ===");
    try {
      if (Course.courses.length === 0) {
        console.log("Nenhum curso cadastrado.");
      } else {
        Course.courses.forEach((course, index) => {
          const disciplineNames = course.disciplines.map((discipline) =>
            discipline.getName()
          );
          const disciplineArray = `${disciplineNames.join(", ")};`;
          console.log(
            `${index + 1}. Nome: ${course.name}, Turno: ${
              course.shift
            }, Disciplina(s): ${disciplineArray}`
          );
        });

        const option = prompt(
          "Escolha o número do curso para atualizar (ou pressione Enter para voltar): "
        );
        if (isNaN(Number(option))) {
          throw new Error("opção inválida. Por favor, insira apenas números.");
        }

        if (option && option.trim() !== "") {
          const numberOption = Number(option);

          if (numberOption <= Course.courses.length) {
            const selectedCourse = Course.courses[numberOption - 1];

            console.log(`Atualizando curso ${selectedCourse.name}:`);

            const newName =
              prompt(`Novo nome (${selectedCourse.name}): `) ||
              selectedCourse.name;

            if (!Course.isOnlyLetters(newName)) {
              throw new Error(
                "Nome inválido. Por favor, insira apenas letras."
              );
            }

            const newShift =
              prompt(`Novo turno (${selectedCourse.shift}): `) ||
              selectedCourse.shift;

            if (!Course.isOnlyLetters(newShift)) {
              throw new Error(
                "Turno inválido. Por favor, insira apenas letras."
              );
            }

            const course = Course.courses[numberOption - 1];
            for (let index = 0; index < course.disciplines.length; index++) {
              console.log(
                `${index + 1}. Disciplina: ${course.disciplines[
                  index
                ].getName()}`
              );
            }
            const DisciplineInput = prompt(
              `Escolha o número da disciplina para atualizar: `
            );
            if (isNaN(Number(DisciplineInput))) {
              throw new Error(
                "opção inválida. Por favor, insira apenas números."
              );
            }

            const disciplineIndex = Number(DisciplineInput);
            const newDiscipline = prompt(`Novo nome da disciplina: `);

            if (!Course.isOnlyLetters(newDiscipline)) {
              throw new Error(
                "Turno inválido. Por favor, insira apenas letras."
              );
            }

            const selectedDiscipline = course.disciplines[disciplineIndex - 1];
            console.log(selectedDiscipline.setName(newDiscipline));
            selectedCourse.name = newName;
            selectedCourse.shift = newShift;

            console.log("O curso foi atualizado.");

            const addDiscipline = prompt(
              "Deseja adicionar uma disciplina ao curso? (S para Sim, qualquer tecla para Não): "
            );
            if (addDiscipline.toUpperCase() === "S") {
              this.addDisciplineToCourse(selectedCourse);
            }
          } else {
            console.log("Curso não encontrado.");
          }
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public addDisciplineToCourse(course: Course): void {
    try {
      console.log(`\n=== Adicionar Disciplina a Curso ${course.name} ===`);
      const disciplineName = prompt("Nome da disciplina: ");
      if (!disciplineName.trim()) {
        throw new Error("Nome de disciplina inválido.");
      }
      const workload = Number(prompt("Carga horária da disciplina: "));

      if (isNaN(workload)) {
        throw new Error("Nome de disciplina inválido.");
      }
      const grade = Number(prompt("Nota da disciplina: "));

      if (isNaN(grade) || grade < 0 || grade > 10) {
        throw new Error("Nota inválida.");
      }

      const discipline = new Discipline(disciplineName, workload, grade);
      course.disciplines.push(discipline);

      console.log(
        `Disciplina ${disciplineName} adicionada ao curso ${course.name}.`
      );
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public addDisciplineToCourseManually(): void {
    try {
      console.log("\n=== Cadastrar Disciplina ===");

      this.listCourses();

      if (Course.courses.length === 0) {
        console.log("Nenhum curso disponível.");
        return;
      }

      const courseOption = prompt(
        "Escolha o número do curso para adicionar disciplina (ou pressione Enter para voltar): "
      );

      if (!courseOption || isNaN(Number(courseOption))) {
        throw new Error("Opção inválida!");
      } else {
        if (courseOption.trim() === "") {
          return;
        }
      }

      const courseNumber = Number(courseOption);

      if (courseNumber > 0 && courseNumber <= Course.courses.length) {
        const selectedCourse = Course.courses[courseNumber - 1];

        while (true) {
          const disciplineName = prompt("Nome da disciplina: ");
          if (!disciplineName) {
            throw new Error(
              "Nome de disciplina inválido. Por favor, insira um nome válido."
            );
          }
          const workload = Number(prompt("Carga horária da disciplina: "));
          if (isNaN(workload)) {
            throw new Error("Carga horária inválida.");
          }
          const grade = Number(prompt("Nota da disciplina: "));

          if (isNaN(grade) || grade < 0 || grade > 10) {
            throw new Error("Nota inválida.");
          }

          const discipline = new Discipline(disciplineName, workload, grade);
          selectedCourse.disciplines.push(discipline);

          console.log(
            `Disciplina ${disciplineName} adicionada ao curso ${selectedCourse.name}.`
          );

          const addAnotherDiscipline = prompt(
            "Deseja adicionar outra disciplina? (S para Sim, qualquer tecla para Não): "
          );

          if (addAnotherDiscipline.toUpperCase() !== "S") {
            break;
          }
        }

        console.log("\n");
        const addInAnotherCourse = prompt(
          "Deseja adicionar em outro curso? (S para Sim, qualquer tecla para Não): "
        );

        if (addInAnotherCourse.toUpperCase() === "S") {
          this.addDisciplineToCourseManually();
        }
      } else {
        throw new Error("Opção inválida de curso.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public consultDisciplines(): void {
    try {
      console.log("\n=== Consultar Disciplinas ===");

      this.listCourses();

      if (Course.courses.length === 0) {
        console.log("Nenhum curso disponível.");
        return;
      }

      const courseOption = prompt(
        "Escolha o número do curso para visualizar disciplinas (ou pressione Enter para voltar): "
      );

      if (!courseOption || isNaN(Number(courseOption))) {
        throw new Error("\nOpção inválida!\n");
      } else {
        if (courseOption.trim() === "") {
          return;
        }
      }

      const courseNumber = Number(courseOption);

      if (courseNumber > 0 && courseNumber <= Course.courses.length) {
        const selectedCourse = Course.courses[courseNumber - 1];

        console.log(`\nDisciplinas do curso ${selectedCourse.name}:`);

        if (selectedCourse.disciplines.length === 0) {
          console.log("Nenhuma disciplina cadastrada para este curso.");
        } else {
          for (
            let index = 0;
            index < selectedCourse.disciplines.length;
            index++
          ) {
            const discipline = selectedCourse.disciplines[index];
            console.log(
              `${
                index + 1
              }. ${discipline.getName()}, Carga Horária: ${discipline.getWorkload()}, Nota: ${discipline.getGrade()}`
            );
          }
        }
      } else {
        throw new Error("Opção inválida de curso.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public removeDisciplineByIndex(): void {
    console.log("\n=== Remover Disciplina ===");
    try {
      this.listCourses();

      if (Course.courses.length === 0) {
        console.log("Nenhum curso disponível.");
        return;
      }
      const courseOption = prompt(
        "Escolha o número do curso para remover disciplina (ou pressione Enter para voltar): "
      );

      if (!courseOption || isNaN(Number(courseOption))) {
        throw new Error("\nOpção inválida!\n");
      } else {
        if (courseOption.trim() === "") {
          return;
        }
      }

      const courseNumber = Number(courseOption);

      if (courseNumber > 0 && courseNumber <= Course.courses.length) {
        const selectedCourse = Course.courses[courseNumber - 1];
        console.log(`\nDisciplinas do curso ${selectedCourse.name}:`);

        if (selectedCourse.disciplines.length === 0) {
          console.log("Nenhuma disciplina cadastrada para este curso.");
        } else {
          selectedCourse.disciplines.forEach((discipline, index) => {
            console.log(
              `${
                index + 1
              }. ${discipline.getName()}, Carga Horária: ${discipline.getWorkload()}, Nota: ${discipline.getGrade()}`
            );
          });

          const disciplineIndexOption = prompt(
            "Escolha o número da disciplina para remover (ou pressione Enter para voltar): "
          );

          if (!disciplineIndexOption || isNaN(Number(courseOption))) {
            throw new Error("\nOpção inválida!\n");
          } else {
            if (disciplineIndexOption.trim() === "") {
              return;
            }
          }

          const disciplineIndex = Number(disciplineIndexOption);

          if (
            disciplineIndex > 0 &&
            disciplineIndex <= selectedCourse.disciplines.length
          ) {
            selectedCourse.disciplines.splice(disciplineIndex - 1, 1);
            console.log("A disciplina foi removida.");
          } else {
            throw new Error("\nOpção inválida de disciplina.\n");
          }
          if (selectedCourse.disciplines.length === 0) {
            console.log("Nenhuma disciplina cadastrada para este curso.");
          } else {
            for (
              let index = 0;
              index < selectedCourse.disciplines.length;
              index++
            ) {
              const discipline = selectedCourse.disciplines[index];
              console.log(
                `${
                  index + 1
                }. ${discipline.getName()}, Carga Horária: ${discipline.getWorkload()}, Nota: ${discipline.getGrade()}`
              );
            }
          }
        }
      } else {
        throw new Error("Opção inválida de curso.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public updateDiscipline(): void {
    try {
      console.log("\n=== Atualizar Disciplina ===");

      this.listCourses();

      if (Course.courses.length === 0) {
        console.log("Nenhum curso disponível.");
        return;
      }

      const courseOption = prompt(
        "Escolha o número do curso para atualizar disciplina (ou pressione Enter para voltar): "
      );

      if (!courseOption || isNaN(Number(courseOption))) {
        throw new Error("\nOpção inválida!\n");
      } else {
        if (courseOption.trim() === "") {
          return;
        }
      }

      const courseNumber = Number(courseOption);

      if (courseNumber > 0 && courseNumber <= Course.courses.length) {
        const selectedCourse = Course.courses[courseNumber - 1];
        console.log(`\nDisciplinas do curso ${selectedCourse.name}:`);

        if (selectedCourse.disciplines.length === 0) {
          console.log("Nenhuma disciplina cadastrada para este curso.");
        } else {
          selectedCourse.disciplines.forEach((discipline, index) => {
            console.log(
              `${
                index + 1
              }. ${discipline.getName()}, Carga Horária: ${discipline.getWorkload()}, Nota: ${discipline.getGrade()}`
            );
          });

          const disciplineIndexOption = prompt(
            "Escolha o número da disciplina para atualizar (ou pressione Enter para voltar): "
          );

          if (!disciplineIndexOption || isNaN(Number(disciplineIndexOption))) {
            throw new Error("\nOpção inválida!\n");
          } else {
            if (disciplineIndexOption.trim() === "") {
              return;
            }
          }

          const disciplineIndex = Number(disciplineIndexOption);

          if (
            disciplineIndex > 0 &&
            disciplineIndex <= selectedCourse.disciplines.length
          ) {
            const selectedDiscipline =
              selectedCourse.disciplines[disciplineIndex - 1];

            const currentName = selectedDiscipline.getName();
            const newName =
              prompt(`Novo nome (${currentName}): `) || currentName;

            if (!Course.isOnlyLetters(newName)) {
              throw new Error("Nome inválido.");
            }

            const currentWorkload = selectedDiscipline.getWorkload();
            const newWorkload =
              Number(prompt(`Nova carga horária (${currentWorkload}): `)) ||
              currentWorkload;

            if (isNaN(newWorkload)) {
              throw new Error("Carga Horária inválida.");
            }

            const currentGrade = selectedDiscipline.getGrade();
            const newGrade =
              Number(prompt(`Nova nota (${currentGrade}): `)) || currentGrade;

            if (isNaN(newGrade) || newGrade < 0 || newGrade > 10) {
              throw new Error("Nota inválida.");
            }

            selectedDiscipline.setName(newName);
            selectedDiscipline.setWorkload(newWorkload);
            selectedDiscipline.setGrade(newGrade);

            console.log("A disciplina foi atualizada.");

            const addDiscipline = prompt(
              "Deseja adicionar uma disciplina ao curso? (S para Sim, qualquer tecla para Não): "
            );
            if (addDiscipline.toUpperCase() === "S") {
              this.addDisciplineToCourse(selectedCourse);
            }
          } else {
            throw new Error("\nOpção inválida de disciplina.\n");
          }
        }
      } else {
        throw new Error("Opção inválida de curso.");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  private static isOnlyLetters(input: string): boolean {
    return /^[a-zA-Z\s]+$/.test(input);
  }
}
