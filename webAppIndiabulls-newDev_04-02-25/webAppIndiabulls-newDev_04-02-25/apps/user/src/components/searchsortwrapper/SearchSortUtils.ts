
export interface DropDownItem {
  val: string;
  key: string;
}

export interface SearchSortProps {
  title?: string;
  showQuantity?: boolean;
  inputName: string;
  sortName: string;
  quantityName?: string;
  control: any;
  sortOptions: DropDownItem[];
  wrapdivwidth?: string;
  viewAllStrategy?: boolean;
  searchPlaceholder?: string;
}

export interface QuantitySearchProps {
  viewAllStrategy?: boolean;
}


