import MyHeader from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout'; 
import { CartContext } from "../../../contexts/CartContext";
import { useContext, useState, useRef } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import cls from 'classnames';
import {FaAngleDown} from 'react-icons/fa'
import {FaMinus} from 'react-icons/fa'
function ProductDtail() {
    const {container, functionBox, specialText, btnBack, containerPro, preImg,
         inforPro, size,sizeChoose,sizeItem,sizeItemChoose, button, button1,
         select, additional,addBody,addHeader, inforItem, inforItem1, addNone, addNoneHead, mirror} = styles;
    const navigate = useNavigate();
       const [sigInf, setSigInf] = useState(false);
       const {addManyToCart} = useContext(CartContext);


       const mirrorRef = useRef(null);
       const imgRefs = useRef([]);
      const [activePicture, setActivePicture] = useState(null);
      const zoom = 2.5;

      const handleMouseEnter = (imgSrc) => {
        setActivePicture(imgSrc);
        const mirror = mirrorRef.current;
        if(mirror) mirror.style.display = "block";
      };
      const handleMouseLeave = () => {
      setActivePicture(null);
      const mirror = mirrorRef.current;
      if (mirror) mirror.style.display = "none";
      };

      const handleMouseMove = (e, index) => {
        const img = imgRefs.current[index];
        const mirror = mirrorRef.current;
        if(!mirror||!img) return;
        const rect = img.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

         const percentX = (offsetX / rect.width) * 100;
            const percentY = (offsetY / rect.height) * 100;
        

          mirror.style.display = "block";
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;
    mirror.style.backgroundImage = `url(${img.src})`;
    mirror.style.backgroundRepeat = "no-repeat";
    mirror.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`; // phóng to 3x
    mirror.style.backgroundPosition = `${percentX}% ${percentY}%`;

      };
    const [product, setProduct] = useState(() => {
      return JSON.parse(localStorage.getItem("pro")) || [];
    });
    const [size1, setSize1] = useState(product.size[0].name);
    const [quantity, setQuantity] = useState(1);
    const handleBackPreviousPage = () => {
        navigate(-1);
     };
    const handleChooseSize = (item)=>{
    setSize1(item.name);
  };
    const handleChooseQuantity = (item)=>{
    setQuantity(item);
  };
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
        };
        const toggleInf = () =>{
            setSigInf(!sigInf);
        }
    return ( 
        <div>
            <MyHeader/>
            <MainLayout>
              <div className={container}>
                    <div className={functionBox}>
                    <div>
                        Home &gt;: <span className={specialText}>Product</span>
                    </div>
                    <div className={btnBack} onClick={()=> handleBackPreviousPage()}>
                        &lt;: return to previous page
                    </div>
                </div>
                <div className={containerPro}>
                    <div className={preImg}>
                        {
                            product.images.map((item, index)=>{
                                return(
                                    <img key={index} 
                                    ref={(el)=>(imgRefs.current[index] = el)}
                                    src={item} alt="" 
                                    onMouseEnter={()=>handleMouseEnter(item)}
                                    onMouseLeave={()=>handleMouseLeave()}
                                    onMouseMove={(e)=>handleMouseMove(e,index)}
                                    />
                                );
                            })
                        }
                         <div ref={mirrorRef} className={mirror}></div>
                    </div>
                    <div className={inforPro}> 
                             <div style={{fontSize: '24px', paddingBottom: '25px'}}>
              {product.name}
            </div>
            <div style={{color:"#9a9a9a", fontSize: "20px", paddingBottom: '25px'}}>
              ${product.price}
            </div>
            <div style={{color: "#555555", paddingBottom: '25px'}}>
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
                  <Button content={'ADD TO CART'} isWidth={false} isPrimary={true} onclick = {()=>{handleAddProductToGuestCart()}}/>
                    </div>
                </div>
            </div>

            <div className={additional} onClick={()=>{toggleInf()}}>
                <div className={sigInf == true ? addHeader : addNoneHead}>{ sigInf == true ? <FaMinus style={{color:"rgb(85, 85, 85)", paddingRight: "8px"}} />
            : <FaAngleDown style={{color:"rgb(85, 85, 85)", paddingRight: "8px"}} />   
            } ADDITIONAL INFORMATION</div>
                <div className={sigInf == true ? addBody : addNone}>
                    <div className={inforItem}>
                        <span className={inforItem1}>Size</span>
                        <div style={{color: '#555'}}>
                        {product.size.map(item=>item.name).join(',')}
                        </div>
                    </div>
                    <div className={inforItem}><span className={inforItem1}>Color</span>
                    <div style={{color: '#555'}}> White , Blue , Black</div>
                    </div>
                    <div className={inforItem}><span className={inforItem1}>Material</span>
                    <div style={{color: '#555'}}>{product.material}</div>
                    </div>
                </div>

            </div>
            </div>
            
            </div>
            </div>
            </MainLayout>
            <Footer/>
        </div>
     );
}

export default ProductDtail;