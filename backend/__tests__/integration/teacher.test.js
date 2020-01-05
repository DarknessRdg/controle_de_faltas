import truncate from '../utils/truncate';
import mockes from '../utils/mockes';
import app from '../../src/app/App';
import request from 'supertest';
import { expect } from 'chai';

let data = [];

describe('TEACHER', () => {
    
    beforeAll(async () => {
        await truncate();
    });
    
    it('Create teacher', async (done) => {

        const res = await request(app)
            .post('/teachers/')
            .send(mockes.teacher);
        expect(res.status).to.equal(201);
        
        done();
    });

    it('Get token teacher', async (done) => {
        
        const { status, body } = await request(app)
            .post('/sessions/')
            .send(mockes.credentialsTeacher);

        expect(status).to.equal(200);
        expect(body).to.have.property('token');
        expect(body).to.have.property('id');

        data.push(body);

        done();
    });

    it('Get teacher, with Auth', async (done) => {
        
        const { status } = await request(app)
            .get(`/teachers/${data[0].id}/`)
            .set('Authorization', `Bearer ${data[0].token}`)
            .send();            

        expect(status).to.equal(200);
            
        done();
    });

    it('List all students', async (done) => {
        
        const { status } = await request(app)
            .get('/students/')
            .set('Authorization', `Bearer ${data[0].token}`)
            .send();            

        expect(status).to.equal(200);
            
        done();
    });
    
    it('Create module', async (done) => {
        
        const { status, body } = await request(app)
            .post('/modules/')
            .set('Authorization', `Bearer ${data[0].token}`)
            .send({name: "Python conceitos basicos"});            

        expect(status).to.equal(201);

        data.push(body)
            
        done();
    });

    it('Create class', async (done) => {
        
        const { status, body } = await request(app)
            .post(`/class/${data[1].module_id}/`)
            .set('Authorization', `Bearer ${data[0].token}`)
            .send({
                "date": "02/01/2020",
                "descriptions": "Aula otima"
            });            

        expect(status).to.equal(201);

        data.push(body)
            
        done();
    });

    it('Create student', async (done) => {

        const { status, body } = await request(app)
            .post('/students/')
            .send(mockes.student02);
            
        expect(status).to.equal(201);

        data.push(body)
        
        done();
    });

    it('Create frequency', async (done) => {
    
        const { status } = await request(app)
            .post(`/${data[2].class_id}/frequency/${data[3].student_id}/`)
            .set('Authorization', `Bearer ${data[0].token}`)
            .send({"present": true});            

        expect(status).to.equal(201);
            
        done();
    });
});

/* 

beforeAll(): Executa apenas uma vez antes de iniciar os tests.
afterAll(): Executa apenas uma vez depois de todos os tests.

beforeEach(): Executa antes de cada caso de teste.
afterEach(): Executa após cada caso de teste

*/