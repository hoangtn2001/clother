import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Banner from '../Banner/Banner';
import styles from './styles.module.scss'
import Infor from '../Infor/Infor';
import Footer from '../Footer/Footer';
import AdvanceHeading from '../AdvanceHeading/AdvanceHeading';
import HeadingListProduct from '../HeadingListProduct/HeadingListProuduct';
import { useEffect, useState } from 'react';
import { getProducts } from '../../apis/productsService';
import PoplarProduct from '../PopularProduct/PopularProduct';
import SaleHomePage from '../SaleHomePage/SaleHomePage';
function HomePage() {
    const {container} = styles;
    const [listProduct, setListProduct] = useState([]);

    useEffect(()=>{
        const query = {
            sortType: '0',
            page: 1,
            limit: 'all'
        };
        getProducts(query)
        .then((res)=>{
            setListProduct(res.contents);
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    ;
    return ( 
        <div>    
            <div className={container}> 
            <MyHeader/>             
            <Banner/>
            <Infor/>
            <AdvanceHeading/>
            <HeadingListProduct data = {listProduct.slice(0,2)}/>
            <PoplarProduct data = {listProduct.slice(2, 17)}/>
            <SaleHomePage/>
            <Footer/>
            </div>
            </div>

     );
}

export default HomePage;