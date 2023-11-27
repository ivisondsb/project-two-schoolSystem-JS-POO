import promptSync from 'prompt-sync';

const prompt = promptSync();

export class Menu {
    static init() {
        while(true) {
            const option = Menu.showMenu();

            switch(option) {
                case '1':
                    console.log('Option 1');
                    break;
                case '2':
                    console.log('Option 2');
                    break;
                case '3':
                    console.log('Option 3');
                    break;
                case '4':
                    return;
            }
            prompt('Pressione ENTER para continuar...');
        }
    }

    static showMenu() {
        console.log('========= MENU =========');
        console.log('1 - Gerenciar Alunos');
        console.log('2 - Gerenciar Disciplinas');
        console.log('3 - Gerenciar Cursos');
        console.log('4 - Sair');

        return prompt('Escolha uma opção: ');
    }
}