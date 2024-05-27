import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";

import { navbarData } from "../../_mockup";
import NavbarDropDown from "./Components/NavbarDropDown";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomNavbar() {
  return (
    <Disclosure as="nav" className="bg-white border-b-[.5px] border-b-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 justify-center items-center sm:justify-start">
                <Menu>
                  <MenuButton className="inline-flex h-16 items-center gap-2  bg-primary py-1.5 px-20 text-15 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
                    <Bars3BottomLeftIcon className="size-8 pr-2 text-textBlack" />
                    Shop By Categories
                    <ChevronDownIcon className="size-6 pl-2 fill-white/60" />
                  </MenuButton>
                </Menu>
                <NavbarDropDown data={navbarData} />
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navbarData.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="link"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
