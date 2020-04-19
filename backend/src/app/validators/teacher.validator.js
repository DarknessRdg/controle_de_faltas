import * as Yup from 'yup';

export default async (req, res, next) => {

    const schema =  Yup.object().shape({
        name: Yup.string().required(),
        sex: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().min(6).required(),
        registration: Yup.string().required(),
        is_supersu: Yup.bool()
    });
    
    if (!(await schema.isValid(req.body).catch(err => {})));
    
    return next();
}