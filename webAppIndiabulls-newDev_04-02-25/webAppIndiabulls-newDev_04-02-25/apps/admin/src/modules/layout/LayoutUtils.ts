interface SidebarSubItem {
  path: string;
  label: string;
}

interface SidebarItem {
  path: string;
  label: string;
  icon?: React.ReactNode;
  subItems?: SidebarSubItem[];
}

export interface SidebarProps {
  sidebarItems: SidebarItem[];
  openSubmenu: string | null;
  handleSubmenuToggle: (path: string) => void;
}

type SubItem = {
  path: string;
  label: string;
};
export interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;

  subItems?: SubItem[];
}

export interface MenuOverlayProps {
  isOpen: boolean;
  data: SidebarItem[];
  isClosing: boolean;
  onActiveButtonClick: (id: number) => void;
  handleSubmenuToggle: (path: string) => void;
  openSubmenu: string | null;
  menuRef: React.RefObject<HTMLDivElement>;
}
export interface ToasterInterface {
  id: number;
  status: boolean;
  message: string;
  duration: number;
}

export interface ToasterSliceProps {
  toasters: ToasterInterface[];
}