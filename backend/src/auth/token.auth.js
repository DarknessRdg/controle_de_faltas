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

    async checkToken(req, res, next) {
        let token = req.headers.authorization;
     
        if (!token){
            return res.status(401).send({ auth: false, message: 'NO_TOKEN_PROVIDED' });
        }

        token = token.slice(7);

        JWT.verify(token, SECRET_KEY, {algorithm: ALGORITHM}, (error, decodedToken) => {
          
            if (error){
                switch (error.message){
                    case "jwt expired":
                        return res.status(401).send({error});
                    default:
                        return res.status(500).send({ auth: false, message: 'ERR_FAILED_TO_AUTHENTICATE_TOKEN' });
                }
            }
            
            req.auth = decodedToken; /* Pega os dados decodificados do token, e cria uma nova key no resquest. */
            
            next();
        });
    }
}

export default new TokenAuth();
