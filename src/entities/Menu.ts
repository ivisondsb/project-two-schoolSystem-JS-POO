import * as promptSync from 'prompt-sync';
import { StudentsSubMenu } from './StudentsSubMenu';
import { DisciplinesSubMenu } from './DisciplinesSubMenu';
import { CoursesSubMenu } from './CoursesSubMenu';

const prompt = promptSync();

export class Menu {
    static init() {
        while(true) {
            const option = Menu.showMenu();

            switch(option) {
                case '1':
                    StudentsSubMenu.start()
                    break;
                case '2':
                    DisciplinesSubMenu.start();
                    break;
                case '3':
                    CoursesSubMenu.start();
                    break;
                case '4':
                    return;
            }
            prompt('Pressione ENTER para continuar...');
        }
    }

    static showMenu() {
        console.log('========= MENU =========');
        console.log('1. Gerenciar Alunos');
        console.log('2. Gerenciar Disciplinas');
        console.log('3. Gerenciar Cursos');
        console.log('4. Sair');

        return prompt('Escolha uma opção: ');
    }
}