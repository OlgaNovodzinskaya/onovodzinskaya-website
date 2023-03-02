import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Недвижимость", href: "/", current: true },
  { name: "Обо мне", href: "/about", current: false },
  { name: "Услуги", href: "/services", current: false },
  { name: "Партнеры", href: "/partners", current: false },
  { name: "Контакты", href: "/contact", current: false },
];

const Navbar = () => {
  let [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="px-4 z-10 absolute w-full">
        <div className="flex justify-between items-end">
          <div className="relative w-[253px] h-[50px] cursor-pointer hidden lg:block">
            <Image src="/logo_group.svg" alt="Logo" fill />
          </div>
          <div className="relative w-[153px] h-[30px] cursor-pointer hidden lg:hidden sm:block">
            <Image src="/logo_group.svg" alt="Logo" fill />
          </div>
          <div className="relative w-[97px] h-[19px] cursor-pointer block sm:hidden">
            <Image src="/logo_group.svg" alt="Logo" fill />
          </div>
          <div className="lg:flex space-x-4 hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-[#757575] hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-[16px] leading-5 font-medium font-[Arsenal]"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            className="w-6 h-4 sm:w-8 sm:h-8 lg:hidden"
            onClick={() => setIsMenu(!isMenu)}
          >
            {isMenu ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
