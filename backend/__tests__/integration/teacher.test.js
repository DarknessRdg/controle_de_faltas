import truncate from '../utils/truncate';
import mockes from '../utils/mockes';
import app from '../../src/app/App';
import request from 'supertest';

const prefix = '/api/v1';

describe('TEACHER', () => {
    
    beforeEach(async () => {
        await truncate();
    });

    it('Create teacher', async (done) => {

        const res = await request(app)
            .post(`${prefix}/teachers/`)
            .send(mockes.teacher);
                
        expect(res.status).toBe(201);
        
        done();
    });

});
