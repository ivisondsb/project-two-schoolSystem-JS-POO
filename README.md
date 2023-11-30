# Título do projeto - schoolSystem

	O código foi desenvolvido em inglês que consiste em um sistema de gerenciamento de alunos, cursos e disciplinas implementado em TypeScript. Utilizando classes e interfaces, o sistema oferece funcionalidades para cadastrar, consultar, remover, atualizar e listar alunos, bem como adicionar e listar disciplinas em cursos específicos. Com atributos como nome, turno, disciplinas e curso presentes nas classes, é possível realizar operações detalhadas sobre as informações, permitindo um controle abrangente e organizado no gerenciamento de alunos, cursos e disciplinas.

	Foram criadas as classes Student, Course, e Discipline que representam entidades centrais, com métodos para manipular informações sobre alunos, cursos e disciplinas.
	Das classes foram criadas suas subClasses que representam o menu StudentSubMenu, DisciplineSubMenu, CourseSubMenu.
   Interfaces também foram criadas com uma pasta separada com o nome "interfaces", e seu arquivo de interface Students com as interfaces StudentsMethodsProps e StudentProps.

	Definindo a estrutura e as operações possíveis para os alunos, disciplinas e cursos garantindo consistência entre diferentes partes do sistema. A interação com o usuário é feita por meio de um menu interativo que oferece opções para realizar diversas ações, proporcionando um controle detalhado sobre o gerenciamento de estudantes e cursos.

	Desenvolvido com Node.js - ^18.12.0 e TypeScript.  


## 🚀 Começando


   O código está presente no git de ivison: https://github.com/ivisondsb/project-two-schoolSystem-JS-POO.

   Precisa ser feito a clonagem do repositório: Abra o terminal e navegue até o diretório desejado para o código. git clone 
'https://github.com/seu-usuario/nome-do-repositorio.git'



## 📋 Pré-requisitos


   De que coisas você precisa para instalar o software e como instalá-lo?

   Node.js / typescript - IDE que rode ambos. Utilizada no projeto Visual Studio Code.

   prompt-sync

## 🔧 Instalação


Instale as dependências: No diretório do projeto, execute o seguinte comando para instalar as dependências listadas no arquivo package.json.
   `cd nome-do-repositorio`
   `npm install`

Executar o software: Após a instalação das dependências, você pode iniciar o software. 
   'npm start'

Começar NodeJS Projet (Pay attention at the root directory)
    ```npm init -y```

Instalar Typescript
    `npm i -g typescript`

Instalação do prompt-sync:

```npm install prompt-sync``` no terminal do diretório do seu projeto.
   ou
```npm i``` no terminal do diretório do seu projeto, visto que o package.json já consta o prompt.

Inicializar Typescript
   ```tsc --init```

Rodar projeto 
    ```node dist/index.js```

Rodar arquivos TS
    ```https://www.npmjs.com/package/ts-node```
    ```npm i -g ts-node```
    ```ts-node <filename>```


## 📦 Menu & Index

OBS.:Devido ao tempo que tomamos desenvolvendo e documentando o código, não conseguimos colocar validações em todas as classes, só colocamos em algumas.
OBS.:Recomendamos adicionar primeiro um curso primeiro para depois adicionar adicionar as disciplinas e alunos.
OBS.:Ao decorrer do desenvolvimento, percebemos a possibilidade de adicionar várias funcionalidades. Faremos updates futuramente.

Classe Menu

A classe Menu implementa um menu interativo para gerenciar diferentes funcionalidades do sistema educacional. 
Este menu oferece opções para acessar e interagir com as subcategorias do sistema, incluindo gerenciamento de alunos, disciplinas e cursos.

### Métodos

   init(): void
   Inicia o loop do menu, exibindo as opções disponíveis e chamando os respectivos métodos para interagir com as subcategorias do sistema.

   showMenu(): string
   Exibe o menu principal, mostrando as opções disponíveis e permitindo que o usuário escolha uma delas. Retorna a opção escolhida pelo usuário.

   Menu.init();
   Este menu oferece uma interface simples para acessar as funcionalidades do sistema educacional, 
   permitindo ao usuário interagir facilmente com as diferentes partes do programa.

### Arquivo index.ts

O arquivo index.ts é o ponto de entrada do sistema educacional. 
Ele inicia o programa chamando o método init() da classe Menu, que por sua vez inicia o menu interativo para gerenciar alunos, disciplinas e cursos.

Este arquivo index.ts é responsável por iniciar o sistema educacional, 
dando ao usuário acesso ao menu principal para interagir com as funcionalidades do programa.



## ⚙️ Classes


As classes são divididas em Student, Course, e Discipline. 

