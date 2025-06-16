import { BLOG_NAVBAR_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSend } from "react-icons/lu";

const SideMenu = ({ activeMenu }) => {

  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">

      {BLOG_NAVBAR_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] ${
            activeMenu == item.label
              ? "text-white bg-linear-to-r from-sky-500  to-cyan-400"
              : ""
          } py-3 px-6 rounded-lg mb-3 cursor-pointer`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}

      
        <button
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 cursor-pointer`}
          onClick={() => {}}
        >
          <LuSend className="text-xl" />
          Contact Us
        </button>
    </div>
  );
};

export default SideMenu;
