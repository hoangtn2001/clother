import styles from "./styles.module.scss"
function HeaderSideBar({icon, title}) {
    const {container, titl} = styles;
    return ( 
        <div className={container}>
            {icon}
            <div className={titl}>{title}</div>
        </div>
     );
}

export default HeaderSideBar;