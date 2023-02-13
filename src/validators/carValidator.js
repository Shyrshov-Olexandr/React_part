import Joi from "joi"

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/),
    price: Joi.number().min(0).max(1000000),
    year:Joi.number().min(1998).max(new Date().getFullYear()).required()
});

export {
    carValidator
}