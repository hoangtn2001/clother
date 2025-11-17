import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '../ProductItem/ProductItem';
function PoplarProduct({data}) {
    const {container} = styles;
    return (  
        <>
        <MainLayout>
            <div className={container}> 
                {data.map((item)=>{ 
                    return <ProductItem key = {item.id}
                    src = {item.images[0]}
                    prvSrc = {item.images[1]}
                    name = {item.name}
                    price = {item.price}
                    details = {item}
                    />
                })}
            </div>
        </MainLayout>
        </>
    );
}

export default PoplarProduct;