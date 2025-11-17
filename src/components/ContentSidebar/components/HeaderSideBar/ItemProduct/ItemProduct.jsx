import styles from './styles.module.scss'
import { IoIosClose } from "react-icons/io";
import {CartContext} from "../../../../../contexts/CartContext";
import { useContext } from 'react';
function ItemProduct({id, name, Size, Price, quantity, Src}) {
    const {container,boxClose ,boxContent, title, price, size} = styles;
    const {removeFromCart} = useContext(CartContext);
    return ( 
        <div className={container}>
            <img src={Src} alt="" />
            <div className= {boxContent}>
                <div className={boxClose}><IoIosClose style = {{fontSize: '20px', color: 'c1c1c1'}} onClick={()=>{removeFromCart(id,Size)}}/></div>
                <div className={title}>{name}</div>
                <div className={size}>SIZE: {Size}</div>
                <div className={price}>${Price}</div>
                <div className={price}>Quantity: {quantity}</div>
                <div className={price}>SKU: ${Price*quantity}</div>
            </div>
        </div>
     );
}

export default ItemProduct;