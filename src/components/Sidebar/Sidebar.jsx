import { useContext, useEffect,useState } from "react";
import style from "./style.module.scss"
import { SideBarContext } from "../../contexts/SideBar";
import classNames from "classnames";
import { IoCloseOutline } from "react-icons/io5";
import Login from "../ContentSidebar/Login/Login";
import Compare from "../ContentSidebar/Compare/Compare";
import WishList from "../ContentSidebar/WishList/WishList";
import Cart from "../ContentSidebar/Cart/Cart";
import Search from "../ContentSidebar/Search/Search";
import ProductDetail from "../ContentSidebar/ProductDetail/ProductDetail";
import MainLayout from "../Layout/Layout";
import { OurShopProvider } from "../../contexts/OurShopProvider";
function Sidebar() {
    const {container, overlay, sideBar, slideSideBar, boxIcon, container1, boxIcon1, search, container1Slide} = style;
    const {isOpen, setIsOpen, type} = useContext(SideBarContext);

    const handleToggle = () =>{
        setIsOpen(!isOpen);
    }
    const handleRenderContent = () =>{
        switch (type) {
            case 're':
                return <Compare />;
            case 'heart':
                return <WishList/>;
            case 'cart':
                return <Cart/>;
            case 'Contracts':
                return 're';
            case 'Search':
                return <Search/>;
            case 'Sign in':
                return <Login />;
            case 'product':
                return <ProductDetail/>;
            default:
                return <Login />;
        }
    }
    return (
        <>
        { type !== "Search" ?(
    <div className={container}>
        <div className={classNames({
            [overlay]:isOpen
        })} onClick={handleToggle}></div>
        <div className={classNames(sideBar, {[slideSideBar]:isOpen})}>
            {isOpen &&  <div className={boxIcon} onClick={handleToggle}>
                <IoCloseOutline/>
            </div>}
            {handleRenderContent()}
             </div>
    </div> 
        ):(
            <div className={classNames(container1, {[container1Slide]:isOpen})}>
                <div className={boxIcon1} onClick={handleToggle}>
                <IoCloseOutline />
            </div>
            <MainLayout>
                <OurShopProvider>
            
            <div className={search}>
                
                {handleRenderContent()}
               
            </div>
            </OurShopProvider>
             </MainLayout>
                
            </div>
            
        )
    
}
        </>
);
}

export default Sidebar;