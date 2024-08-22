import { useContext, useEffect } from "react";
import { Context } from "./Layout";
const tableTitle = [
  { id: 1, text: "products" },
  { id: 2, text: "Customer" },
  { id: 4, text: "price" },
];
const OrdersTable = () => {
  const { order } = useContext(Context);
  localStorage.setItem("order", order.length);
  useEffect(() => {}, [order]);

  return (
    <div className="w-full bg-white rounded-lg shadow-xl p-4">
      <table className="w-full divide-y divide-gray-700">
        <thead>
          <tr>
            {tableTitle?.map((item) => {
              return (
                <th
                  key={item.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide"
                >
                  {item.text}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {order.map((product) => {
            let data = Object.values(product);
            data.pop();

            return data.map((item) => {
              return (
                <tr key={item.id} className="">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font font-medium text-black flex gap-2 items-center">
                    <img src={item.img} alt="" className="w-10" />
                    {item.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black ">
                    behruzp330@gmail
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {item.price}$
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
