import { Suspense } from "react";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import routers from "../routers/routers";
import { SidebarProvider } from "./contexts/SideBar";
import { CartProvider } from "./contexts/CartContext";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  

  return (

    <SidebarProvider>
      <CartProvider>
      <BrowserRouter>
      <Sidebar/>
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
            {
              routers.map((item,index)=>{
                return (
                  <Route path = {item.path} element = {<item.component/>} key={index} />
                );
              })
            }
        </Routes>
      </Suspense>
    </BrowserRouter>
    </CartProvider>
    </SidebarProvider>

    
  );
}

export default App
