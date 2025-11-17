import { SideBarContext } from "../../contexts/SideBar";
import BoxIcons from "./BoxIcon/BoxIcons";
import Menu from './Menu/Menu';
import {dataBoxIcon, dataMenu} from "./contants";
import styles from "./styles.module.scss";
import React, { useState, useEffect, useContext } from 'react';

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function MyHeader() {
  const {container, fixed,containerBox,containerHeader,containerBoxIcon, containerMenu, logo} = styles;
    const [isSticky, setIsSticky] = useState(false);
    const {isOpen, setIsOpen, setType} = useContext(SideBarContext);
    const navigate = useNavigate();

    const handleOpenSideBar = (type) => {
       if(Cookies.get('name') && type === 'Sign in'){
        setIsOpen(false);
        setType(type);
        return;
      }
            setIsOpen(true);
            setType(type);
    };
    const handleNavigate = (content) =>{
      if(content === 'Our shop'){
        navigate('/ourshop');
      }
    }

    useEffect(() => {
      // Hàm kiểm tra khi cuộn trang
      const handleScroll = () => {
        if (window.scrollY > 70) {
          setIsSticky(true);  // Thêm sticky khi cuộn xuống
        } else {
          setIsSticky(false); // Loại bỏ sticky khi cuộn lên đầu trang
        }
      };
  
      // Thêm event listener cho sự kiện scroll
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup khi component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return(
      <div className={` ${isSticky ? fixed : container}`}>
      <div className={containerHeader}>
        <div className={containerBox}>
            <div className={containerBoxIcon}>
              {
            dataBoxIcon.slice(0,3).map((item)=> {
                  return <BoxIcons key={item.index} type = {item.type} href={item.href}/>
                })
              }
            </div>
            <div className={containerMenu}>
              {
                dataMenu.slice(0,3).map((item)=> {
                  return <Menu key={item.index} content = {item.content} href={item.href} onClick={()=>handleNavigate(item.content)}/>;
                })
              }
            </div>
        </div>
        <div className={logo}>
          <div style={{width:"100%"}}><h1 style = {{fontSize:'22px',margin: '0.47em 0'}}>Miclechirin</h1></div>
          <div style = {{fontsize:'15px', width: '100%', color:'#808080', marginTop:'-6px'}}>XSTORE THEME</div>
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
              {
                dataMenu.slice(3,6).map((item)=> {
                  return <Menu key={item.index} content = {item.content} href={item.href} setIsOpen = {setIsOpen} onClick={() => handleOpenSideBar(item.content)} isActive ={ Cookies.get('name') && item.content === 'Sign in' ? true:false}/>;
                })
              }
            </div>
            <div className={containerBoxIcon}>
              {
              dataBoxIcon.slice(3,6).map((item)=> {
                  return <BoxIcons key={item.index} type = {item.type} href={item.href}  onClick={() => handleOpenSideBar(item.type)} />
                })
              }
            </div>
            </div>
      </div>
      </div>
    ); 
}

export default MyHeader;