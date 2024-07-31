import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { END_TABLE_CHECK_TYPE } from './constants';
import {
  type IQualityData,
  type IUndoPrams,
  type IVariance,
  type PayloadQualityTypeWorkProcess,
  type UsersStateType
} from './types';
const usersInitialState: UsersStateType = {
  syncReqInfo: [],
  repairMode: false,
  isLoading: false,
  errors: '',
  qualityType: 0,
  workProcess: 0,
  repaired: false,
  varianceSelected: null,
  currentStatus: '', // pass, alter, reject
  appConnectDate: moment().format('YYYY-MM-DD'),
  lastCleanDate: moment().format('YYYY-MM-DD'),
  productionFireTime: moment().format('YYYY-MM-DDTHH:mm:ss'),
  qualityTypeName: '',
  selectedColor: '',
  bottomStreet: false,
  selectedSize: '',
  reportColorValue: null,
  reportColorLoader: false
};

export const usersSlice = createSlice({
  name: END_TABLE_CHECK_TYPE,
  initialState: usersInitialState,
  reducers: {
    // pass button press
    sendQueryTransactionsAction: (state: UsersStateType) => {
      // state.isLoading = true;
    },
    sendAlterTransactionsAction: (state: UsersStateType) => {
      state.isLoading = true;
      state.currentStatus = 'alter';
    },
    sendRejectTransactionsAction: (state: UsersStateType) => {
      state.isLoading = true;
      state.currentStatus = 'reject';
    },
    undoTransaction: (state: UsersStateType) => {
      state.isLoading = true;
    },

    // pass transaction online
    successfullyQueryTransactionsAction: (
      state: UsersStateType,
      payload: PayloadAction<IQualityData[]>
    ) => {
      state.productionFireTime = moment().format('YYYY-MM-DDTHH:mm:ss');
    },
    // no internet pass Transaction
    successfullySyncQueryTransactionsAction: (
      state: UsersStateType,
      payload: PayloadAction<IQualityData[]>
    ) => {
      state.isLoading = false;
      state.syncReqInfo = [...state.syncReqInfo, ...payload.payload];
      // state.passValue = state.passValue + 1;
      state.productionFireTime = moment().format('YYYY-MM-DDTHH:mm:ss');
    },

    FailedQueryTransactionsAction: (state: UsersStateType) => {
      state.isLoading = false;
    },
    setQualityTypeWorkProcess: (
      state: UsersStateType,
      payload: PayloadAction<PayloadQualityTypeWorkProcess>
    ) => {
      state.workProcess = payload.payload.workProcess;
      state.qualityType = payload.payload.qualityType;
      state.qualityTypeName = payload.payload.qualityTypeName;
    },
    updateTransactionAction: (state: UsersStateType) => {
      state.isLoading = true;
      state.isLoading = false;
    },
    undoLastTransaction: (state: UsersStateType, payload: PayloadAction<any>) => {
      state.isLoading = false;
    },
    // when undo done successfully
    undoLastTransactionSuccessfully: (
      state: UsersStateType,
      payload: PayloadAction<IUndoPrams>
    ) => {
      state.syncReqInfo = payload.payload.syncReqInfo;
    },
    offLineUpdateTransactionAction: (state: UsersStateType) => {
      state.isLoading = true;

      state.syncReqInfo.pop();
      // Update productionFireTime if necessary
      state.productionFireTime = moment().format('YYYY-MM-DDTHH:mm:ss');
      // Set isLoading to false after the operation
      state.isLoading = false;
    },
    setRepairMode: (state: UsersStateType, payload: PayloadAction<boolean>) => {
      state.repaired = payload.payload;
    },
    submitAllSyncDataAction: (state: UsersStateType) => {
      state.isLoading = false;
    },
    successfullySubmitAllSyncDataAction: (state: UsersStateType) => {
      // when api post everything successfully
      state.syncReqInfo = [];

      state.isLoading = false;
    },
    setTransactionDate: state => {
      state.appConnectDate = moment().format('YYYY-MM-DD');
    },
    updateAlterRejectList: (state: UsersStateType, payload: PayloadAction<IQualityData[]>) => {
      state.isLoading = false;
      state.productionFireTime = moment().format('YYYY-MM-DDTHH:mm:ss');
    },
    updateAlterRejectListOffline: (
      state: UsersStateType,
      payload: PayloadAction<IQualityData[]>
    ) => {
      state.syncReqInfo = [...state.syncReqInfo, ...payload.payload];
      state.isLoading = false;
      state.productionFireTime = moment().format('YYYY-MM-DDTHH:mm:ss');
    },
    cleanCountValueAfterOneDayServed: (state: UsersStateType) => {
      state.appConnectDate = moment().format('YYYY-MM-DD');
    },
    stopEndTableLoader: (state: UsersStateType) => {
      state.isLoading = false;
    },
    updateVarianceSelected: (state: UsersStateType, payload: PayloadAction<IVariance | null>) => {
      // varianceSelected
      state.varianceSelected = payload.payload;
    },
    updateSelectedColor: (state: UsersStateType, payload: PayloadAction<string>) => {
      state.selectedColor = payload.payload;
    },
    updateSelectedSize: (state: UsersStateType, payload: PayloadAction<string>) => {
      state.selectedSize = payload.payload;
    },
    openBottomStreet: (state: UsersStateType, payload: PayloadAction<boolean>) => {
      state.bottomStreet = payload.payload;
    },
    getReportColorValue: (state: UsersStateType) => {
      state.reportColorLoader = true;
    },
    setReportColorValue: (state: UsersStateType, payload: PayloadAction<any>) => {
      state.reportColorValue = payload.payload;
      state.reportColorLoader = false;
      state.bottomStreet = true;
    },
    stopLoaderReportColor: (state: UsersStateType) => {
      state.reportColorLoader = false;
    }
  }
});

export const {
  sendQueryTransactionsAction,
  FailedQueryTransactionsAction,
  setQualityTypeWorkProcess,
  sendAlterTransactionsAction,
  sendRejectTransactionsAction,
  setRepairMode,
  successfullyQueryTransactionsAction,
  successfullySyncQueryTransactionsAction,
  updateTransactionAction,
  offLineUpdateTransactionAction,
  successfullySubmitAllSyncDataAction,
  submitAllSyncDataAction,
  setTransactionDate,
  updateAlterRejectList,
  cleanCountValueAfterOneDayServed,
  stopEndTableLoader,
  undoLastTransaction,
  undoLastTransactionSuccessfully,
  updateAlterRejectListOffline,
  updateVarianceSelected,
  updateSelectedColor,
  updateSelectedSize,
  openBottomStreet,
  getReportColorValue,
  setReportColorValue,
  stopLoaderReportColor
} = usersSlice.actions;

export default usersSlice.reducer;
