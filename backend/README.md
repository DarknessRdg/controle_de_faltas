<h1 align="center">
  <img src="https://user-images.githubusercontent.com/40550247/72228004-81071600-3581-11ea-9972-1cbe906001ed.png" width="120px" />
</h1>

<h1 align="center">
  Fault control - Backend
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/nelsondiaas/controle_de_faltas?color=%2304D361">

  <a href="https://github.com/nelsondiaas">
    <img alt="Made by @nelsondiaas" src="https://img.shields.io/badge/made%20by-%40nelsondiaas-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/nelsondiaas/controle_de_faltas/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/nelsondiaas/controle_de_faltas?style=social">
  </a>
</p>

<p align="center">
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints-access">Endpoints Access</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## Getting Started
1. Fork este repositório e clone em sua máquina
2. Mude o diretório para `backend` onde você o clonou;
3. No terminal, execute:

```bash
/* Install dependencies */

$ npm install

/* Environment variables */

$ cp env.example .env

/* Database migrates */

$ npx sequelize db:migrate

/* Run project */

$ npm run start
```
   4. Abra o host [localhost:3000](http://localhost:3000) e comece a usá-lo

### Prerequisites
* Npm
* Node (>= 12.14.0)

## Running the tests

```bash
$ npm run pretest

$ npm run test

$ npm run postest
```

## Endpoints access

### Sessions
#### Allowed methods = [POST]

[POST] http://www.hostname.com/sessions/

##### Sample request

```json
/* Teacher */

{
	"email": "",
	"password": ""
}
```

```json
/* Student */

{
	"identity": "",
	"password": ""
}
```

### Teacher
#### Allowed methods = [POST, GET, DELETE]

[POST] http://www.hostname.com/teachers/

##### Sample request

```json
{
	"name": "luan",
	"sex": "masculino",
	"email": "luan@gmail.com",
	"password": "exemple@321",
	"registration": "12345787741789"
}
```
[GET] http://www.hostname.com/teachers/{id}/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
{
  "teacher_id": 1,
  "name": "carlos",
  "sex": "masculino",
  "email": "carlos@gmail.com",
  "registration": "123",
  "is_supersu": true,
  "teacher_class": [
    {
      "class_id": 1,
      "module_id": 1,
      "teacher_id": 1,
      "date": "08/01/2020",
      "descriptions": "Aula input/output",
      "class_modules": {
        "module_id": 1,
        "name": "Python input"
      },
      "class_frequences": [
        {
          "frequency_id": 1,
          "class_id": 1,
          "student_id": 1,
          "present": true
        }
      ]
    }
  ]
}
```

[GET] http://www.hostname.com/teachers/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
[
  {
    "teacher_id": 1,
    "name": "carlos",
    "sex": "masculino",
    "email": "carlos@gmail.com",
    "registration": "123",
    "is_supersu": true
  }
]
```

[DELETE] http://www.hostname.com/teacher/{id}/ [TOKEN: TEACHER]

##### Sample response

```json
status_code: 200
```

### Student
#### Allowed methods = [POST, GET, DELETE, PUT]

[POST] http://www.hostname.com/students/

##### Sample request

```json
{
	"name": "carlos",
	"sex": "masculino",
	"email": "carlos@gmail.com",
	"password": "exemple@123",
	"registration": "12345787489",
	"phone": "999555555",
	"identity": "9878788889"
}
```
[GET] http://www.hostname.com/students/{id}/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
{
  "student_id": 1,
  "name": "carlos",
  "email": "carlos@gmail.com",
  "registration": "12345787489",
  "phone": "999555555",
  "identity": "9878788889",
  "student_frequences": [
    {
      "frequency_id": 1,
      "class_id": 1,
      "student_id": 1,
      "present": true,
    }
  ]
}
```

[GET] http://www.hostname.com/students/ [TOKEN: TEACHER]

##### Sample response

```json
[
  {
    "student_id": 1,
    "name": "carlos",
    "email": "carloss@gmail.com",
    "registration": "12345787489",
    "phone": "999555555",
    "identity": "9878788889",
  }
]
```

[PUT] http://www.hostname.com/students/{id}/ [TOKEN: TEACHER, STUDENT]

##### Sample request

```json
[
  {
    "name": "carlos",
    "email": "carloss@gmail.com",
    "registration": "12345787489",
    "phone": "999555555",
    "identity": "9878788889",
  }
]
```

[DELETE] http://www.hostname.com/students/{id}/ [TOKEN: TEACHER]

##### Sample response

```json
status_code: 200
```

### Module
#### Allowed methods = [POST, GET, PUT, DELETE]

[POST] http://www.hostname.com/modules/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"name": "Python conceitos basicos"
}
```

[GET] http://www.hostname.com/modules/{id}/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
{
  "module_id": 1,
  "name": "Python conceitos basicos",
  "module_class": [
    {
      "class_id": 1,
      "teacher_id": 1,
      "module_id": 1,
      "date": "02/01/2020",
      "descriptions": "Aula otima",
    }
  ]
}
```

[PUT] http://www.hostname.com/modules/{id}/ [TOKEN: TEACHER]

##### Sample request

```json
{
  "name": "Python conceitos avançados",
}
```

[GET] http://www.hostname.com/modules/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
[
  {
    "module_id": 1,
    "name": "Python conceitos basicos",
    "module_class": [
      {
        "class_id": 1,
        "teacher_id": 1,
        "module_id": 1,
        "date": "02/01/2020",
        "descriptions": "Aula otima"
      }
    ]
  }
]
```

[DELETE] http://www.hostname.com/modules/{id}/ [TOKEN: TEACHER]

##### Sample response

```json
status_code: 200
```

### Class
#### Allowed methods = [POST, GET, PUT, DELETE]

[POST] http://www.hostname.com/{teacher_id}/class/{module_id}/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"descriptions": "Python conceitos basicos",
	"date": "11/01/2020"
}
```

[GET] http://www.hostname.com/class/{module_id}/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
{
  "class_id": 1,
  "teacher_id": 1,
  "module_id": 1,
  "date": "02/01/2020",
  "descriptions": "Aula otima",
  "class_modules": {
    "module_id": 1,
    "name": "Python conceitos basicos",
  },
  "class_frequences": [
    {
      "frequency_id": 1,
      "class_id": 1,
      "student_id": 1,
      "present": true,
    }
  ]
}
```

