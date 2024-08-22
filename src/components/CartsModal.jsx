import { X } from "lucide-react";
import { useContext } from "react";
import { Context } from "./Layout";
import axios from "../service/axios";
import { useState } from "react";

const CartsModal = () => {
  const { carts, setCartModal, setCarts, orders, setNotification } =
    useContext(Context);
  const totalPrice = carts.reduce((a, b) => a + b.price, 0);
  const [loading, setLoading] = useState(false);
  const deleteItem = (id) => {
    let data = carts.filter((item) => item.id != id);
    setCarts(data);
  };
  const orderFun = async (obj) => {
    setLoading(true);
    const formattedCart = obj.map((item) => ({
      title: item.name,
      description: item.description || "",
      img: item.img || "",
      cover: item.cover || "",
      price: item.price,
      id: item.id,
    }));
    try {
      const { data } = await axios.post("/order", formattedCart);
      setCarts([]);
      orders();
      setNotification(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed w-full h-screen bg-black  z-10 bg-opacity-45">
      <div className="w-96 h-screen bg-white p-6 absolute right-0 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Carts</h1>
          <X
            className="hover:text-red-400 transition-all cursor-pointer"
            onClick={() => setCartModal(false)}
          />
        </div>
        <div className="flex flex-1 flex-col gap-5 overflow-x-auto">
          {carts.length >= 1 &&
            carts.map((item) => {
              return (
                <div
                  className="p-2 w-full border border-gray-400 rounded-md flex items-center mb-4"
                  key={item.id}
                >
                  <img src={item.img} alt="" className="w-10 mr-5" />
                  <span className="flex-1 mr-2">
                    <p className="font-bold">{item.title}</p>
                    <p>Price:{item.price}$</p>
                  </span>
                  <X
                    onClick={() => deleteItem(item.id)}
                    className="cursor-pointer"
                  />
                </div>
              );
            })}
          {carts.length == 0 && (
            <div className="flex flex-1 justify-center items-center">
              <h1 className="text-xl font-bold">Not Books :(</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex gap-2">
            <span>Итого: </span>
            <div className="flex-1 border-b border-dashed"></div>
            <b>{totalPrice} $</b>
          </div>

          <button
            className={`p-4 w-full bg-green-500 rounded-md mt-2 text-white ${
              carts.length == 0 ?"opacity-40" : loading? "opacity-40":""
            }`}
            disabled={carts.length == 0 ||loading}
            onClick={() => orderFun(carts)}
          >
            Sotib
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartsModal;
