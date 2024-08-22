import { useForm } from "react-hook-form";
import Input from "./Input";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "./Layout";
import axios from "../service/axios";
const AddBookModal = ({method,setMethod}) => {
  const [loading,setLoading] =useState(false)
  const {setAddBookModal,bookItem,fetching} =useContext(Context)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm(method =='put'?{defaultValues:bookItem}:"");
  const submit = async(dataObj) => {
    try {
      setLoading(true)
      if(method =='post'){
        const {data} = await axios.post("/book",dataObj)
      
      }else{
        try {
          
          const {data} = await axios.patch(`/book/${bookItem.id}`,dataObj)
        } catch (err) {
          console.log(err);
          
        }finally{
setMethod('post')
        }
      }
    } catch (err) {
      console.log(err);
      
    }finally{
      setLoading(false)
      fetching()
      setAddBookModal(false)
    }

  };

  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-50 w-full h-screen z-10 flex justify-center items-center">
      <form
        className="w-96 p-6  bg-zinc-900 rounded-md"
        onSubmit={handleSubmit(submit)}
      >
        <p className="text-white mb-2 font-bold text-xl text-right cursor-pointer" onClick={()=>setAddBookModal(false)| setMethod('post')}>X</p>
        <Input
          inputInfo={{ label: "book title", type: "text", }}
          validation={{
            register,
            errors,
            name: "title",
            obj: { required: true, minLength: 3 },
          }}
        />
        <Input
          inputInfo={{ label: "description", type: "text" , }}
          validation={{
            register,
            errors,
            name: "description",
            obj: { required: true, minLength: 5 },
          }}
        />
        <Input
          inputInfo={{ label: "Image url", type: "text" , }}
          validation={{
            register,
            errors,
            name: "img",
            obj: { required: true },
          }}
        />
        <div className="flex gap-4">
          <Input
            inputInfo={{ label: "book cover", type: "number" , }}
            validation={{
              register,
              errors,
              name: "cover",
              obj: { required: true },
            }}
          />
          <Input
            inputInfo={{ label: "book price", type: "number" , }}
            validation={{
              register,
              errors,
              name: "price",
              obj: { required: true },
            }}
          />
        </div>
        <button className={`p-2 bg-white w-full rounded-md ${loading ?"opacity-20":""}`} disabled={loading}>
        {loading ? "loading...":'submit'}  
          </button>
      </form>
    </div>
  );
};
AddBookModal.propTypes = {
  method: PropTypes.string,
  setMethod:PropTypes.func

}
export default AddBookModal;;