## ==========STUDENT===============

A classe Student representa um estudante no sistema educacional, permitindo operações como cadastro, consulta, remoção e atualização de dados do aluno.

### Propriedades
name: string - Armazena o nome do estudante.
age: number - Armazena a idade do estudante.
course: Course - Armazena o curso associado ao estudante.
id: number - Identificação única do estudante.
students: Student[] - Armazena uma lista de estudantes cadastrados.
Métodos
showData(): void
Exibe os dados do estudante, incluindo nome, idade, nome do curso e disciplinas associadas.

getName(): string
Retorna o nome do estudante.

getAge(): number
Retorna a idade do estudante.

getCourse(): Course
Retorna o curso associado ao estudante.

getId(): number
Retorna a identificação única do estudante.

registerStudent(name: string, age: number): void
Registra um novo estudante no sistema, solicitando o nome, idade e curso do aluno.

removeStudent(): string
Remove um estudante do sistema com base no ID informado.

checkStudent(): string
Verifica e exibe os dados de um estudante com base no ID informado.

updateStudent(): string
Atualiza as informações de um estudante com base no ID informado, permitindo editar o nome, idade e curso associado.

isOnlyLetters(input: string): boolean
Método privado para verificar se a entrada contém apenas letras.

OBS.:Na função de updateStudent, prezamos por atualizar apenas as informações referente ao aluno, pois o curso em decisão do grupo não pode ser alterado por essa função. Para alterar o curso, tem que utilizar a função updateCourse da classe Course.

## ===========COURSE===========

A classe Course representa um curso dentro de um sistema de gerenciamento escolar. Esta classe oferece funcionalidades para cadastrar, listar, remover e atualizar informações sobre cursos.

### Atributos

   name: string - Representa o nome do curso.
   shift: string - Representa o turno do curso.
   disciplines: Array - Armazena disciplinas associadas ao curso.
   students: Array - Armazena informações dos alunos matriculados no curso.
   courses: Array - Armazena todos os cursos cadastrados.
   Métodos
   constructor(name: string, shift: string)
   Inicializa um novo curso com um nome e turno específicos.

   addCourse(name: string, shift: string): void
   Permite adicionar um novo curso ao sistema, recebendo um nome e um turno como parâmetros.

   listCourses(): void
   Lista todos os cursos cadastrados no sistema, permitindo selecionar um curso específico para exibir detalhes como nome, turno e disciplinas associadas.

   removeCourse(name: string): void
   Remove um curso com base no nome fornecido por id.

   updateCourse(): void
   Permite atualizar informações de um curso existente, como nome e turno, por id.

Esta classe oferece funcionalidades para gerenciar cursos em um sistema Escolar, permitindo manipulação detalhada das informações sobre os cursos disponíveis.


### --OBSERVAÇÃO--

O projeto pede que seja criado uma classe disciplina, a qual foi criado. Nas reuniões definimos que existiria a classe disciplina, só que os metodos estariam na Classe Curso.
Colocar métodos relacionados à adição de disciplinas dentro da classe Course é uma prática coesa, pois as disciplinas são uma parte intrínseca de um curso. 
Ficando assim mais coeso para o grupo, onde as partes relacionadas devem permanecer juntas.

Além disso, torna o código mais organizado e encapsulado. A lógica de adicionar disciplinas está diretamente associada à classe Course, 
o que facilita a manutenção e compreensão do código. 

Assim adicionamos metodos na classe Course:

   addDisciplineToCourse(course: Course): void
   Adiciona uma disciplina a um curso específico.

   addDisciplineToCourseManually(): void
   Permite o cadastro manual de disciplinas em cursos existentes.

   listDisciplines(): void
   Lista as disciplinas de um curso específico.

   public removeDisciplineByIndex()
   Remove disciplina pelo id.

Esta classe Course oferece funcionalidades completas para gerenciar cursos, 
incluindo adição e listagem de disciplinas associadas a cada curso, proporcionando uma gestão abrangente dos cursos em um ambiente educacional.



## ===========DISCIPLINE===========



A classe Discipline representa uma disciplina dentro de um sistema Escolar. Ela armazena informações como nome da disciplina, carga horária e nota obtida.

### Atributos

   _disciplineName: string - Armazena o nome da disciplina.
   _workload: number - Armazena a carga horária da disciplina.
   _grade: number - Armazena a nota obtida na disciplina.

### Métodos

   constructor(disciplineName: string, workload: number, grade: number)
   Construtor da classe que inicializa uma disciplina com um nome, carga horária e nota específicos.

   getName(): string
   Retorna o nome da disciplina.

   getWorkload(): number
   Retorna a carga horária da disciplina.

   getGrade(): number
   Retorna a nota obtida na disciplina.

