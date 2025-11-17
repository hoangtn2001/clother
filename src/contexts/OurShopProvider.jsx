import { createContext, useEffect, useState } from "react";
import { getProducts } from "../apis/productsService";

export const OurShopContext = createContext()
export const OurShopProvider=({children}) =>{
    const sortOptions = [
        {label: 'Default sorting', value: '0'},
        {label: 'Sort by popularity', value: '1'},
        {label: 'Sort by average rating', value: '2'},
        {label: 'Sort by lastest', value: '3'},
        {label: 'Sort by price: low to hight', value: '4'},
        {label: 'Sort by price: hight to low', value: '5'}
    ];
    const showOptions = [
        {label: '8' , value: '8' },
        {label: '12' , value: '12' },
        {label: 'All' , value: 'all' }
    ];
    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [showGrid, setShowGrid] = useState('0');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const handleLoadMore = () => {
        const query = {
            sortType: sortId,
            page: +page+1,
            limit: showId
        };
        getProducts(query)
        .then((res)=>{
            setProducts((prev) => {
                return [...prev, ...res.contents];
            });
            setPage(+res.page);
            setTotal(res.total)
            setIsLoading(false);
        }).catch((err)=>{
            setIsLoading(false);
            console.log(err)
        })
    }

    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setShowGrid,
        products,
        showGrid,
        isLoading,
        handleLoadMore,
        total,
        setPage
    };
    useEffect(()=>{
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        };
        setIsLoading(true);
        getProducts(query)
        .then((res)=>{
            setProducts(res.contents);
            setTotal(res.total);
            setIsLoading(false);
        }).catch((err)=>{
            setIsLoading(false);
            console.log(err)
        })
    }, [sortId, showId])
    return (
        <OurShopContext.Provider value = {values}>
            {children}
        </OurShopContext.Provider>
    );
};