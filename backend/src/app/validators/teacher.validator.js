import * as Yup from 'yup';

export default async (req, res, next) => {

    try {

        const schema =  Yup.object().shape({
            name: Yup.string().required(),
            sex: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().min(6).required(),
            registration: Yup.string().required(),
            is_supersu: Yup.bool()
        });
        
        await schema.validate(req.body, { abortEarly: false });
            
        return next();

    } catch (error) {
        switch (error.message) {
            default:
                return res.status(400).json({error: 'Validation fails', messages: error.inner});
        }
    }
}