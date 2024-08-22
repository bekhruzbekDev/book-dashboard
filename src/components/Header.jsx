import { Search } from "lucide-react";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <div className="w-full p-6 border bg-white shadow-md flex justify-between">
      <div className="flex gap-4 items-center border border-gray-300 py-2 px-4 rounded-xl">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="search book..."
          className="outline-none  "
        />
      </div>
      <HeaderProfile />
    </div>
  );
};

export default Header;
