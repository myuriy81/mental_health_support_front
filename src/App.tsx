//import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  // const dispatch = useAppDispatch();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // }, [pathname]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const products = await getAllProducts().then(response => response);

  //       dispatch(productsSlice.actions.setProducts(products));
  //     } catch (error) {}
  //   };

  //   fetchProducts();
  // }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
