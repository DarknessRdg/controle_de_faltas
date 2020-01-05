import truncate from '../utils/truncate';
import mockes from '../utils/mockes';
import App from '../../src/app/App';
import request from 'supertest';
import { expect } from 'chai';

const prefix = '/api/v1';

describe('STUDENT', () => {
    
    beforeAll(async () => {
        await truncate();
    });
    
    it('Create student', async (done) => {

        const res = await request(App)
            .post(`${prefix}/students/`)
            .send(mockes.student);
                
        expect(res.status).to.equal(201);
        
        done();
    });

    it('Get token student', async (done) => {
        
        const { status, body } = await request(app)
            .post(`${prefix}/sessions/`)
            .send(mockes.credentialsStudent);

        expect(status).to.equal(200);
        expect(body).to.have.property('token');
        expect(body).to.have.property('id');

        done();
    });
});