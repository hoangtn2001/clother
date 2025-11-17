import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import styles from "../styles.module.scss"
import cls from 'classnames';
import SelectBox from "./SelectBox";
import { useContext } from "react";
import {OurShopContext} from "../../../../contexts/OurShopProvider";
function Filter() {
    const {containerFilter, boxLeft, boxIcon, selectBox, sort, show} = styles;
   const {showOptions, sortOptions, setSortId, setShowId, setShowGrid, setPage}= useContext(OurShopContext);
    const getValueSelect = (value,type)=>{
        if(type === "sort"){
            setPage(1);
            setSortId(value);
        }else{
            setPage(1);
            setShowId(value);
        }
    }
    const handleShowGrid = (type) =>{
        setShowGrid(type);
    }
    return ( 
        <div className = {containerFilter}>
            <div className={boxLeft}>
                <SelectBox options = {sortOptions} getValue = {getValueSelect} type = {"sort"}/>
                <div className={boxIcon}>
                <TfiLayoutGrid4 style ={{fontSize: "23px", color: "#222", cursor: "pointer"}} onClick={()=>handleShowGrid("0")}/>
                <div 
                    style={{
                        height: "20px",
                        width: "1px",
                        backgroundColor: "#e1e1e1"
                    }}>
                    <CiCircleList style ={{fontSize: "23px", color: "#222", cursor: "pointer"}} onClick={()=>handleShowGrid("1")}/>
                </div>

                </div>
            </div>
            <div className={boxLeft}>
                <div style={{color: "#555", fontSize: "14px" }}>Show</div>
                <SelectBox options = {showOptions} getValue = {getValueSelect} type = {'show'}/>
            </div>
        </div>
     );
}

export default Filter;