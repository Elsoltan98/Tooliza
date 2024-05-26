export type ChildItem = {
  name: string;
  href: string;
  current: boolean;
  subChilds?: ChildItem[];
};

export type NavbarItem = {
  name: string;
  href: string;
  current: boolean;
  childs?: ChildItem[];
};
