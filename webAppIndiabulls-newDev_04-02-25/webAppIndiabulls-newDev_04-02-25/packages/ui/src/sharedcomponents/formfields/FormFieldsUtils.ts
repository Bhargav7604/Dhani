export interface OptionProps {
  val?: string | number | undefined;
  key?: string | number | undefined;
}
export interface NoCodeSelectProps {
  heading?: string;
  item?: OptionProps[];
  disabled?: boolean;
  error?: any;
  required?: boolean;
  info?: string;
}
export interface DIYHeaderProps {
  $enterondays?: string;
}

export interface StyledToggleProps {
  $active?: boolean;
}
export interface ToggleItem {
    val: string | number;
    key: string | number;
  }
  
  export interface ToggleItemProps {
    heading: string;
    item: ToggleItem[];
    error?: any;
    value?: any; // Adjust this to allow complex types
    onChange: (newValue: string | number | null) => void; // Handler for toggle change
    required?: boolean;
    info?: string;
    disabled?: boolean;
  }