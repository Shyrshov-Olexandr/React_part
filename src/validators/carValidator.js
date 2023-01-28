import Joi, {string} from "joi";

const carValidator = Joi.object(    {

        brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
            'string.pattern.base': 'Only characters'
        }),
        price: Joi.number().min(0).max(1000000).required().messages({
            'number.min' : 'Min price 0',
            'number.max' : 'Max price 1000000'
        }),
        year: Joi.number().min(1990).max(new Date().getFullYear())

})

export {
    carValidator
}