import HeaderSideBar from "../components/HeaderSideBar/HeaderSideBar";
import { TfiReload } from "react-icons/tfi";
import styles from './styles.module.scss';
import ItemProduct from "../components/HeaderSideBar/ItemProduct/ItemProduct";
import Button from '../../Button/Button';
import { useEffect, useState } from "react";

function Compare() {
    const {container, boxContent} = styles;
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getproducts = JSON.parse(localStorage.getItem('cart')) || [];
        setProducts(getproducts);
    },[])
    return ( 
    <div className={container}>
        <div className={boxContent}>
        <HeaderSideBar icon = {<TfiReload style = {{fontSize: '30px'}}/>} title = 'Cart'/>
        {products.map((item) => {
            return  <ItemProduct />
        })}
       
        </div>
        <div>
            <Button content = {"VIEW COMPARE"} isWidth = {false}/>
        </div>
    </div> );
}

export default Compare;