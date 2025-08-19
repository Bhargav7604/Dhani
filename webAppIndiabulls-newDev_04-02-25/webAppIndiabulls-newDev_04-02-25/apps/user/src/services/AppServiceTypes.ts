export interface StrategyResponse {
    id: number;
    strategyCategoryId: number;
    entryDetailsId: number;
    strategyAdditionsId: number;
    exitSettingId: number;
    name: string;
    description: string;
    typeOfStrategy: string;
    underlyingId: number;
    positionType: string;
    status: string;
    atmType: string;
    expiry: string;
    expiryType: string;
    category: string;
    minCapital: number;
    multiplier: number;
    stopLoss: number;
    deltaSlippage: number;
    target: number;
    executionType: string;
    reSignalCount: number;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
    deleteIndicator: string;
  }
  
  export interface DropdownOption {
    key: string;
    val: string;
  }
  
  export interface DropdownList {
    atmType: DropdownOption[];
    underlying: DropdownOption[];
    order: DropdownOption[];
    executionType: DropdownOption[];
    multiplier: DropdownOption[];
  }
  
  export interface AllStrategyResponse {
    strategies: StrategyResponse[];
    dropdownList: DropdownList;
  }