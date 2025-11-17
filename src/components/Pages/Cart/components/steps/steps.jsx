import styles from '../../styles.module.scss'
import Stepper from './stepper/stepper';
import { useContext } from 'react';
import {StepperContext} from '../../../../../contexts/StepperContext';
function Steps() {
    const stepComponent = [{number: 1, content: 'Shopping cart'},{number: 2, content: 'checkout'},{number: 3, content: 'Oder Status'}];
    const {containerStep, steps, line, textStep} = styles;
    const {step, setStep} = useContext(StepperContext);
    const handleClickStep = (number) => {
        setStep(number);
    };
    return ( 
        <div className={containerStep}>
            <div className={steps}>
                {stepComponent.map((item, index)=>{
                    return (<>
                    <Stepper number={item.number} content={item.content} key={index} isDisables={item.number > step} onclick = {()=>handleClickStep(item.number)}/>
                    {index!==stepComponent.length-1 && <div className={line}/>}
                    </>
                );
                })}   
            </div>
                <div className={textStep}>
                    Hurry up, these products are limited, checkout within
                </div>
        </div>
     );
}

export default Steps;
