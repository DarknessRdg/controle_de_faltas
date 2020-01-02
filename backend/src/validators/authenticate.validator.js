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

    try {

        if (req.body.email) {

            if (!(await schemaTeacher.isValid(req.body))) {
                throw new Error("Validation Error");
            }
            return next();
        }

        if (req.body.identity) {

            if (!(await schemaStudent.isValid(req.body))) {
                throw new Error("Validation Error");
            }
            return next();
        }

    } catch (error) {
        switch (error.message) {
            case error.message:
                return res.status(400).json({ error: 'Validation fails', messages: error.message });
        }
    }
}