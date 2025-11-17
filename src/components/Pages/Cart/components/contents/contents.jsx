import styles from '../../styles.module.scss';
import { useEffect, useState } from "react";
import Button from '../../../../Button/Button';
import cls from 'classnames';
import {CartContext} from "../../../../../contexts/CartContext";
import { useContext } from 'react';
function Content() {
    const {containerContent, contentLeft, contentRight,cartTable, infor, price, code, codeBut, but1, line, subTotal, subTotal1, but2 } = styles;

        const [total, setTotal] = useState(0);
        const {removeFromCart, cart, removeAll, updateCart} = useContext(CartContext);
        useEffect(() => {
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  setTotal(totalAmount);
}, [cart]);
    return ( 
    <div className={containerContent}>
        <div className={contentLeft}>
            <table className={cartTable}>
                <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>SKU</th>
                        <th>QUANTITY</th>
                        <th>SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>
                        {cart.map((item,index)=>{
                            return(
                        <tr key={index} >
                        <td > 
                            <img src={item.Src} alt="" />
                            <div className={infor}>
                                <div>{item.name}</div>
                                <div>
                                    Size: <span>{item.size}</span> 
                                </div>
                            </div>
                            <button
                                className="delete-btn"
                                onClick={()=>{removeFromCart(item.id,item.size)}}
                >
                  🗑
                </button>
                        </td>
                        <td className={price}>${item.price}</td>
                        <td>{item.quantity}{Math.round(item.price)}</td>
                        <td>
                                <select  onChange={(e) => updateCart(item, e.target.value)} value={item.quantity} name="number">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                        </td>
                        <td className={price}>${(item.price*item.quantity).toFixed(2)}</td>
                    </tr>
                            );
                        })
                    
}
                </tbody>
            </table>
            <div className={code}>
                <div className={codeBut}>
                    <input placeholder='CUPON CODE' type="text" />
                    <div className={but1}>
                    <Button content={"ok"} isPrimary ={false} isWidth ={false} Style={{borderRadius: '0px',borderLeft: 'none'}}/>
                    </div>
                </div>
                <div>
                    <Button content={"🗑 CLEAR SHOPPING CART"} isPrimary ={false} isWidth ={false}  onclick={()=>{removeAll()}} />
                </div>
            </div>
        </div>
        <div className={contentRight}>
            <div>
                CART TOTALS
            </div>
            <div className={line}></div>
            <div className={subTotal}>
                <div>Subtotal</div>
                <div>{total.toFixed(2)}</div>
            </div>
            <div className={cls(subTotal, subTotal1)}>
                <div>total</div>
                <div>{total.toFixed(2)}</div>
            </div>
            <div className={but2}><Button content={"PROCESS TO CHECKOUT"} isPrimary ={true} isWidth ={false} /></div>
            <Button content={"CONTINUE TO SHOPPING"} isPrimary ={false} isWidth ={false} />

        </div>
    </div> );
}

export default Content;