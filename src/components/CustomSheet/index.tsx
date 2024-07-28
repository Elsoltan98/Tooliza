import { navbarData } from "@/_mockup";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";

const CustomSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetDescription>
            <ul className="text-left text-xl font-bold text-black">
              {navbarData.map((data) => (
                <li key={data.name}>{data.name}</li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
