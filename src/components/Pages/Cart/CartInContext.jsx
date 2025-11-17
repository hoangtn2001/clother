import Content from './components/contents/contents';
import ContentCheck from './components/ContentCheck/ContentCheck';
import { useContext } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';
function CartInContext() {
    const {step} = useContext(StepperContext);
    const handleRenderContent = () =>{
        switch (step) {
            case 1:
                return <Content/>;
            case 2: 
                return <ContentCheck/>;
            case 3:
                return <Content/>;   
            default:
                return <Content/>;
        }
    };
    return (  
        <>
        {handleRenderContent()}
        </>
    );
}

export default CartInContext;