import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const Form = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars)

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    const {register, handleSubmit, reset, setValue, formState:{errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(carValidator)})

    const update = async (car) => {
        await dispatch(carActions.updateById({id:carForUpdate.id, car}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={!isValid}>{carForUpdate?'Update':'Create'}</button>
            </form>
        </div>
    );
};

export {Form};