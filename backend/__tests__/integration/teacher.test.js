import truncate from '../utils/truncate';
import mockes from '../utils/mockes';
import app from '../../src/app/App';
import request from 'supertest';

const prefix = '/api/v1';

describe('TEACHER', () => {
    
    beforeAll(async () => {
        await truncate();
    });
    
    it('Create teacher', async (done) => {

        const res = await request(app)
            .post(`${prefix}/teachers/`)
            .send(mockes.teacher);
                
        expect(res.status).toBe(201);
        
        done();
    });

    it('Get token teacher', async (done) => {
        
        const res = await request(app)
            .post(`${prefix}/sessions/`)
            .send(mockes.credentialsTeacher);

        expect(res.status).toBe(200);

        done();
    });

});

/* 

beforeAll(): Executa apenas uma vez antes de iniciar os tests.
afterAll(): Executa apenas uma vez depois de todos os tests.

beforeEach(): Executa antes de cada caso de teste.
afterEach(): Executa após cada caso de teste

*/
