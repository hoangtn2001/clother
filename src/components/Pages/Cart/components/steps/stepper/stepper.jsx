import styles from '../../../styles.module.scss';
import cls from 'classnames';
function Stepper({number, content, isDisables , onclick}) {
    const {stepper, stepNumber, stepContent, isDisable, isDisableContent} = styles;
    return ( 
        <div className={stepper} onClick={onclick}>
            <div className={cls(stepNumber, {[isDisable]: isDisables})}>{number}</div>
            <div className={cls(stepContent, {[isDisableContent]: isDisables})}>{content}</div>
        </div>
     );
}

export default Stepper;