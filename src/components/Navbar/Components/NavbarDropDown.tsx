import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type ChildItem = {
  name: string;
  href: string;
  current: boolean;
  subChilds?: ChildItem[];
};

type NavbarItem = {
  name: string;
  href: string;
  current: boolean;
  childs?: ChildItem[];
};

interface NavbarDropDownProps {
  data: NavbarItem[];
}

const NavbarDropDown: FC<NavbarDropDownProps> = ({ data }) => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {data.map((item) => (
          <>
            {item.childs ? (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton
                    className={classNames(
                      item.current
                        ? "bg-white text-textPrimary"
                        : "text-textBlack hover:bg-white hover:text-textPrimary",
                      "px-3 py-2 text-sm font-medium flex"
                    )}
                  >
                    {item.name}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-textBlack"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {item.childs.map((child) => (
                        <>
                          {child.subChilds ? (
                            <Menu as="div" className="relative">
                              <div>
                                <MenuButton
                                  className={classNames(
                                    item.current
                                      ? "bg-white text-textPrimary"
                                      : "text-textBlack ",
                                    "px-3 py-2 text-sm font-medium flex justify-between w-full items-center hover:bg-textPrimary hover:text-white"
                                  )}
                                >
                                  {child.name}
                                  <ChevronRightIcon
                                    className={
                                      "mr-1 h-3 w-3 text-textBlack hover:text-white"
                                    }
                                    aria-hidden="true"
                                  />
                                </MenuButton>
                              </div>

                              <Transition
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <MenuItems className="absolute left-48 -top-[4px] z-10  w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="py-1">
                                    {child.subChilds.map((child) => (
                                      <>
                                        {child.subChilds ? (
                                          <p>{child.subChilds[0].name}</p>
                                        ) : (
                                          <MenuItem key={child.href}>
                                            {({ focus }) => (
                                              <a
                                                href="#"
                                                className={classNames(
                                                  focus
                                                    ? "bg-gray-100 text-gray-900"
                                                    : "text-gray-700",
                                                  "block px-4 py-2 text-sm"
                                                )}
                                              >
                                                {child.name}
                                              </a>
                                            )}
                                          </MenuItem>
                                        )}
                                      </>
                                    ))}
                                  </div>
                                </MenuItems>
                              </Transition>
                            </Menu>
                          ) : (
                            <MenuItem key={child.href}>
                              {({ focus }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    focus
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {child.name}
                                </a>
                              )}
                            </MenuItem>
                          )}
                        </>
                      ))}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <Link
                reloadDocument={false}
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                    ? "bg-white text-textPrimary"
                    : "text-textBlack hover:bg-white hover:text-textPrimary",
                  "px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropDown;
