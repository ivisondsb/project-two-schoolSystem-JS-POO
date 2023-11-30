import * as promptSync from "prompt-sync";
import { Course } from "./Course";

const prompt = promptSync();

export class DisciplinesSubMenu {
  private static courseInstance: Course = new Course("", "", 0);

  static start(): void {
    while (true) {
      console.log("\n=== Gerenciar Disciplinas ===");
      console.log("1. Cadastrar Disciplina");
      console.log("2. Consultar Disciplina");
      console.log("3. Remover Disciplina");
      console.log("4. Atualizar Disciplina");
      console.log("5. Voltar ao Menu Principal");

      const option = prompt("Escolha uma opção: ");

      switch (option) {
        case "1":
          DisciplinesSubMenu.courseInstance.addDisciplineToCourseManually();
          break;
        case "2":
          DisciplinesSubMenu.courseInstance.consultDisciplines();
          break;
        case "3":
          DisciplinesSubMenu.courseInstance.removeDisciplineByIndex();
          break;
        case "4":
          DisciplinesSubMenu.courseInstance.updateDiscipline();
          break;
        case "5":
          return;
        default:
          console.log("Opção inválida.");
      }
    }
  }
}
