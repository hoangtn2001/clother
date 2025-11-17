import styles from "./styles.module.scss";
import Button from '../../../../Button/Button';
import { useContext } from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import ItemProduct from "../../../../ContentSidebar/components/HeaderSideBar/ItemProduct/ItemProduct";
import InputComon from "../../../../InputComon/InputComon";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const inforSchema = yup.object().shape({
    email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    firstName: yup.string().required('Tên không được để trống'),
    lastName: yup.string().required('Tên không được để trống'),
    state: yup.string().required('state không được để trống'),
    phone: yup.string().required('Số điện thoại không được để trống'),
    address: yup.string().required('Địa chỉ không được để trống'),
    company: yup.string().required('Tên công ty không được để trống'),
    city: yup.string().required('Thành phố không được để trống'),
    orther: yup.string().required('Thông tin không được để trống'),
});

function ContentCheck() {
    const {containerContent, contentRight,contentLeft, line, but2, boxContent, subTotal, fullName} = styles;

        const { cart } = useContext(CartContext);
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const {register,
        handleSubmit,
        formState: {errors}
      } = useForm({
        resolver: yupResolver(inforSchema),
         mode: "onTouched",      // validate khi input bị touch (focus + blur)
         reValidateMode: "onChange", // validate lại khi gõ
      });
      const onSubmit = (data) =>{
        console.log(data);
      }

    return ( 
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className={containerContent}>
          
            <div className={contentLeft}>
                <div>
                            BILLING DETAILS
                        </div>
                <div className={line}></div>
                
                    <div className={fullName}>
                        <InputComon label='First Name' type='text' isRequired {...register('firstName')} error={errors.firstName?.message} />
                        <InputComon label='Last Name' type='text' isRequired {...register('lastName')} error={errors.lastName?.message} />
                    </div>
                     <InputComon label='State' type='text' isRequired {...register('state')} error={errors.state?.message} />
                     <InputComon label='Phone' type='number' isRequired {...register('phone')} error={errors.phone?.message} />
                     <InputComon label='Address' type='text' isRequired {...register('address')} error={errors.address?.message} />
                     <InputComon label='Company Name' type='text' isRequired {...register('company')} error={errors.company?.message} />
                     <InputComon label='Town / City' type='text' isRequired {...register('city')} error={errors.city?.message} />
                     <InputComon label='Email Address' type='text' isRequired {...register('email')} error={errors.email?.message} />
                     <div>
                            ADDITIONAL INFORMATION
                        </div>
                     <div className={line}></div>
                     <InputComon label='Orther Note!' type='text' isRequired {...register('orther')} error={errors.orther?.message} />


            </div>
            <div className={contentRight}>
                        <div>
                            YOUR ORDER
                        </div>
                        <div className={line}></div>
                        <div className={boxContent}>
        {cart.map((item) => {
            return  <ItemProduct key = {item.id} id = {item.id} name = {item.name} Size = {item.size} Price={item.price} quantity={item.quantity} Src={item.Src}/>
        })}
        </div>
         <div className={line}></div>
             <div className={subTotal}>
            <p>SUBTOTAL: </p>
            <p> ${total}</p>
        </div>
        <div className={line}></div>
                        <div className={but2}><Button content={"PROCESS TO CHECKOUT"} isPrimary ={true} isWidth ={false} onclick ={()=>{onSubmit}} /></div>
                        <Button content={"CONTINUE TO SHOPPING"} isPrimary ={false} isWidth ={false} />
            
                    </div>
        </div>
        </form>
     );
}

export default ContentCheck;