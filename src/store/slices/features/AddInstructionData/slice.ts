import { createSlice } from '@reduxjs/toolkit';

import { ADD_INSTRUCTION } from './constants';
import { type IAddInstructionType } from './types';

const AddInstructionInitialData: IAddInstructionType = {
  instruction: ''
};

export const addInstructionSlice = createSlice({
  name: ADD_INSTRUCTION,
  initialState: AddInstructionInitialData,
  reducers: {
    getAddInstructionAction: (state: IAddInstructionType) => {
      state.instruction = '';
    }
  }
});

export const { getAddInstructionAction } = addInstructionSlice.actions;

export default addInstructionSlice.reducer;
