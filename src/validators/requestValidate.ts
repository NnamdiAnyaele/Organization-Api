import Joi from 'joi'

function validatePostBody (body: Record<string, any>) {
    const schema = Joi.object({
        organization: Joi.string()
            .min(3)
            .max(30)
            .required(),

        products: Joi.array(),

        marketValue: Joi.string()
            .min(3)
            .max(30)
            .required(),

    
        address: Joi.string()
        .min(3)
        .max(30)
        .required(),


        ceo: Joi.string()
            .min(3)
            .max(30)
            .required(),

        country: Joi.string()
        .min(3)
        .max(30)
        .required(),

        noOfEmployees: Joi.number(),

        employees: Joi.array()
    })
    
    
    // schema.validate({ username: 'abc', birth_year: 1994 });
    // -> { value: { username: 'abc', birth_year: 1994 } }
    
    return schema.validate(body);
    // -> { value: {}, error: '"username" is required' }
}

function validatePutBody (body: Record<string, any>) {
    const schema = Joi.object({
        organization: Joi.string()
            .min(3)
            .max(30),

        products: Joi.array(),

        marketValue: Joi.string()
            .min(3)
            .max(30),

    
        address: Joi.string()
        .min(3)
        .max(30),


        ceo: Joi.string()
            .min(3)
            .max(30),

        country: Joi.string()
        .min(3)
        .max(30),

        noOfEmployees: Joi.number(),

        employees: Joi.array()
    })
    
    return schema.validate(body);
}




export {validatePostBody, validatePutBody}