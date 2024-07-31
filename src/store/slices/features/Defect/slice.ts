import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { DEFECTS_TYPES } from './constants';
import { type IQualityDefect } from './types';

interface IDefect {
  id: number;
  name: string;
}

const defectsInitialState: IQualityDefect = {
  defecType: 'alter',
  defect: {
    id: 0,
    name: ''
  },
  organization: {
    id: 0
  },
  imageId: 0,
  partId: '',
  positionX: 0,
  positionY: 0,
  operation: {
    id: 0
  }
};

export const defectsSlice = createSlice({
  name: DEFECTS_TYPES,
  initialState: defectsInitialState,
  reducers: {
    addImageId: (state: IQualityDefect, action: PayloadAction<number>) => {
      state.imageId = action.payload;
    },
    addDefect: (state: IQualityDefect, action: PayloadAction<IDefect>) => {
      state.defect.id = action.payload.id;
      state.defect.name = action.payload.name;
    },
    addOperation: (state: IQualityDefect, action: PayloadAction<number>) => {
      state.operation.id = action.payload;
    },
    addOrganization: (
      state: IQualityDefect,
      action: PayloadAction<{ defecType: string; orgId: number }>
    ) => {
      state.defecType = action.payload.defecType;
      state.organization.id = action.payload.orgId;
    },
    addSvagPartID: (state: IQualityDefect, action: PayloadAction<string>) => {
      state.partId = action.payload;
    },
    addSvagPartXPosition: (state: IQualityDefect, action: PayloadAction<number>) => {
      state.positionX = action.payload;
    },
    addSvagPartYPosition: (state: IQualityDefect, action: PayloadAction<number>) => {
      state.positionY = action.payload;
    },
    resetDefect: (state: IQualityDefect) => {
      Object.assign(state, defectsInitialState);
    }
  }
});

export const {
  addDefect,
  addOperation,
  addOrganization,
  addImageId,
  addSvagPartID,
  addSvagPartXPosition,
  addSvagPartYPosition,
  resetDefect
} = defectsSlice.actions;

export default defectsSlice.reducer;
