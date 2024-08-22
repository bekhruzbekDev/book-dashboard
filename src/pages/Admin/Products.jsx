import { useContext } from "react"
import BookCard from "../../components/BookCard"
import { Context } from "../../components/Layout"

const Products = () => {
  const {book,setAddBookModal} =useContext(Context)
  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Products</h2>
        <button className="p-4 bg-blue-500 text-center text-white font-bold rounded-lg shadow-lg" onClick={()=>setAddBookModal(true)}>
          + New ebook
        </button>
      </div>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
      {book?.map(item=>{
      return(
        <BookCard key={item.id} data={item}/>

      )
    })}
      </section>
    </section>
  )
}

export default Products
