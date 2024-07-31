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
