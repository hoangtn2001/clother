import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ybIcon from '@icons/svgs/ybIcon.svg';
import reIcon from '@icons/svgs/reIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
function BoxIcons({type, href, onClick}) {
    const {boxIcon,boxIcon1} = styles;
    const handleRenderIcon = (type) =>{
        switch(type){
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ybIcon;
            case 're':
                return reIcon;
            case 'heart':
                return heartIcon;
            case 'cart':
                return cartIcon;
        }
    }
    const getClassName = (type) => {
        return ['fb', 'ins', 'ytb'].includes(type) ? boxIcon : boxIcon1;
    };
    return ( 
    <div className={getClassName(type)}>
        <img src = {handleRenderIcon(type)} alt={type} onClick={onClick} /> 
    </div> 
    );
}

export default BoxIcons;