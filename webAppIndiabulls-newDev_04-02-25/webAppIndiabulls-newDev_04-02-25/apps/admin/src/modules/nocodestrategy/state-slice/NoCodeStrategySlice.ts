import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DescriptionTypes,
  DropDownItem,
  NoCodeStrategyResponse,
} from "../services/NoCodeStrategyServiceTypes";
import {
  SaveDiyDropDownsPayload,
  SaveStrategyIDPayload,
} from "../../../store/StoreUtils";
import { LegItem, LegItemPayload } from "../NoCodeStrategyUtils";

interface InitialStateInterface {
  DiyDropDownRes: NoCodeStrategyResponse;
  selectedStrategyID: number | null;
  currentPage: "easystrategy" | "create" | "mysaved" | "";
  showMySaved: boolean;
  legData: LegItem[];
  indexValue: string | number;
  rePopulateForm: number;
}

export const InitialState: InitialStateInterface = {
  DiyDropDownRes: {
    strategyType: [] as DropDownItem[],
    daysMenu: [] as DropDownItem[],
    descriptions: {} as DescriptionTypes,
    segmentType: [] as DropDownItem[],
    profitMtm: [] as DropDownItem[],
    expiryType: [] as DropDownItem[],
    order: [] as DropDownItem[],
    lot: [] as DropDownItem[],
    strikeSelection: [] as DropDownItem[],
    strikeType: [] as DropDownItem[],
    underlyingMenu: [] as DropDownItem[],
    exitAfterEntry: [] as DropDownItem[],
    trl: [] as DropDownItem[],
    tgt: [] as DropDownItem[],
    exitOnExpiry: [] as DropDownItem[],
    executionType: [] as DropDownItem[],
    positionType: [] as DropDownItem[],
  },
  selectedStrategyID: null,
  currentPage: "easystrategy",
  showMySaved: false,
  legData: [] as LegItem[],
  indexValue: "",
  rePopulateForm: 0,
};

const NoCodeStrategySlice = createSlice({
  name: "diy",
  initialState: InitialState,
  reducers: {
    saveDiyDropDowns(state, action: SaveDiyDropDownsPayload) {
      state.DiyDropDownRes = action.payload.DiyDropDownRes;
    },
    saveStrategyID(state, action: SaveStrategyIDPayload) {
      state.selectedStrategyID = action.payload.selectedStrategyID;
    },
    clearStrategyID(state) {
      state.selectedStrategyID = null;
    },
    navigationToPage(state, action) {
      state.currentPage = action.payload.currentPage;
    },
    openMySavedStrategy(state, action) {
      state.showMySaved = action.payload.showMySaved;
    },

    createLeg(state, action: PayloadAction<LegItem>) {
      state.legData.push({
        ...action.payload,
        id: action.payload.id ?? Date.now(), // Only generate an ID if it's not provided
      });
    },

    copyLeg(state, action: PayloadAction<{ index: number; legData: LegItem }>) {
      const { legData } = action.payload;

      const copiedLeg = {
        ...legData,
        id: legData.id ?? Date.now(), // If original leg has an ID, retain it
      };

      state.legData.push(copiedLeg);
    },
    deleteLeg(state, action: PayloadAction<{ id: number }>) {
      state.legData = state.legData.filter(
        (leg) => leg.id !== action.payload.id
      );
    },
    saveLegData(state, action: LegItemPayload) {
  state.legData = Array.isArray(action.payload) ? action.payload : [action.payload];
},
    clearLegData(state) {
      state.legData = [];
    },

    //This reducer function is for watching the underlying value to dynamically edit the options in the expiry field
    setIndexValue(state, action: PayloadAction<string | number>) { 
      state.indexValue = action.payload;
    },

    // This reducer function is for the state which will manage the re population of the form
    incrementRePopulateForm(state, action: PayloadAction<number>) {
      state.rePopulateForm = action.payload;
    }
    
   },
});

const { actions } = NoCodeStrategySlice;

export const {
  saveDiyDropDowns,
  saveStrategyID,
  clearStrategyID,
  navigationToPage,
  openMySavedStrategy,
  createLeg,
  copyLeg,
  deleteLeg,
  saveLegData,
  clearLegData,
  setIndexValue,
  incrementRePopulateForm,
} = actions;

export default NoCodeStrategySlice.reducer;
