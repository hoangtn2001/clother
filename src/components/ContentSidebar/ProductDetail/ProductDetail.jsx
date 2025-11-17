import { useContext, useEffect, useState } from 'react';
import { SideBarContext } from "../../../contexts/SideBar";
import { CartContext } from "../../../contexts/CartContext";
import styles from './styles.module.scss';
import Button from '../../Button/Button';
import cls from 'classnames';
function ProductDetail() {
    const {product} = useContext(SideBarContext);
    const {addManyToCart} = useContext(CartContext);
    const {containerPro,container, wrapSlide, slide, img,navigate ,navigateLeft,navigateRight,size, sizeChoose, sizeItem,sizeItemChoose, button, select, button1} = styles;
   const [current, setCurrent] = useState(0);
  const [size1, setSize1] = useState(product.size[0].name);
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
    setCurrent(0);
    setSize1(product.size[0].name);
    setQuantity('1');
  }, [product])
  const handleSlideRight = () => {
    setCurrent((prev) => (prev + 1) % product.images.length);
  };


  const handleSlideleft = () => {
    setCurrent((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleChooseSize = (item)=>{
    setSize1(item.name);
  }
  const handleChooseQuantity = (item)=>{
    setQuantity(item);
  }

   const handleAddProductToGuestCart = () => {
       const newProduct = {
        id: product._id,
        size: size1,
        price: product.price,
        Src: product.images[0],
        name: product.name,
        quantity: parseInt(quantity)
       }
                 addManyToCart(newProduct,parseInt(quantity));
        }
    return ( 
      <div className={containerPro}> 
        <div className={container}>
            <div className={wrapSlide}>
            <div className={cls(navigate,navigateLeft)} onClick={()=>{handleSlideleft()}}>&lt;</div>
            <div className={slide} style={{ transform: `translateX(-${current * 100}%)` }}>
           {
            product.images.map((item, index) =>{
                return (
                    <div className={img} >
                    <img key={index} src={item} alt="" />
                    </div>
                );
            })
           } 
            </div>
            <div className={cls(navigate,navigateRight)} onClick={()=>{handleSlideRight()}}>&gt;</div>
            </div>
            <div style={{fontSize: '24px'}}>
              {product.name}
            </div>
            <div style={{color:"#9a9a9a", fontSize: "20px"}}>
              ${product.price}
            </div>
            <div style={{color: "#555555"}}>
              {product.description}
            </div>
            <div className={size}>
              <div style={{color:"#555555"}}>Size: <span style={{color:"black"}}>{size1}</span></div>
              <div className={sizeChoose}>
              {product.size.map((item, index)=>{
                return (<div className={cls(sizeItem,{[sizeItemChoose]: item.name === size1})} key={index} onClick={()=>{handleChooseSize(item)}}>{item.name}</div>);   
              })}
              </div>
              <div className={button}>
                 <select value={quantity} className={select} onChange={(e)=>{handleChooseQuantity(e.target.value)}}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                 <div className={button1}>
                  <Button content={'ADD TO CART'} isWidth={true} isPrimary={true} onclick = {()=>{handleAddProductToGuestCart()}}/>
                 </div>
              </div>
            </div>
        </div>
        </div>
     );
}

export default ProductDetail;