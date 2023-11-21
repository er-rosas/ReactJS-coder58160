import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
/* import { NotificationProvider } from './notification/NotificationContext' */
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
/* import Breadcrumb from './components/Breadcrumb/BreadCrumb' */
import Footer from './components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import ScrollToTop from './ScrollToTop'; */

const App = () => {

  return (
    <>
      {/* <NotificationProvider> */}
        <CartProvider>
          <BrowserRouter>
            <ToastContainer />
            {/* <ScrollToTop /> */}
            <Navbar />
            {/* <Breadcrumb /> */} {/* no se si agregarlo, aun hay que arreglar algunas rutas que se muetran */}
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados categoria: '}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      {/* </NotificationProvider> */}
    </>
  )
}

export default App