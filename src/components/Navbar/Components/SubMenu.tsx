import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { ChildItem } from "./../../../utils/types";
import { classNames } from "./../../../utils/useClassName";

const SubMenu: FC<{ child: ChildItem }> = ({ child }) => {
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton
          className={classNames(
            "text-textBlack px-3 py-2 text-sm font-medium flex justify-between w-full items-center hover:bg-textPrimary hover:text-white"
          )}
        >
          {child.name}
          <ChevronRightIcon
            className="mr-1 h-3 w-3 text-textBlack hover:text-white"
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
        <MenuItems className="absolute left-48 top-[0px] z-10 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {child.subChilds?.map((subChild) => (
              <MenuItem key={subChild.name}>
                {({ focus }) => (
                  <a
                    href={subChild.href}
                    className={classNames(
                      focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {subChild.name}
                  </a>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default SubMenu;
