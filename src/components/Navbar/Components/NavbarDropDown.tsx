import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { NavbarItem } from "../../../utils/types";
import { classNames } from "../../../utils/useClassName";

interface NavbarDropDownProps {
  data: NavbarItem[];
}

const NavbarDropDown: FC<NavbarDropDownProps> = ({ data }) => {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {data.map((item) => (
          <Fragment key={item.name}>
            {item.childs ? (
              <DropDownMenu {...item} />
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropDown;
