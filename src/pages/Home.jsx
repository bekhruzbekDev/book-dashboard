import { useContext, useEffect } from "react";
import BookCard from "../components/BookCard";
import { Context } from "../components/Layout";

const Home = () => {
  const {book,carts,setCarts} =useContext(Context)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carts));
  }, [carts]);
  const addToCart = (product) => {
    
    if (carts.find((item) => item.id === product.id)) {
      setCarts(carts.filter((item) => item.id !== product.id));
    } else {
      setCarts([...carts, product]);
    }
  };
  return (
    <div className="p-6 h-screen overflow-auto">
      <h1 className="text-lg font-bold uppercase mb-4">Books </h1>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
    {book?.map(item=>{
      return(
        <BookCard key={item.id} data={item} addCard={true} active={carts.find(c=>c.id ==item.id)} addToCart={()=>addToCart(item)}/>
      )
    })}
      </section>
    </div>
  );
};

export default Home;
