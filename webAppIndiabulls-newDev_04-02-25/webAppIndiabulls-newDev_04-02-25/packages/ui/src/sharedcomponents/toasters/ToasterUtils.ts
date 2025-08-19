export interface ToasterProps {
  status: boolean;
  message: string;
  duration?: number;
  onClose: () => void;
}

export interface SymbolTextProps {
  $symboltextcolor?: string;
}
