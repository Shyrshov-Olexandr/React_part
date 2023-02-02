import React, {useContext} from 'react';
import {Button} from "../../components/Button/Button";
import {MyContext} from "../../index";
import {click} from "@testing-library/user-event/dist/click";
const AboutPage = () => {
    const context = useContext(MyContext);
    context.gender = 'male';
    Object.assign(context, {status: true})
    delete context.name
    return (
        <div>
            <Button click={()=>console.log('Click from custom button!')} style = {{backgroundColor:'black'}} >
                Click
            </Button>
            AboutPage
        </div>
    );
};

export {AboutPage};