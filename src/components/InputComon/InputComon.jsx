import { useState, forwardRef } from 'react';
import styles from './styles.module.scss';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const InputComon = forwardRef(({label,placeHolder, onchange ,type, isRequired = false,error, ...rest}, ref) => {
    const {labelInput, boxInput, container, boxIcon} = styles;
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type ==='password';
    const isShowTextPassword = type ==='password' && showPassword ? 'text' : type;
    const handleShowPassword = () =>{
        setShowPassword(!showPassword);
    };
    return ( 
        <div className={container}> 
            <div className={labelInput}>{label} {isRequired && <span>*</span>}</div>
            <div className={boxInput}>
                <input placeholder={placeHolder} {...rest} type={isShowTextPassword}  ref = {ref} onChange={onchange}/>
                { error && <p style={{ color: 'red' }}>{error}</p>}
                {isPassword && (
                     <div className={boxIcon} onClick={handleShowPassword}>{showPassword ?  <FaEye /> :   <FaEyeSlash />} </div>
                )
                   
    }
            </div>
        </div>
     );
});

export default InputComon;