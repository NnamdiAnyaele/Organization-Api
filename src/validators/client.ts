import Joi from 'joi'

function validateClient (body: Record<string, any>) {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        email: Joi.string()
        .min(7)
        .max(30),

        password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        
    })
    
    
    // schema.validate({ username: 'abc', birth_year: 1994 });
    // -> { value: { username: 'abc', birth_year: 1994 } }
    
    return schema.validate(body);
    // -> { value: {}, error: '"username" is required' }
}


export {validateClient}