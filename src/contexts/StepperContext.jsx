import { createContext, useState } from "react";
export const StepperContext = createContext();
export const StepperProvider = ({children}) =>{
const [step, setStep] = useState(1);
const value = {step, setStep};
return (
    <StepperContext.Provider value={value}>
        {children}
    </StepperContext.Provider>
);
};

