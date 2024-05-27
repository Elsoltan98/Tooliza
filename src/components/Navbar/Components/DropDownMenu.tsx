import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import MenuItemComponent from "./MenuItem";
import { ChildItem, NavbarItem } from "../../../utils/types";
import { classNames } from "../../../utils/useClassName";

const DropDownMenu: FC<NavbarItem> = ({ name, current, childs }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={classNames(
            current
              ? "bg-white text-textPrimary"
              : "text-textBlack hover:bg-white hover:text-textPrimary",
            "px-3 py-2 text-sm font-medium flex"
          )}
        >
          {name}
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
        <MenuItems className="absolute left-0 top-[43px] z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            {childs?.map((child: ChildItem) => (
              <MenuItemComponent key={child.name} child={child} />
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};
export default DropDownMenu;
