import { useState, useEffect, useRef } from 'react';
const useTranslateXImage = () =>{
    const [scrollDriction, setScrollDriction] = useState(null);
    const previousScrollPosition = useRef(0);
    const [translateXPosition, setTranslateXPosition] = useState(80);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () =>{
        const currentScrollPosition = window.pageYOffset;
        if(currentScrollPosition>previousScrollPosition.current){
            setScrollDriction('down');
        }else if(currentScrollPosition<previousScrollPosition.current){
            setScrollDriction('up');
        }
        previousScrollPosition.current = currentScrollPosition<=0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };
    const handleTranslateX =()=>{
        if(scrollDriction ==='down' && scrollPosition >= 1200){
            setTranslateXPosition(translateXPosition<=0 ? 0: translateXPosition -0.5 );
        }else if (scrollDriction ==='up'){
            setTranslateXPosition(translateXPosition>=0 ? 80: translateXPosition + 0.5 );

        }
    };
    useEffect(()=>{
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);
    useEffect(()=>{
        handleTranslateX();
    },[scrollPosition]);

    return {translateXPosition};
};
export default useTranslateXImage;