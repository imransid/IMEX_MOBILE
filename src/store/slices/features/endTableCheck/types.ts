export interface IQualityDefectAPI {
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
  operation: {
    id: number;
  };
}

export interface IQualityEntry {
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
  newQualityDefect: IQualityDefectAPI[];
  sampleSize: number;
  checkOutput: string;
  productionTime: string;
  transactionId: string;
  deviceId: string;
  repaired: boolean;
}

// Main interface representing the JSON structure
export interface IQualityData {
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
  newQualityDefect: IQualityDefectAPI[];
  sampleSize: number;
  checkOutput: string;
  productionTime: string;
  transactionId: string;
  deviceId: string;
  isRepaired: boolean;
  varience?: IVariance;
}

export interface IVariance {
  id: number;
}

export interface UsersStateType {
  syncReqInfo: IQualityData[];
  isLoading: boolean;
  errors: string;
  repairMode: boolean;
  qualityType: number;
  workProcess: number;
  repaired: boolean;
  appConnectDate: string;
  currentStatus: string;
  lastCleanDate: string;
  productionFireTime: string;
  qualityTypeName: string;
  varianceSelected: null | IVariance;
  selectedColor: string;
  selectedSize: string;
  bottomStreet: boolean;
  reportColorValue: null | ColorAndSizeOutput;
  reportColorLoader: boolean;
}

export interface ColorAndSizeOutput {
  data: {
    timestamp: number;
    status: string;
    statusCode: number;
    message: string;
    totalCount: number;
    numberOfElements: number;
    content: Array<{
      styleName: string;
      styleValueList: Array<{
        poName: string;
        poValueList: Array<{
          color: string;
          colorValueList: Array<{
            size: string;
            qcPass: number;
            totalAlter: number;
            totalReject: number;
            totalRepairedQcPass: number;
            totalRepairedLAlter: number;
            totalRepairedReject: number;
          }>;
        }>;
      }>;
    }>;
  };
  message: string;
}

export interface PayloadQualityTypeWorkProcess {
  qualityType: number;
  workProcess: number;
  qualityTypeName: string;
}

export interface IUndoPrams {
  syncReqInfo: IQualityData[];
  passValue: number;
  alterValue: number;
  rejectValue: number;
}

export interface IUpdateProductionValue {
  passValue: number;
  alterValue: number;
  rejectValue: number;
}

export interface ColorValue {
  size: string;
  qcPass: number;
  totalAlter: number;
  totalReject: number;
}

export interface POValue {
  color: string;
  colorValueList: ColorValue[];
}

export interface StyleValue {
  poName: string;
  poValueList: POValue[];
}

export interface Style {
  styleName: string;
  styleValueList: StyleValue[];
}

export interface ResponseData {
  timestamp: number;
  status: string;
  statusCode: number;
  message: string;
  totalCount: number;
  numberOfElements: number;
  content: Style[];
}

export interface ApiResponse {
  data: ResponseData;
  message: string;
}
