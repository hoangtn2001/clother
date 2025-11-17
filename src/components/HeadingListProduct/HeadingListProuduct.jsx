import MainLayout from '@components/Layout/Layout';
import CountDownTimer from '../CountDownTimer/CountDownTimer';
import styles from './styles.module.scss'
import CountDownBanner from '../CountDownBanner/CountDownBanner';
import ProductItem from '../ProductItem/ProductItem';
function HeadingListProduct({data}) {
    const targetDate = '2025-12-31T00:00:00';
    const {container, containerItem} = styles;
    return ( 
        <MainLayout>
            <div className={container}>
            <CountDownBanner/>
            <div className={containerItem}>
                {data.map((item)=>{
                   return (<ProductItem 
                   key = {item.id}
                    src = {item.images[0]}
                    prvSrc = {item.images[1]}
                    name = {item.name}
                    price = {item.price}
                    details = {item}
                    />)
                })}
            </div>
            </div>
        {/* <CountDownTimer targetDate={targetDate}/> */}
        </MainLayout>
     );
}

export default HeadingListProduct;