import * as promptSync from "prompt-sync";
import { Course } from "./Course";

const prompt = promptSync();
export class CoursesSubMenu {
  private static courseInstance: Course = new Course("", "", 0);

  public static start(): void {
    console.clear();
    while (true) {
      console.log("\n=== Gerenciar Cursos ===");
      console.log("1. Cadastrar Curso");
      console.log("2. Consultar Curso");
      console.log("3. Remover Curso");
      console.log("4. Atualizar Curso");
      console.log("5. Voltar ao Menu Principal");

      const opcao = prompt("Escolha uma opção: ");

      switch (opcao) {
        case "1":
          CoursesSubMenu.courseInstance.addCourse(
            prompt("Digite o nome do curso: "),
            prompt("Digite o turno do curso: ")
          );
          break;
        case "2":
          CoursesSubMenu.courseInstance.listCourses();
          break;
        case "3":
          CoursesSubMenu.courseInstance.removeCourse();
          break;
        case "4":
          CoursesSubMenu.courseInstance.updateCourse();
          break;
        case "5":
          return;
        default:
          console.log("Opção inválida.");
      }
    }
  }
}
