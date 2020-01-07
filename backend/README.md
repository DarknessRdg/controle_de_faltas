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
#### Allowed methods = [POST, GET]

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
  "name": "luan",
  "sex": "masculino",
  "email": "luan@gmail.com",
  "registration": "12345787741789",
  "is_supersu": true,
  "class": [
    {
      "class_id": 1,
      "teacher_id": 1,
      "module_id": 1,
      "date": "02/01/2020",
      "descriptions": "Aula otima",
      "modules": {
        "module_id": 1,
        "name": "Python conceitos basicos",
      },
      "frequences": [
        {
          "frequency_id": 1,
          "class_id": 1,
          "student_id": 1,
          "present": true,
        }
      ]
    }
  ]
}
```

### Student
#### Allowed methods = [POST, GET]

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
  "frequences": [
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

### Module
#### Allowed methods = [POST, GET]

[POST] http://www.hostname.com/modules/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"name": "Python conceitos basicos"
}
```
##### Sample response

[GET] http://www.hostname.com/modules/{id}/ [TOKEN: TEACHER, STUDENT]


```json
{
  "module_id": 1,
  "name": "Python conceitos basicos",
  "class": [
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

### Class
#### Allowed methods = [POST, GET]

[POST] http://www.hostname.com/class/{module_id}/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"name": "Python conceitos basicos"
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
  "modules": {
    "module_id": 1,
    "name": "Python conceitos basicos",
  },
  "frequences": [
    {
      "frequency_id": 1,
      "class_id": 1,
      "student_id": 1,
      "present": true,
    }
  ]
}
```

### Frequency
#### Allowed methods = [POST, GET]

[POST] http://www.hostname.com/{class_id}/frequency/{student_id}/ [TOKEN: TEACHER]

##### Sample request

```json
{
	"present": true
}
```

[GET] http://www.hostname.com/frequency/{id}/ [TOKEN: TEACHER, STUDENT]

##### Sample response

```json
{
  "frequency_id": 1,
  "class_id": 1,
  "student_id": 1,
  "present": true,
  "students": {
    "student_id": 1,
    "name": "carlos",
    "email": "carloss@gmail.com",
    "registration": "12345787489",
    "phone": "999555555",
    "identity": "9878788889",
  },
  "classes": {
    "class_id": 1,
    "teacher_id": 1,
    "module_id": 1,
    "date": "02/01/2020",
    "descriptions": "Aula otima",
  }
}
```