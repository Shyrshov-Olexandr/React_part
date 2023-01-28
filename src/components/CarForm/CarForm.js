import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carServace} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all', resolver: joiResolver(carValidator)});

    useEffect(()=>{
        if(updateCar) {
            setValue('brand', updateCar.brand);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year)
        }
    }, [updateCar])
    const submit = async (car) => {
      const {data} = await carServace.create(car);
      setCars(prev => [...prev,data]);
      reset()
    };

    return (
        // <form onSubmit={handleSubmit(submit)}>
        //
        //     <input type="text" placeholder={'brand'}{...register('brand',
        //         {
        //             pattern: {value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message:'Тільки букви'}
        //         })
        //     }/>
        //
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //
        //     <input type="number" placeholder={'price'}{...register('price',
        //         {
        //             valueAsNumber:true,
        //             min:{value: 0, message: 'Min price 0'},
        //             max: {value: 1000000, message: 'Max price 1000000'}
        //         })
        //     }/>
        //
        //     {errors.price && <span>{errors.price.message}</span>}
        //
        //     <input type="number" placeholder={'year'}{...register('year',
        //         {
        //             valueAsNumber:true,
        //             min: {value: 1990, message: 'Min year 1990'},
        //             max: {value: new Date().getFullYear(), message: `Max year ${new Date().getFullYear()}`}
        //         })
        //     }/>
        //
        //     {errors.year && <span>{errors.year.message}</span>}
        //
        //     <button>
        //         Save
        //     </button>
        //
        // </form>

    <form onSubmit={handleSubmit(submit)}>

        <input type="text" placeholder={'brand'}{...register('brand')}/>
        {errors.brand && <span>{errors.brand.message}</span>}

        <input type="number" placeholder={'price'}{...register('price')}/>
        {errors.price && <span>{errors.price.message}</span>}

        <input type="number" placeholder={'year'}{...register('year')}/>
        {errors.year && <span>{errors.year.message}</span>}

        <button disabled={!isValid}>
            {updateCar?'Update':'Create'}
        </button>

    </form>
    );
};

export  {CarForm};