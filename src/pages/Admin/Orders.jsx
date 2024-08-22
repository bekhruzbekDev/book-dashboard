import OrdersTable from "../../components/OrdersTable";

const Orders = () => {
  let data = new Date();

  return (
    <section className="p-6">
      <div className="flex justify-between border w-full mb-6">
        <h2 className="text-2xl font-bold">Orders</h2>
        <div className="flex gap-4 items-center">
          <span className="p-1 bg-gray-300 rounded-lg">
            <p>All time</p>
          </span>
          <p>{String(data).slice(0, 15)}</p>
        </div>
      </div>
      <OrdersTable />
    </section>
  );
};

export default Orders;
