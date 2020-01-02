import authenticateAuth from '../auth/authenticate.auth';

class LoginHandler {

    async login(req, res) {

        try {
            
            const { token } = await authenticateAuth.login(req.body);
            
            return res.status(200).json({ token: token }); 

        } catch (error) {
            switch (error.message){
                case 'ERR_INVALID_PASSWORD':
                    return res.status(401).json({ error: 'ERR_INVALID_PASSWORD' });
                case 'ERR_USER_NOT_FOUND':
                    return res.status(401).json({ error: 'ERR_USER_NOT_FOUND' });
                case 'ERR_INVALID_TOKEN':
                    return res.status(401).json({ error: 'ERR_INVALID_TOKEN' });
                default:
                    return res.status(401).json({ error: error.message });
            }
        }
    }
}

export default new LoginHandler();