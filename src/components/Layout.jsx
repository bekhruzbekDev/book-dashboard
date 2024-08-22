import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import { createContext, useEffect, useState } from "react";
import axios from "../service/axios";
import AddBookModal from "./AddBookModal";
import CartsModal from "./CartsModal";
export const Context = createContext(null);

const Layout = () => {
  const [book, setBook] = useState([]);
  const [order, setOrder] = useState([]);
  const [addBookModal, setAddBookModal] = useState(false);
  const [bookItem, setBookItem] = useState([]);
  const [method, setMethod] = useState("post");
  const [notification ,setNotification] =useState(false)
  const [carts, setCarts] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartModal, setCartModal] = useState(false);
  const fetching = async () => {
    const { data } = await axios.get("/book");

    setBook(data);
  };
  const orders = async () => {
    const { data } = await axios.get("/order");
    setOrder(data);
  };
  useEffect(() => {
    fetching();
    orders();
  }, []);
  return (
    <div className="flex h-screen bg-slate-200 overflow-hidden">
      <Context.Provider
        value={{
          book,
          notification,
          setNotification,
          order,
          setOrder,
          setAddBookModal,
          setBookItem,
          bookItem,
          setMethod,
          fetching,
          carts,
          setCarts,
          setCartModal,
          orders
        }}
      >
        {addBookModal && <AddBookModal method={method} setMethod={setMethod }/>}
        {cartModal && <CartsModal />}
        <SideBar />
        <main className="w-full">
          <Header />
          <Outlet />
        </main>
      </Context.Provider>
    </div>
  );
};

export default Layout;
