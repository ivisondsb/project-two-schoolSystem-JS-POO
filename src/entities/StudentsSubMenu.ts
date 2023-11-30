import * as promptSync from "prompt-sync";

import { Student } from "./Student";
import { Course } from "./Course";

const prompt = promptSync();

export class StudentsSubMenu {
  private static studentInstance: Student = new Student(
    "",
    0,
    new Course("", "", 0),
    0
  );

  public static start(): void {
    while (true) {
      console.log("\n=== Gerenciar Alunos ===");
      console.log("1. Cadastrar Aluno");
      console.log("2. Consultar Aluno");
      console.log("3. Remover Aluno");
      console.log("4. Atualizar Aluno");
      console.log("5. Voltar ao Menu Principal");

      const option = prompt("Escolha uma opção: ");

      switch (option) {
        case "1":
          StudentsSubMenu.studentInstance.registerStudent(
            prompt("Digite o nome do aluno: "),
            Number(prompt("Digite a idade do aluno: "))
          );
          break;
        case "2":
          StudentsSubMenu.studentInstance.checkStudent();
          break;
        case "3":
          StudentsSubMenu.studentInstance.removeStudent();
          break;
        case "4":
          StudentsSubMenu.studentInstance.updateStudent();
          break;
        case "5":
          return;
        default:
          console.log("Opção inválida.");
      }
    }
  }
}
