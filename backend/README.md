# Fault control - Backend

## Getting Started
1. Fork este repositório e clone em sua máquina
2. Mude o diretório para `backend` onde você o clonou;
3. No terminal, execute:

```bash
npm install

cp env.example .env

npm run start
```
   4. Abra o host [localhost:3000](http://localhost:3000) e comece a usá-lo

### Prerequisites
* Npm
* Node (>= 12.14.0)

## Running the tests

```bash
npm run pretest

npm run test

npm run postest
```

| Endpoints 				| Verbs			|Authorization			| Features |
|:---------:				|:-----:			|:------------:		|:----------------|
| http://www.hostname.com/sessions/ | POST | ALL | Login, recebe um token.
| http://www.hostname.com/teachers/ | POST | ALL | Cadastro do teacher.
| http://www.hostname.com/students/ | POST | ALL | Cadastro do student.
| http://www.hostname.com/students/ | GET | TEACHER | Lista todos os students 
| http://www.hostname.com/teachers/id/ | GET | TEACHER |Listagem de um item teacher.
| http://www.hostname.com/students/id/ | GET | ALL | Listagem de um item student.
| http://www.hostname.com/modules/ | POST | TEACHER | Cadastro do modulo.		
| http://www.hostname.com/class/module_id/ | POST | TEACHER | Cadastro da aula.
| http://www.hostname.com/class/id/ | GET | ALL |Listagem de um item aula.
| http://www.hostname.com/class_id/frequency/student_id/ | POST | TEACHER | Cadastro frequencia.
| http://www.hostname.com/frequency/id/ | GET | ALL | Listagem de um item frequency.
			
