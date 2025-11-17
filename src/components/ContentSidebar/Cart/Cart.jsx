import HeaderSideBar from "../components/HeaderSideBar/HeaderSideBar";
import { CiShoppingCart } from "react-icons/ci";
import styles from './styles.module.scss';
import ItemProduct from "../components/HeaderSideBar/ItemProduct/ItemProduct";
import Button from '../../Button/Button';
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
function Cart() {
    const {container, boxContent, boxBtn, subTotal} = styles;
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleViewCart = () =>{
    navigate('/cart');
  }
    return ( 
    <div className={container}>
         <HeaderSideBar icon = {<CiShoppingCart style = {{fontSize: '30px'}}/>} title = 'Cart'/>
        <div className={boxContent}>
        {cart.map((item) => {
            return  <ItemProduct key = {item.id} id = {item.id} name = {item.name} Size = {item.size} Price={item.price} quantity={item.quantity} Src={item.Src}/>
        })}
        </div>
        <div >
             <div className={subTotal}>
            <p>SUBTOTAL: </p>
            <p> ${total}</p>
        </div>
        <div className={boxBtn}>
            <Button content = {"VIEW CART"} isWidth = {false} onclick={() => handleViewCart()}/>
            <Button content = {"CHECK OUT"} isPrimary = {false} isWidth = {false}/>
            </div>
        </div>
    </div> );
}

export default Cart