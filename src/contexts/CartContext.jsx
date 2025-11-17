import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState(() => {
  return JSON.parse(localStorage.getItem("cart")) || [];
});
const [productD, setProductD] = useState(() => {
  return JSON.parse(localStorage.getItem("pro")) || [];
});

  // Load cart từ localStorage khi mở trang
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
    useEffect(() => {
    const prePro = JSON.parse(localStorage.getItem("pro")) || [];
    setProductD(prePro);
  }, []);

  // Lưu vào localStorage mỗi khi cart thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
   useEffect(() => {
    localStorage.setItem("pro", JSON.stringify(productD));
  }, [productD]);

  // Hàm thêm sản phẩm vào cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (index !== -1) {
        // Cập nhật số lượng
        const updatedCart = [...prevCart];
        updatedCart[index].quantity += 1;
        alert('Thêm thành công một sản phẩm cũ');
        return updatedCart;
      } else {
        alert('Thêm thành công');
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const proDetail = (product) =>{
    setProductD(product);
  }

  const addManyToCart = (product, quantity) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (index !== -1) {
        // Cập nhật số lượng
        const updatedCart = [...prevCart];
        updatedCart[index].quantity += quantity;
        alert('Thêm thành công một sản phẩm cũ');
        return updatedCart;
      } else {
        alert('Thêm thành công');
        return [...prevCart, { ...product, quantity: quantity }];
      }
    });
  };

  const removeFromCart = (productId, Size) => {
    if(window.confirm("bạn chắc chắn muốn xóa chứ ? ")){
  setCart((prevCart) => {
    return prevCart.filter(
      (item) => !(item.id === productId && item.size === Size)
    );
  });
}
};
const removeAll = () =>{
  if(window.confirm("bạn chắc chắn muốn xóa toàn bộ chứ ? ")){
   setCart([]);
}
}
const updateCart = (product, quan) =>{
  setCart((prevCart) => {
      const index = prevCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (index !== -1) {
        // Cập nhật số lượng
        const updatedCart = [...prevCart];
        updatedCart[index].quantity = quan;
        alert('Cập nhật thành công');
        return updatedCart;
      } else {
        alert('Cập nhật thất bại');
        return prevCart;
      }
    });
}
  const values = {cart, setCart,addToCart, addManyToCart, removeFromCart, removeAll, updateCart,proDetail}
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
}
