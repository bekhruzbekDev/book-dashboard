import { BookOpen } from "lucide-react";
import { pagesInfo } from "../constants/sidebar";
import { NavLink } from "react-router-dom";


const SideBar = () => {
  return (
    <aside className="w-72 h-screen bg-white p-6 pl-0 ">
      <div className="flex gap-4 items-center pl-6 mb-10">
        <BookOpen />
        <h2 className="uppercase font-bold text-xl">Book Store</h2>
      </div>
      <div className="p-4">
        
          <ul className="flex flex-col gap-10 ">
            {pagesInfo.map((item) => {
              return (
                <li key={item.id} className="">
                  <NavLink to={item.url} className={"flex gap-4 items-center font-bold"}>
                    <item.icon />
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
      </div>
    </aside>
  );
};

export default SideBar;
