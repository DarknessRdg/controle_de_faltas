import * as Yup from 'yup';

export default async (req, res, next) => { 

    const schemaTeacher =  Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().min(6).required(),
    });

    const schemaStudent =  Yup.object().shape({
        identity: Yup.string().required(),
        password: Yup.string().min(6).required(),
    });

    if (req.body.email) {

        if (!(await schemaTeacher.isValid(req.body).catch(err => {})));
        return next();
    }

    if (req.body.identity) {

        if (!(await schemaStudent.isValid(req.body).catch(err => {})));
        return next();
    }
}