import data from '../data-builder/data.builder';
import app from '../../src/App';
import request from 'supertest';
import { expect } from 'chai';

const prefix = '/teachers/';


describe(`${prefix}`, () => {
    
    it('It should create teacher with success / status: 201', async (done) => {
        
        const teacher = data.Teacher();
      
        const res = await request(app)
            .post(prefix)
            .send(teacher);
 
        expect(res.status).to.equal(201);

        done();
    });
});

/* 

beforeAll(): Executa apenas uma vez antes de iniciar os tests.
afterAll(): Executa apenas uma vez depois de todos os tests.

beforeEach(): Executa antes de cada caso de teste.
afterEach(): Executa após cada caso de teste

*/