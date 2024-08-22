import { ShoppingCart } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "./Layout";
import axios from "../service/axios";
const BookCard = ({ data, addCard ,active,addToCart}) => {
  
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const { id, title, description, price, img, cover } = data;
  const { setBookItem, setAddBookModal, setMethod, fetching } =
    useContext(Context);
  const editFun = async (id) => {
    try {
      setEditLoading(true)
      const { data } = await axios.get(`/book/${id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setBookItem(data);
      setAddBookModal(true);
      setMethod("put");
      setEditLoading(false)
    }
  };
  const deleteItem = async (id) => {
    try {
      setDeleteLoading(true);
      const { data } = await axios.delete(`/book/${id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setDeleteLoading(false);
      fetching();
    }
  };
  return (
    <div className="p-4 border border-gray-400 rounded-lg bg-white shadow-2xl cursor-pointer hover:translate-y-[-1px] h-[420px] relative"  >
      <div className="m-auto   400 flex justify-center h-52 mb-4">
        <img src={img} alt="" className="object-contain" />
      </div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="font-semibold text-sm mb-2 h-10  overflow-hidden">{description.slice(0,60)+"..."}</p>
      <div className="border-y p-2 border-gray-300 flex justify-between">
        <span className="text-center text-gray-400 uppercase">
          price:
          {price}$
        </span>
        <span className="text-center text-gray-400 uppercase">
          cover :{cover}
        </span>
      </div>
      {addCard && (
        <button
          className={`w-64 p-2 rounded-md bg-green-500 mt-2 text-white flex justify-center gap-4 items-center absolute bottom-2 left-6 ${
            active ? "bg-orange-300" : ""
          }`}
          onClick={() => addToCart()}
        >
          <ShoppingCart /> add To cart
        </button>
      )}
      {addCard || (
        <div className="flex gap-4">
          <button
            className={`w-full p-2 rounded-md bg-red-500 mt-2 text-white flex justify-center gap-4 items-center ${
              deleteLoading ? "opacity-50" : ""
            }
            `}
            disabled={deleteLoading}
            onClick={() => deleteItem(id)}
          >
            delete
          </button>
          <button
            className={`w-full p-2 rounded-md bg-green-500 mt-2 text-white flex justify-center gap-4 items-center ${editLoading?"opacity-50":""}`}
            onClick={() => editFun(id)}
            disabled={editLoading}
          >
            edit
          </button>
        </div>
      )}
    </div>
  );
};
BookCard.propTypes = {
  data: PropTypes.object,
  addCard: PropTypes.bool,
};
export default BookCard;
