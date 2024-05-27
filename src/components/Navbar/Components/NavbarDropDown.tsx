import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { NavbarItem } from "../../../utils/types";
import { classNames } from "../../../utils/useClassName";

interface NavbarDropDownProps {
  data: NavbarItem[];
}

const NavbarDropDown: FC<NavbarDropDownProps> = ({ data }) => {
  const [, setNavbarData] = useState(data);

  const toggleCurrent = (index: number) => {
    setNavbarData((prevData) => {
      return prevData.map((item, i) => {
        if (i === index) {
          if (!item.current) item.current = !item.current;
        } else {
          item.current = false;
        }
        return item;
      });
    });
  };

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {data.map((item, index) => (
          <Fragment key={item.name}>
            {item.childs ? (
              <DropDownMenu {...item} />
            ) : (
              <Link
                reloadDocument={false}
                key={item.name}
                to={item.href}
                onClick={() => toggleCurrent(index)}
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropDown;