[GET] http://www.hostname.com/class/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
[
  {
    "class_id": 1,
    "teacher_id": 1,
    "module_id": 1,
    "date": "02/01/2020",
    "descriptions": "Aula otima",
    "class_modules": {
      "module_id": 1,
      "name": "Python conceitos basicos",
    },
    "class_frequences": [
      {
        "frequency_id": 1,
        "class_id": 1,
        "student_id": 1,
        "present": true,
      }
    ]
  }
]
```

[PUT] http://www.hostname.com/class/{id}/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"date": "11/01/2020",
	"descriptions": "Implementando Input"
}
```

[DELETE] http://www.hostname.com/class/{id}/ [TOKEN: TEACHER]

##### Sample response

```json
status_code: 200
```

### Frequency
#### Allowed methods = [POST, GET, PUT]

[POST] http://www.hostname.com/frequency/{class_id}/ [TOKEN: TEACHER]

##### Sample request

```json
[
	{
		"student_id": 1,
		"present": true
	},
	{
		"student_id": 2,
		"present": true
	},
	{
		"student_id": 3,
		"present": false
	}
]
```

[GET] http://www.hostname.com/frequency/{student_id}/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
[
  {
    "frequency_id": 1,
    "class_id": 1,
    "present": true
  },
  {
    "frequency_id": 3,
    "class_id": 2,
    "present": true
  }
]
```

[PUT] http://www.hostname.com/frequency/{id}/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"present": false
}
```

## License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---