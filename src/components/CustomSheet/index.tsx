import { navbarData } from "@/_mockup";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const CustomSheet = () => {
  const [openSub, setOpenSub] = useState<{ [key: string]: boolean }>({});
  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetDescription>
            <ul className="text-left mt-10">
              {navbarData.map((data) => (
                <li
                  className={
                    data.current
                      ? "mb-4 text-xl font-semibold text-active-yellow"
                      : `mb-4 text-xl font-semibold text-black`
                  }
                  key={data.name}
                >
                  <p
                    onClick={() => {
                      setOpenSub((prev) => ({
                        ...prev,
                        [data.name]: !prev[data.name],
                      }));
                    }}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    {data.name}
                    {data.childs && (
                      <span className="font-bold ml-2">
                        {!openSub[data.name] ? (
                          <ChevronDownIcon className="size-4" />
                        ) : (
                          <ChevronUpIcon className="size-4" />
                        )}
                      </span>
                    )}
                  </p>

                  {data.childs && openSub[data.name] && (
                    <ul className="ml-3 text-left text-xl text-gray-500 mt-2">
                      {data.childs.map((child) => (
                        <li key={child.name} className="mb-2">
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
