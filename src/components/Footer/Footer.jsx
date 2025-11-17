import styles from './styles.module.scss';
import {dataMenu} from "./contant";
function MyFooter() {

    const {container, logo,linkItems ,linkItem, contents} = styles; 
    return (
        <div className={container}>
              <div className={logo}>
          <div style={{width:"100%"}}><h1 style = {{fontSize:'22px',margin: '0.47em 0'}}>Miclechirin</h1></div>
          <div style = {{fontsize:'15px', width: '100%', color:'#808080', marginTop:'-6px'}}>XSTORE THEME</div>
        </div>
        <div className={linkItems}>
            {dataMenu.map((item)=>{
              return <a key={item.index} className={linkItem} href={item.href}>{item.content}</a>;
            })}
        </div>
        <div className={contents}>Guaranteed safe ckeckout</div>
        <div className={contents}>Copyright © 2024 <span><a  className={linkItem} href="#">XStore theme</a></span>. Created by 8theme – <span><a  className={linkItem} href="#">WordPress WooCommerce themes.</a></span></div>
        </div>
    );
}

export default MyFooter;