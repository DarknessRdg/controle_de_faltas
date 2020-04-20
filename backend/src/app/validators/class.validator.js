import * as Yup from 'yup';

export default async (req, res, next) => {

    const schema =  Yup.object().shape({
        date: Yup.string().required(),
        descriptions: Yup.string().required()
    });
    
    if (!(await schema.isValid(req.body).catch(err => {})));
    
    return next();
}