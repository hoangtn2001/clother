import HeaderSideBar from "../components/HeaderSideBar/HeaderSideBar";
import { CiHeart } from "react-icons/ci";
import styles from './styles.module.scss';
import ItemProduct from "../components/HeaderSideBar/ItemProduct/ItemProduct";
import Button from '../../Button/Button';
function WishList() {
    const {container, boxContent, boxBtn} = styles;
    return ( 
    <div className={container}>
        <div className={boxContent}>
        <HeaderSideBar icon = {<CiHeart style = {{fontSize: '30px'}}/>} title = 'Compare'/>
        <ItemProduct/>
        </div>
        <div className={boxBtn}>
            <Button content = {"VIEW WISHLIST"} isWidth = {false}/>
            <Button content = {"ADD TO CART"} isPrimary = {false} isWidth = {false}/>
        </div>
    </div> );
}

export default WishList;