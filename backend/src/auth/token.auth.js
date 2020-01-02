import { config } from 'dotenv';
import JWT from 'jsonwebtoken';

config();

const { ALGORITHM, SECRET_KEY } = process.env;

class TokenAuth {

    generate(data) {
        const Token = new Promise((resolve) => {
            JWT.sign(data, SECRET_KEY, {algorithm: ALGORITHM}, (error, token) => {
                if (error) { throw new Error('TOKEN_ERROR'); }
                resolve(token);
            });
        });
        return Token;
    }

    checkToken(req, res, next) {
        let token = req.headers['authorization'].slice(7);

        if (!token){
            return res.status(401).send({ auth: false, message: 'NO_TOKEN_PROVIDED' });
        }

        JWT.verify(token, SECRET_KEY, {algorithm: ALGORITHM}, (error, decodedToken) => {
        
            if (error){
                switch (error.message){
                    case "jwt expired":
                        return res.status(401).send({error});
                    default:
                        return res.status(500).send({ auth: false, message: 'ERR_FAILED_TO_AUTHENTICATE_TOKEN' });
                }
            }
            
            req.body = decodedToken; /* Pega os dados decodificados do token, e passa para o body da resquest. */
            
            next();
        });
    }
}

export default new TokenAuth();
