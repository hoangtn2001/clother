import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import {OurShopContext} from "../../../../contexts/OurShopProvider";
import ProductItem from '@components/ProductItem/ProductItem';
import Button from '../../../Button/Button';
import styles from '../styles.module.scss';
function ListProducts() {
    const {products,showGrid, isLoading, handleLoadMore, total} = useContext(OurShopContext);
    const {containerListProducts} = styles;
    
    return ( 
    <>
        <MainLayout>
            {isLoading ? <div>Loading...</div> :
            <>
            <div className={showGrid ==='0' ? containerListProducts : ''}>
                {products.map((item)=>{
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
                {total > products.length &&
                <Button content = 'Load more product' isPrimary = {false} onclick={()=>{handleLoadMore()}}/>
                }
            </div>
            </>
            
            }
        </MainLayout>
    </>
     );
}

export default ListProducts;