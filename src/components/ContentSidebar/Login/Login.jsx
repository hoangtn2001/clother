import InputComon from "../../InputComon/InputComon";
import styles from './styles.module.scss';
import Button from '../../Button/Button';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    password: yup.string().max(10).required('Mật khẩu không được để trống'),
    rememberMe: yup.boolean()
});

const registerSchema = yup.object().shape({
    regisEmail: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    regisPassword: yup.string().max(10).required('Mật khẩu không được để trống'),
    regisConfirmPassword: yup
        .string()
        .oneOf([yup.ref('regisPassword')], 'Mật khẩu nhập lại không khớp')
        .required('Bạn phải nhập lại mật khẩu'),
});


function Login() {
    const {container, title, boxRememberMe, lostPass, btn} = styles;
    const [isRegister, setIsRegister] = useState(false); 
    const [logginSs,setLoginSs] = useState(false);
        // Khởi tạo useForm với một schema mặc định
    const {reset} = useForm({
        // Bắt đầu với schema của login
        resolver: yupResolver(loginSchema),
        mode: 'onSubmit',
    });

 useEffect(() => {
        // Khi isRegister thay đổi, hãy reset form với schema tương ứng
        reset(
            undefined, // Giữ giá trị mặc định là undefined
            {
                keepErrors: false, // Xóa lỗi cũ
                keepDirty: false,
                keepIsSubmitted: false,
                keepTouched: false,
                keepIsValid: false,
                keepSubmitCount: false,
            }
        );
    }, [isRegister, reset]);


    const { register: loginRegister, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors }, reset: resetLogin } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onSubmit',
    });

    const { register: registerRegister, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors }, reset: resetRegister } = useForm({
        resolver: yupResolver(registerSchema),
        mode: 'onSubmit',
    });

    const onLogin = (data) => {
        if(data.email==='trinhnam011a@gmail.com' && data.password ==='123456')
        {
            setLoginSs(false);
            Cookies.set('username', data.email);
            Cookies.set('name', 'Tran Van A');
             window.location.reload();
        }else{
            setLoginSs(true);
        }
    }
    const onRegister = data => console.log('Register Data:', data);

    const handleToggleFinal = () => {
        // Khi chuyển đổi, reset cả 2 form để xóa lỗi và dữ liệu
        resetLogin();
        resetRegister();
        setIsRegister(!isRegister);
    };


    return ( 
    <div className={container}>
        <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>


       {isRegister ? (
   <form onSubmit={handleRegisterSubmit(onRegister)}>
                    <InputComon label='Email' type='text' isRequired {...registerRegister('regisEmail')} error={registerErrors.regisEmail?.message} />
                    <InputComon label='Password' type='password' isRequired {...registerRegister('regisPassword')} error={registerErrors.regisPassword?.message} />
                    <InputComon label='Confirm password' type='password' isRequired {...registerRegister('regisConfirmPassword')} error={registerErrors.regisConfirmPassword?.message} />
                    <div className={btn}><Button content='REGISTER' isWidth={false} type='submit' /></div>
                </form>
) : (
  <form onSubmit={handleLoginSubmit(onLogin)}>
                    <InputComon label='Email' type='text' isRequired {...loginRegister('email')} error={loginErrors.email?.message} />
                    <InputComon label='Password' type='password' isRequired {...loginRegister('password')} error={loginErrors.password?.message} />
                    {logginSs && <p style={{ color: 'red' }}>"Tên đăng nhập hoặc mật khẩu không đúng !!"</p>}
                    <div className={boxRememberMe}>
                        <input type="checkbox" {...loginRegister('rememberMe')} />
                        <span>Remember Me</span>
                    </div>
                    <div className={btn}><Button content='LOGIN' isWidth={false} type='submit' /></div>
                </form>
)}


        <div className={btn}><Button onclick = {handleToggleFinal} content = {isRegister 
        ? 'Alredy have an account ?'
        : 'Don\'t have an account'} isPrimary = {false} isWidth = {false}/></div>
        {!isRegister &&<div className={lostPass}>Lost your password</div>}
    </div> );
}

export default Login;