import styles from './styles.module.scss';
import reIcon from '@icons/svgs/reIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import cls from 'classnames';
import Button from '../Button/Button';
import { useContext, useEffect, useState } from 'react';
import {OurShopContext} from "../../contexts/OurShopProvider";
import {CartContext} from "../../contexts/CartContext";
import { SideBarContext } from "../../contexts/SideBar";
import {  useNavigate } from 'react-router-dom';
function ProductItem({src, prvSrc, name, price, details, isHomepage = true, isAddCart = true}) {
    const {containerItem ,boxImg, showImgHover, showFnWhenHover, boxicons,title, prices, boxSize, size, textCenter,content, activeSize, clear, showClear} = styles;
    const ourShopStore = useContext(OurShopContext);
    const [showGrid, setShowGrid] = useState(ourShopStore?.showGrid);
    const [sizeChoose, setSizeChoose] = useState('');
    const [showClass, setShowClass] = useState(false);
    const {addToCart,proDetail} = useContext(CartContext);
     const {isOpen, setIsOpen, setType, setProduct} = useContext(SideBarContext);
     const navigate = useNavigate();
     
     const handleOpenPro = (type) =>{
        setIsOpen(true);
        setType(type);
        setProduct(details);
     }
     const handleNavigateDetail = () =>{
        proDetail(details);
        const path = `/product/${details._id}`;
        navigate(path);
     }
    const handleAddProductToGuestCart = (id,name, sizeChoose, price, Src) => {
       const newProduct = {
        id: id,
        size: sizeChoose,
        price: price,
        Src: Src,
        name: name,
        quantity: 1
       }
            if(sizeChoose !== ''){
                 addToCart(newProduct); 
            }else{
                alert('Cần chọn size trước');
            }
        }

    useEffect(
            ()=>{
                if(isHomepage){
                    setShowGrid("0");
                }
                else{
                    setShowGrid(ourShopStore.showGrid);
                }
            }
        ,[isHomepage, ourShopStore?.showGrid]);
    const [visible, setVisible] = useState(false);

useEffect(() => {
  if (sizeChoose) {
    setVisible(true);       // Bật DOM
    setTimeout(() => setShowClass(true), 100); // Thêm class ở frame sau
  } else {
    setShowClass(false);    // Gỡ class để ẩn
    setTimeout(() => setVisible(false), 1000); // Gỡ DOM sau animation
  }
}, [sizeChoose]);

            const handleChooseSize = (size)=>{
                setSizeChoose(size);
            }
            const handleClear =()=>{
                setSizeChoose('');
            }
    return (  
        <div className={showGrid ==="1" ? containerItem : ''}>
        <div className={boxImg } style={{width: showGrid==="1" ? '380px' : '300px'}} >
            <img src={src} alt="" />
            <img src={prvSrc} alt=""
            className={showImgHover} onClick={()=>{handleNavigateDetail()}} />
            <div className={showFnWhenHover}>
                <div className={boxicons}>
                    <img src={cartIcon}boxIcon alt="" />
                </div>
                <div className={boxicons}>
                  <img onClick = {()=>{handleOpenPro('product')}} src={reIcon} alt="" /> 
                </div>
                <div className={boxicons}>
                    <img  src={heartIcon} alt="" />
                </div>
            </div>
        </div>
        <div className={showGrid ==="1" ? content : ''}>
        {!isHomepage &&
        <div className={boxSize}>
            {details.size.map((item,index)=>{
                return <div key = {index} className={cls(size, {[activeSize]: item.name === sizeChoose})} onClick={()=>{handleChooseSize(item.name)}}>{item.name}</div>
            })}
        </div>
        }
        {visible && 
            <div className={cls(clear, {[showClear]: showClass})} onClick={()=>{handleClear()}}>clear</div>
        }
        <div className={cls(title, {[textCenter]: !isHomepage})}>{name}</div>
        {!isHomepage && 
        <div className={textCenter} style={{color : "#c1c1c1", margin: '10px 0 0 0'}}>
            brand01
        </div>
        }
        <div className={cls(prices, {[textCenter]:!isHomepage})} style={{color : "#c1c1c1", margin: '5px 0 10px 0'}}>${price}</div>
        {!isHomepage&&
        <div className={textCenter} style={{margin: '15px 0'}}>
        <Button content = {isAddCart ? 'Buy now' : 'Add to cart' }  isWidth = 'false' onclick = {()=> handleAddProductToGuestCart(details._id,details.name,sizeChoose,details.price,details.images[0])}/>
        </div>
        }
        </div>
        </div>
    );
}

export default ProductItem;