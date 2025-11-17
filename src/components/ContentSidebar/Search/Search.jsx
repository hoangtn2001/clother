import styles from './styles.module.scss';
import InputComon from '../../InputComon/InputComon';
import Button from '../../Button/Button';
import { FaSearch } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import {OurShopContext} from "../../../contexts/OurShopProvider";
import ProductItem from '../../ProductItem/ProductItem';
function Search() {
    const {container, search, product, containerListProducts, input,seBut} = styles;
     const {products,showGrid, isLoading, handleLoadMore, total} = useContext(OurShopContext);
     const [searchKey, setSearchKey] = useState("");
     const [fillPro, setFillPro] = useState(products);
       useEffect(() => {
    setFillPro(products);
  }, [products]);



     const handleOnchange = (e) =>{
        const checkKey = e.target.value;
        setSearchKey(checkKey);
        if(checkKey.trim() === "") 
            setFillPro(products);
        else{
            const searchPro = products.filter((item)=>{
                return item.name.toLowerCase().includes(checkKey.toLowerCase());
            });
            setFillPro(searchPro);
        }
     }
    return ( 
        <div className={container}>
            <h1 style={{color: "#333", fontWeight: "400", fontSize: "25px"}}>What Are You Looking For ?</h1>
            <div className={search}> 
                <div className={input}><InputComon placeHolder = {'Search For Product'} type='text' onchange = {(e)=>{handleOnchange(e)}}/></div>
                <div className={seBut} ><Button content={<FaSearch/>} isPrimary ={true} isWidth ={false} /></div>
            </div>
            <div className={product}>

                 <div className={containerListProducts}>
                {fillPro.map((item)=>{
                                   return (<ProductItem 
                                   key = {item.id}
                                    src = {item.images[0]}
                                    prvSrc = {item.images[1]}
                                    name = {item.name}
                                    price = {item.price}
                                    details = {item}
                                    isHomepage= {false}
                                    isAddCart = {false}
                                    />)
                                })}
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin : '25px 0 10px 0'}}>
                {total > fillPro.length && fillPro.length !== 0 &&
                <Button content = 'Load more product' isPrimary = {false} onclick={()=>{handleLoadMore()}}/>
                }
            </div>
            {
                fillPro.length === 0 && 
                <div style={{display: "flex", justifyContent: "center", fontSize: "18px"}}>
                    Không có sản phẩm phù hợp!!!
                </div>
            }

            </div>
        </div>
     );
}

export default Search;