Esta classe Discipline fornece métodos para acessar e manipular informações sobre uma disciplina, como nome, carga horária e nota obtida, 
permitindo o gerenciamento detalhado das disciplinas dentro do sistema Escolar.



## 🔩 SubClasses


### ====================StudentSubMenu================



A classe CoursesSubMenu é responsável por interagir com o usuário e oferecer um menu para gerenciamento de cursos dentro do sistema Escolar. 
Ela utiliza a classe Course para realizar as operações de cadastro, consulta, remoção e atualização de cursos.

#### Métodos

   start(): void

Inicia o menu de gerenciamento de cursos, exibindo opções para cadastrar, consultar, remover, atualizar e voltar ao menu principal.

1. Cadastrar Curso: Permite adicionar um novo curso ao sistema, solicitando o nome e o turno do curso ao usuário e utilizando a instância da classe Course para realizar o cadastro.
2. Consultar Curso: Lista todos os cursos cadastrados no sistema, utilizando a instância da classe Course para exibir os detalhes dos cursos.
3. Remover Curso: Remove um curso existente no sistema, solicitando o nome do curso ao usuário e utilizando a instância da classe Course para realizar a remoção.
4. Atualizar Curso: Permite atualizar informações de um curso existente, utilizando a instância da classe Course para realizar a atualização.
5. Voltar ao Menu Principal: Encerra o menu de gerenciamento de cursos e retorna ao menu principal.

Este uso da classe CoursesSubMenu inicia o menu de gerenciamento de cursos, permitindo que o usuário interaja com as opções disponíveis para gerenciar os cursos dentro do sistema Escolar.


### ===================DisciplineSubMenu==============

Esta classe permite o gerenciamento das disciplinas por meio de interações do usuário.
Ela oferece funcionalidades como cadastro, consulta, remoção e atualização de disciplinas
utilizando a classe Course

a descrição do que cada caso no switch da classe DisciplinesSubMenu faz:

Instância estática da classe Course para operações relacionadas às disciplinas.
Cadastrar Disciplina: Ao escolher esta opção, o usuário pode inserir manualmente uma nova disciplina ao curso por meio de interações com o prompt, fornecendo o nome da disciplina, sua carga horária e nota.
Consultar Disciplina: Ao selecionar esta opção, o usuário pode visualizar todas as disciplinas existentes no curso, exibindo seus nomes, carga horária e notas correspondentes.
Remover Disciplina: Este caso, atualmente comentado, provavelmente representaria a funcionalidade de remover uma disciplina específica do curso.
Atualizar Disciplina: Quando selecionado, este caso deveria oferecer a possibilidade de atualizar informações de uma disciplina existente no curso, como alterar seu nome, carga horária ou nota.
Voltar ao Menu Principal: Ao escolher esta opção, o usuário retorna ao menu principal do sistema, saindo do submenu de gerenciamento de disciplinas.



### =====================CourseSubMenu===============

#### Classe CoursesSubMenu:

A classe CoursesSubMenu gerencia interativamente as operações de cursos no sistema educacional. 
Com diversas opções disponíveis, permite cadastrar, consultar, remover e atualizar cursos utilizando métodos da classe Course.

#### Métodos

start(): void

Inicia o submenu de gerenciamento de disciplinas, oferecendo opções interativas para o usuário realizar operações relacionadas às disciplinas, como cadastro, consulta, remoção e atualização.
Cadastrar Disciplina: Ao escolher esta opção, o usuário pode inserir manualmente uma nova disciplina ao curso por meio de interações com o prompt, fornecendo o nome da disciplina, sua carga horária e nota.
Consultar Disciplina: Ao selecionar esta opção, o usuário pode visualizar todas as disciplinas existentes no curso, exibindo seus nomes, carga horária e notas correspondentes.
Remover Disciplina: Este caso, atualmente comentado, provavelmente representaria a funcionalidade de remover uma disciplina específica do curso. No entanto, a lógica para essa ação não está implementada no código.
Atualizar Disciplina: Quando selecionado, este caso deveria oferecer a possibilidade de atualizar informações de uma disciplina existente no curso, como alterar seu nome, carga horária ou nota. No entanto, neste momento, apenas exibe uma mensagem de log indicando a atualização.

Voltar ao Menu Principal: Ao escolher esta opção, o usuário retorna ao menu principal do sistema, saindo do submenu de gerenciamento de disciplinas.
Estes métodos oferecem uma interface intuitiva para operações relacionadas aos cursos do sistema educacional, 
permitindo ao usuário interagir facilmente com as funcionalidades oferecidas.


### ⌨️ Interface


