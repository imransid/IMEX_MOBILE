import {
  type AppItemImage,
  type IDataObject,
  type IDefect,
  type IDefectSequence,
  type IOperationBreakDowns
} from '@/models/defect';
import { type IStyles } from '@/models/styles';

export interface IDefectListInitialState {
  qualityDefect: IQualityDefect[];
  tempQualityDefect: IQualityDefect[];
  index: number;
  defectItemCount: IDefectItemCount[];
  tempDefectItemCount: IDefectItemCount[];
  lastDefectItemCount: IDefectItemCount[];
  tempPositionSelection: ISvgSelection[];
  currentStyleData: IStyles | null;
  defectListData: IDefect | null;
  operationsBreakDownData: IOperationBreakDowns | null;
  itemImageData: IDataObject | null;
  filterdItemImages: AppItemImage[];
  qmsDefectSequence: IDefectSequence | null;
  isAlterSelect: boolean;
  isRejectSelect: boolean;
}

export interface IDefectListQueryData {
  currentStyleData?: IStyles | null;
  // defectListData: IDefect | null;
  operationsBreakDownData: IOperationBreakDowns | null;
  itemImageData: IDataObject | null;
  qmsDefectSequence: IDefectSequence | null;
}

export interface ISvgSelection {
  imageId: number;
  partId: string;
  positionX: number;
  positionY: number;
}

export interface IDefectItemCount {
  count: number;
  defectId: number;
  defectName: string;
}
export interface IQualityDefect {
  defecType: string;
  defect: {
    id: number;
    name: string;
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
