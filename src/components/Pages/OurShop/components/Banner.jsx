import styles from '../styles.module.scss'
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '../../../Button/Button';
function Banner() {
    const {containerBanner,contentBox, title, countDownBox} = styles;
    const targetDate = '2026-08-20T00:00:00';
    return (  
        <>
            <div className={containerBanner}>
                <div className={contentBox}>
                    <div className={countDownBox}>
                        <CountdownTimer targetDate = {targetDate}/>
                    </div>
                    <div className={title}>The Classics Make A ComeBack</div>
                <Button content='BUY NOW' isWidth={true} type='submit' />
                </div>
            </div>
        </>
    );
}

export default Banner;