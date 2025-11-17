import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss'
function AdvanceHeading() {
    const {container,containerMiddleBox,headLine,des,title} = styles;
    return ( 
        <MainLayout>
            <div className={container}>
                <div className={headLine}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>Don't miss super offers</p>
                    <p className={title}>Our best products</p>
                </div>
                <div className={headLine}></div>
             </div>  
        </MainLayout>
     );
}

export default AdvanceHeading;