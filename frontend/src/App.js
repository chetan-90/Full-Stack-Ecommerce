import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common';
import { useEffect, useState } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {

  const dispatch = useDispatch();
  const [cartProductCount , setCartProductCount] = useState(0)

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()
    
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
    
  }

  const fetchUserAddToCart = async() => {
    const dataResponse = await fetch(SummaryApi.countAddToCartProduct.url,{
      method : SummaryApi.countAddToCartProduct.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()
  
    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(()=>{
    // user Details
    fetchUserDetails();
    // user Details Cart Product
    fetchUserAddToCart()
  },[])

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, //user details fail
        cartProductCount,  //current user add to cart product
        fetchUserAddToCart
      }}>
      <ToastContainer
        position='top-center'
      />
      <Header/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
        <Outlet/>
      </main>
      <Footer/>
    </Context.Provider>
    </>
  );
}

export default App;
