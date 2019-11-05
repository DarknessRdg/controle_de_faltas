import router from './config.router';

export default [
        
    router.get('/tests/', (request, response) => {
        response.send({status: true});
    })

]