O projeto foi divido em 3 interfaces, a de Courses, Discipline e Students. Dentro do ts, exportamos as interfaces como seu nome + Props

#### ======Courses.ts=====


A interface CourseProps define a estrutura dos atributos de um curso no sistema educacional. Ela descreve as propriedades que um curso pode ter e inclui:

   name: Uma string representando o nome do curso.
   shift: Uma string que define o turno do curso.
   disciplines: Um array de objetos Discipline, representando as disciplinas associadas a este curso.
   courses: Um array de objetos Course, representando cursos adicionais. Essa propriedade pode ser utilizada para hierarquias de cursos.

A interface CoursesMethodsProps descreve os métodos disponíveis para manipular os cursos no sistema educacional. Ela inclui os seguintes métodos:

   addCourse(name: string, shift: string): void: Adiciona um novo curso ao sistema com um nome e um turno específicos.
   removeCourse(name: string): void: Remove um curso do sistema com base no nome fornecido.
   listCourses(): void: Lista todos os cursos disponíveis no sistema.
   updateCourse(name: string): void: Atualiza informações de um curso existente com base no nome fornecido.



#### =====Students.ts=====

A interface StudentProps define a estrutura dos atributos de um estudante no sistema educacional. Ela descreve as propriedades que um estudante pode ter e inclui:

   name: Uma string representando o nome do estudante.
   shift: Uma string que define o turno do estudante.
   disciplines: Um array de objetos Discipline, representando as disciplinas em que o estudante está matriculado.
   students: Um array de objetos Student, representando outros estudantes associados (por exemplo, colegas de classe).
   enrollment: Um número inteiro que registra o número de matrículas do estudante.


A interface StudentsMethodsProps descreve os métodos disponíveis para manipular os estudantes no sistema educacional. Ela inclui os seguintes métodos:

   addDiscipline(discipline: Discipline): void: Adiciona uma disciplina ao conjunto de disciplinas do estudante.
   removeDiscipline(disciplineName: string): void: Remove uma disciplina do conjunto de disciplinas do estudante com base no nome fornecido.
   listDisciplines(): void: Lista todas as disciplinas em que o estudante está matriculado.
   addStudent(student: Student): void: Adiciona um novo estudante ao sistema.
   removeStudent(studentId: string): void: Remove um estudante do sistema com base no ID fornecido.
   listStudents(): void: Lista todos os estudantes no sistema.
   getName(): string: Retorna o nome do estudante.
   getShift(): string: Retorna o turno do estudante.
   getEnrollment(): number: Retorna o número de matrículas do estudante.


Essas interfaces definem as estruturas dos métodos e atributos detalhando suas características essenciais e relações com outras entidades, 
que permitem ao sistema gerenciar os estudantes, incluindo a adição, remoção, listagem e obtenção de informações dos estudantes.


#### ======Discipline.ts======

A interface disciplineMethodsProps descreve os métodos disponíveis para acessar informações sobre uma disciplina no sistema educacional. Ela inclui os seguintes métodos:

   getName(): string: Retorna o nome da disciplina como uma string.
   getWorkload(): number: Retorna a carga horária da disciplina como um número.
   getGrade(): number: Retorna a nota da disciplina como um número.

Essa interface define a estrutura dos métodos que permitem ao sistema obter informações específicas de uma disciplina, como seu nome, carga horária e nota.


## 🛠️ Construído com

Node.js - v18.13.0, v18.16.0, v18.18.2, v18.12.0.
TypeScript 
IDE - Utilizada no projeto Visual Studio Code.


## 🖇️ Colaborando

Por favor, leia as Documentações para obter detalhes sobre o desenvolvimento do nosso código.


## 📌 Versão

Nós usamos SemVer para controle de versão. Para as versões disponíveis, observe as tags neste repositório.


## ✒️ Autores


   Suamy Vasconcelos- Desenvolvedor full stack Node.JS/TypeScript - Java - Angularjunior;
   Luis Otávio - Desenvolvedor Back-End junior Node.JS-Functional/TypeScript;
   Edson Suraty - Desenvolvedor Back-End junior Node.JS/TypeScript;
   Ivison Silva- Desenvolvedor Back-End Junior Node.JS/TypeScript;
   Gabriela - Desenvolvedora full stack junior Node.JS/TypeScript - Java - Junior; 

   
## 📄 Licença


Este projeto está sob a licença (sua licença) - veja o arquivo LICENSE.md para detalhes.


## 🎁 Expressões de gratidão


Conte a outras pessoas sobre este projeto 📢;
Convide alguém da equipe para uma cerveja 🍺;
Um agradecimento publicamente em especial ao Professor do módulo Esdras Aguilar e a toda nossa sala 1091!;
