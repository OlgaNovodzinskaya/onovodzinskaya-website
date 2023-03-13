import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Недвижимость", href: "/estate", current: true },
  { name: "Обо мне", href: "/about", current: false },
  { name: "Услуги", href: "/services", current: false },
  { name: "Партнеры", href: "/partners", current: false },
  { name: "Контакты", href: "/contact", current: false },
];

const Navbar = () => {
  let [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-end w-full py-6">
        <Link href="/">
          <div className="relative w-[97px] h-[19px] sm:w-[153px] sm:h-[30px] lg:w-[253px] lg:h-[50px] cursor-pointer">
            <Image src="/logo_group.svg" alt="Logo" fill />
          </div>
        </Link>
        <div className="lg:flex space-x-4 hidden absolute right-0 z-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "underline text-gray"
                  : "text-gray hover:opacity-80",
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
    </>
  );
};

export default Navbar;
