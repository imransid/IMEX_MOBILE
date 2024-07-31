import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AppItemImage } from '@/models/defect';

import { DEFECT_LIST_TYPES } from './constants';
import {
  type IDefectItemCount,
  type IDefectListInitialState,
  type IDefectListQueryData,
  type IQualityDefect,
  type ISvgSelection
} from './types';

const defectListInitialState: IDefectListInitialState = {
  qualityDefect: [],
  tempQualityDefect: [],
  defectItemCount: [],
  tempDefectItemCount: [],
  lastDefectItemCount: [],
  tempPositionSelection: [],
  currentStyleData: null,
  defectListData: null,
  operationsBreakDownData: null,
  itemImageData: null,
  filterdItemImages: [],
  qmsDefectSequence: null,
  index: 0,
  isAlterSelect: false,
  isRejectSelect: false
};

export const defectListSlice = createSlice({
  name: DEFECT_LIST_TYPES,
  initialState: defectListInitialState,
  reducers: {
    addQualityDefect: state => {
      state.qualityDefect = [...state.qualityDefect, ...state.tempQualityDefect];
      state.lastDefectItemCount = state.tempDefectItemCount;
      if (state.defectItemCount.length > 0) {
        state.defectItemCount.forEach(defect => {
          state.tempDefectItemCount.forEach(tempDefect => {
            if (defect.defectId === tempDefect.defectId) {
              defect.count = defect.count + tempDefect.count;
              state.tempDefectItemCount = state.tempDefectItemCount.filter(
                filterTempDefect => filterTempDefect.defectId !== tempDefect.defectId
              );
            }
          });
        });
        state.defectItemCount = [...state.defectItemCount, ...state.tempDefectItemCount];
        state.defectItemCount = state.defectItemCount.sort(
          (a: IDefectItemCount, b: IDefectItemCount) => b.count - a.count
        );
      } else {
        state.defectItemCount = [...state.tempDefectItemCount];
        state.defectItemCount = state.defectItemCount.sort(
          (a: IDefectItemCount, b: IDefectItemCount) => b.count - a.count
        );
      }
    },
    addTempQualityDefect: (state, action: PayloadAction<IQualityDefect>) => {
      if (state.tempDefectItemCount.length > 0 && state.tempQualityDefect.length > 0) {
        const existQualityDefect = state.tempQualityDefect.filter(
          item =>
            item.defect.id === action.payload.defect.id && item.partId === action.payload.partId
        );
        if (existQualityDefect.length === 1) {
          state.tempQualityDefect = state.tempQualityDefect.filter(
            defect => defect.defect.id !== existQualityDefect[0].defect.id
          );
          state.tempDefectItemCount.forEach((defect: IDefectItemCount) => {
            if (defect.defectId === existQualityDefect[0].defect.id) {
              if (defect.count !== 0) defect.count = defect.count - 1;
              if (defect.count === 0)
                state.tempDefectItemCount = state.tempDefectItemCount.filter(
                  item => item.defectId !== existQualityDefect[0].defect.id
                );
            }
          });
        } else {
          state.tempQualityDefect.push(action.payload);
          const existDefect = state.tempDefectItemCount.filter(
            item => item.defectId === action.payload.defect.id
          );
          if (existDefect.length === 1) {
            // If defect exist in temporary count array
            state.tempDefectItemCount.forEach((defect: IDefectItemCount) => {
              if (defect.defectId === action.payload.defect.id) {
                defect.count = defect.count + 1;
              }
            });
          } else {
            state.tempDefectItemCount.push({
              defectId: action.payload.defect.id,
              defectName: action.payload.defect.name,
              count: 1
            });
          }
        }
      } else {
        state.tempQualityDefect = [...state.tempQualityDefect, action.payload];
        state.tempDefectItemCount = [
          ...state.tempDefectItemCount,
          {
            defectId: action.payload.defect.id,
            defectName: action.payload.defect.name,
            count: 1
          }
        ];
      }

      state.index = state.index + 1;
    },
    addTempSlectedSvg: (state, action: PayloadAction<ISvgSelection>) => {
      const { tempPositionSelection } = state;
      tempPositionSelection.push(action.payload);
    },
    addQueryDataForDefectEntry: (state, action: PayloadAction<IDefectListQueryData>) => {
      // state.defectListData = action.payload.defectListData;
      state.itemImageData = action.payload.itemImageData;
      state.operationsBreakDownData = action.payload.operationsBreakDownData;
      state.qmsDefectSequence = action.payload.qmsDefectSequence;
    },
    addfilterdItemImages: (state, action: PayloadAction<AppItemImage[]>) => {
      state.filterdItemImages = action.payload;
    },
    resetfilterdItemImages: state => {
      state.filterdItemImages = [];
    },
    resetTempQualityDefect: state => {
      state.tempQualityDefect = [];
      state.tempDefectItemCount = [];
      state.tempPositionSelection = [];
    },
    resetTempPositionSelection: state => {
      state.tempPositionSelection = [];
    },
    resetQualityDefect: state => {
      state.qualityDefect = [];
      state.defectItemCount = [];
    },
    resetLastDefectItemCount: state => {
      state.lastDefectItemCount = [];
    },
    decereaseDefectItemCount: state => {
      if (state.defectItemCount.length > 0 && state.lastDefectItemCount.length > 0) {
        state.defectItemCount.forEach(defect => {
          state.lastDefectItemCount.forEach(lastDefect => {
            if (defect.defectId === lastDefect.defectId) {
              defect.count = defect.count - lastDefect.count;
              state.lastDefectItemCount = state.lastDefectItemCount.filter(
                filterLastDefect => filterLastDefect.defectId !== lastDefect.defectId
              );
              if (defect.count === 0) {
                state.defectItemCount = state.defectItemCount.filter(
                  filterDefect => filterDefect.defectId !== lastDefect.defectId
                );
              }
            }
          });
        });
      }
    },
    selectAlter: state => {
      state.isAlterSelect = true;
      state.isRejectSelect = false;
    },
    selectReject: state => {
      state.isRejectSelect = true;
      state.isAlterSelect = false;
    },
    resetAlterRejectSelection: state => {
      state.isAlterSelect = false;
      state.isRejectSelect = false;
    }
  }
});

export const {
  addQualityDefect,
  addTempQualityDefect,
  addTempSlectedSvg,
  addQueryDataForDefectEntry,
  resetTempQualityDefect,
  resetTempPositionSelection,
  resetQualityDefect,
  resetLastDefectItemCount,
  decereaseDefectItemCount,
  selectAlter,
  selectReject,
  resetAlterRejectSelection,
  addfilterdItemImages,
  resetfilterdItemImages
} = defectListSlice.actions;

export default defectListSlice.reducer;
