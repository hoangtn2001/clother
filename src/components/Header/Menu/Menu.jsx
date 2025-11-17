import styles from '../styles.module.scss'
import Cookies from 'js-cookie';
import classNames from 'classnames';
function Menu({content, href, setIsOpen,onClick,isActive}) {
    const {menuContainer,menu, logout, menuLog} = styles;
    if(content === 'Sign in' && Cookies.get('name'))
    {
        content = Cookies.get('name');
    }
    const handleLogOut = () =>{
        Cookies.remove('username');
        Cookies.remove('name');
         window.location.reload();
    }
    return ( 
        <div className={classNames(menuContainer, {[menuLog]:isActive})}>
        <div className={menu} onClick={onClick}>{content}</div>
        {content === Cookies.get('name') && <div className={logout} onClick={()=>handleLogOut()}>Log out</div>}
        </div>
     );
}

export default Menu;