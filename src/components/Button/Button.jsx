import styles from './styles.module.scss'
import classNames from 'classnames';
function Button({onclick,content, isPrimary = true, isWidth = true, type, Style}) 
{
    const {btn,primaryBtn, secondaryBtn, btnWidth} = styles;
    return ( 
        <button  type={type} className={classNames({[btn]:isWidth,
            [btnWidth]:!isWidth
        },{
            [primaryBtn]: isPrimary,
            [secondaryBtn]:!isPrimary
        })} onClick={onclick} style = {Style}>{content}</button>
     );
}

export default Button;