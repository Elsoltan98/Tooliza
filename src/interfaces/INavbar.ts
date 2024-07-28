// Define the type for a single navbar item
export type TNavbarItem = {
  name: string;
  href: string;
  current: boolean;
  subChilds?: TSubNavbarItem[];
};

// Define the type for a sub navbar item
export type TSubNavbarItem = {
  name: string;
  href: string;
  current: boolean;
};

// Define the interface for the navbar data
export interface INavbarData {
  name: string;
  href: string;
  current: boolean;
  childs?: TNavbarItem[];
}
