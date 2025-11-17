import MainLayout from '@components/Layout/Layout'
import { dataInfor } from './constants';
import InforCard from './InforCard/InforCard';
import styles from './styles.module.scss';
function Infor() {
    const {container}= styles;
    return ( 
        <MainLayout>
            <div className={container}>
                {dataInfor.map((item)=>{
                    return <InforCard key = {item.id} content = {item.title} description={item.description} src={item.src}/>
                })}
            </div>
        </MainLayout>
     );
}

export default Infor;