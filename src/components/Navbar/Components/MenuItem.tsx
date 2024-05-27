import { FC } from "react";
import { ChildItem } from "../../../utils/types";
import SubMenu from "./SubMenu";
import { MenuItem } from "@headlessui/react";
import { classNames } from "../../../utils/useClassName";

const MenuItemComponent: FC<{ child: ChildItem }> = ({ child }) => {
  return child.subChilds ? (
    <SubMenu child={child} />
  ) : (
    <MenuItem key={child.href}>
      {({ focus }) => (
        <a
          href={child.href}
          className={classNames(
            focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm hover:bg-textPrimary hover:text-white"
          )}
        >
          {child.name}
        </a>
      )}
    </MenuItem>
  );
};

export default MenuItemComponent;
