import data from '../data-builder/data.builder';
import app from '../../src/App';
import request from 'supertest';
import { expect } from 'chai';

const prefix = '/sessions/';


describe(`${prefix}`, () => {
    
    it('It should received a token / status: 200', async (done) => {
        
        const teacher = data.Teacher();
        teacher.email = "test@gmail.com";

        await request(app).post('/teachers/').send(teacher);
        const credentials = {email: 'test@gmail.com', password: 'admin@123'};
        
        const { status, body } = await request(app)
            .post(prefix)
            .send(credentials);
        
        expect(status).to.equal(200);
        expect(body).to.have.property('token');
        expect(body).to.have.property('id');

        done();
    });
});
