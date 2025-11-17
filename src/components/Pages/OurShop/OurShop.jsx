import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'
import MyHeader from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';
import Banner from './components/Banner';
import { OurShopProvider } from '../../../contexts/OurShopProvider';
import Filter from './components/Filter';
import ListProducts from './components/ListProducts';
function OurShop() {
    const {container, functionBox, specialText, btnBack} = styles;
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };
    return (  
        <OurShopProvider>
        <MyHeader/>
        <MainLayout>
            <div className={container}>
                <div className={functionBox}>
                    <div>
                        Home &gt: <span className={specialText}>Shop</span>
                    </div>
                    <div className={btnBack} onClick={()=> handleBackPreviousPage()}>
                        &lt: return to previous page
                    </div>
                </div>
            </div>
            <Banner/>
            <div>
            <Filter/>
            <ListProducts/>
            </div>
        </MainLayout>
        <Footer/>
        </OurShopProvider>
    );
}

export default OurShop;