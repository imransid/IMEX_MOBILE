import { type SampleObject, type SampleVariance } from '@/store/sagas/offline.saga';

export interface lineWiseValueObj {
  passValue: number;
  alterValue: number;
  rejectValue: number;
  lineName: string;
  lineId: string;
  repairPassValue: number;
  repairAlterValue: number;
  repairRejectValue: number;
}

export interface DropdownItem {
  label: string;
  value: string;
  id: string;
  orderQuantity: string;
  size: string;
  color: string;
}

// This type will represent the sub-state for getting a single user by ID
export interface setLineStyleType {
  buyerName: string;
  buyerId: string;
  styleID: string;
  styleName: string;
  orderId: string;
  orderName: string;
  itemId: string;
  offlineCurrentCustomersQuery: Customer[];
  lineWiseValue: lineWiseValueObj[];
  alertStatus: boolean;
  buyerDataStyleDataOrder: SampleObject[];
  orderVariance: SampleVariance[];
  colorList: DropdownItem | null;
  sizeList: DropdownItem | null;
}

export interface Payload {
  itemName: string;
  buyerName: string;
  buyerId: string;
  styleID: string;
  styleName: string;
  orderId: string;
  orderName: string;
  itemId: string;
}

export interface PayloadCustomer {
  payload: Customer[];
}

interface QualityDefect {
  defect: {
    id: number;
  };
  organization: {
    id: number;
  };
  imageId: number;
  partId: string;
  positionX: number;
  positionY: number;
}

export interface QualityTransaction {
  orderEntity: {
    id: number;
  };
  workProcess: {
    id: number;
  };
  organization: {
    id: number;
  };
  style: {
    id: string;
  };
  qualityType: {
    id: number;
  };
  newQualityDefect: QualityDefect[];
  sampleSize: number;
  checkOutput: string;
  productionTime: string;
  transactionId: string;
  deviceId: string;
  repaired: boolean;
}

export interface Customer {
  id: string;
  name: string;
  serverId: string;
  address: string;
}
