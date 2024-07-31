import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import {
  type SampleObject,
  type SampleOrder,
  type SampleVariance
} from '@/store/sagas/offline.saga';

import { SET_LINE_STYLE } from './constants';
import {
  type lineWiseValueObj,
  type Payload,
  type PayloadCustomer,
  type setLineStyleType
} from './types';

const setLineStyleInitialState: setLineStyleType = {
  buyerName: '',
  buyerId: '',
  styleID: '',
  styleName: '',
  orderId: '',
  orderName: '',
  itemId: '',
  offlineCurrentCustomersQuery: [],
  lineWiseValue: [],
  alertStatus: false,
  buyerDataStyleDataOrder: [],
  orderVariance: [],
  colorList: null,
  sizeList: null
};

export const setLineStyle = createSlice({
  name: SET_LINE_STYLE,
  initialState: setLineStyleInitialState,
  reducers: {
    updateLineStyle: (state: setLineStyleType, payload: PayloadAction<Payload>) => {
      switch (payload.payload.itemName) {
        case 'buyer':
          state.buyerName = payload.payload.buyerName;
          state.buyerId = payload.payload.buyerId;
          state.orderId = '';
          state.orderName = '';
          state.styleID = '';
          state.styleName = '';
          break;

        case 'style':
          state.styleID = payload.payload.styleID?.toString();
          state.styleName = payload.payload.styleName;
          state.itemId = payload.payload.itemId;
          break;

        case 'order':
          state.orderId = payload.payload.orderId?.toString();
          state.orderName = payload.payload.orderName;
          break;

        default:
          // Handle the default case if itemName doesn't match any of the specified cases
          break;
      }
    },
    // clearLineStyle
    clearLineStyle: (state: setLineStyleType) => {
      state.buyerName = '';
      state.buyerId = '';
      state.styleID = '';
      state.styleName = '';
      state.orderId = '';
      state.orderName = '';
    },
    getOfflineCurrentCustomersQuery: (state: setLineStyleType) => {
      state.alertStatus = false;
    },
    setOfflineCurrentCustomersQuery: (
      state: setLineStyleType,
      payload: PayloadAction<PayloadCustomer>
    ) => {
      state.offlineCurrentCustomersQuery = payload.payload.payload;
    },

    updateLineData: (state: setLineStyleType, payload: PayloadAction<lineWiseValueObj[]>) => {
      state.lineWiseValue = payload.payload;
    },
    updateStatus: (state: setLineStyleType, payload: PayloadAction<boolean>) => {
      state.alertStatus = payload.payload;
    },
    setBuyerData: (state: setLineStyleType, payload: PayloadAction<SampleObject[]>) => {
      state.buyerDataStyleDataOrder = payload.payload;
    },
    updateVariance: (state: setLineStyleType, payload: PayloadAction<SampleVariance[]>) => {
      state.orderVariance = payload.payload;
    },
    // checked
    setSelectedOrder: (state: setLineStyleType, payload: PayloadAction<SampleOrder>) => {
      state.orderId = payload.payload.orderID;
      state.orderName = payload.payload.orderName;
    }
  }
});

export const {
  updateLineStyle,
  clearLineStyle,
  getOfflineCurrentCustomersQuery,
  setOfflineCurrentCustomersQuery,
  updateLineData,
  updateStatus,
  setBuyerData,
  updateVariance,

  // checked
  setSelectedOrder
} = setLineStyle.actions;

export default setLineStyle.reducer;
