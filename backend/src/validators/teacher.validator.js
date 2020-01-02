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

    try {
        
        if (!(await schema.isValid(req.body))) {
            console.log("\n\nError")
            throw new Error("Validation Error");
        }

        next();

    } catch (error) {
        switch (error.message) {
            case error.message:
                return res.status(400).json({ error: 'Validation fails', messages: error.message });
        }
    }
}