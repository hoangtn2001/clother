import MyHeader from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout'; 

import Steps from './components/steps/steps';
import styles from './styles.module.scss';
import { StepperProvider } from "../../../contexts/StepperContext";
import CartInContext from './CartInContext';
function Cart() {
    const {containerBody} = styles;
    return (  
        <div>
          <MyHeader/>
          <div className={containerBody}>
            <StepperProvider>
            <Steps/>
             <MainLayout>
                <CartInContext/>
            </MainLayout>
            </StepperProvider>
          </div>         
           <Footer/>
        </div>
    );
}

export default Cart;